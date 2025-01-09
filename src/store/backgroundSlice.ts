import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = import.meta.env.VITE_BACKGROUNDIMAGE_API_KEY_UNSPLASH;

export const fetchBackgrounds = createAsyncThunk('background/fetchBackgrounds', async () => {
  const query = 'nature';
  const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${apiKey}`;
  // example: https://api.unsplash.com/search/photos?query=nature&client_id=D5TqvxAXZ2_swRnP7lfczdZMkQRrIDUOTIEvRU1lDck

  const response = await axios.get(url);

  return response.data.results.map((result: any) => ({
    id: result.id,
    url: result.urls.regular,
  }));
});

interface BackgroundState {
  backgrounds: {
    id: string;
    url: string;
  }[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  currentIndex: number;
  
}

const backgroundSlice = createSlice({
  name: 'background',
  initialState: {
    backgrounds: [],
    currentIndex: 0,
    status: 'idle',
    error: null,
  } as BackgroundState,
  reducers: {
    setCurrentIndex: (state, action) => {
      state.currentIndex = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBackgrounds.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBackgrounds.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.backgrounds = action.payload;
      });
  },
});

export const { setCurrentIndex } = backgroundSlice.actions;

export default backgroundSlice.reducer;



