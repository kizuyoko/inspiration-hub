import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCurrentLocation } from '../utils/getCurrentLocation';

//const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
const apiKey = import.meta.env.VITE_WEATHER_API_KEY_OPENWEATHER;

export const fetchWeather = createAsyncThunk('weather/fetchWeather', async () => {
  const { latitude, longitude } = await getCurrentLocation();
  //const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}`;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  const response = await axios.get(url);
  return {
    location: {
      name: response.data.name,
      country: response.data.sys.country,
    },
    current: {
      condition: {
        icon: response.data.weather[0].icon,
        text: response.data.weather[0].description,
      },
      temp_c: response.data.main.temp,
    },
  };
});

// Add this interface above the slice
interface WeatherState {
  weather: {
    location: {
      name: string;
      country: string;
    };
    current: {
      condition: {
        icon: string;
        text: string;
      };
      temp_c: number;
    };
  } | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    weather: null,
    status: 'idle',
    error: null,
  } as WeatherState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.weather = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch weather data';
      });
  },
});

export default weatherSlice.reducer;
