import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = import.meta.env.VITE_BACKGROUNDIMAGE_API_KEY_UNSPLASH;

export const fetchBackgrounds = createAsyncThunk('background/fetchBackgrounds', async (query: string) => {
  const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${apiKey}`;
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
  query: string;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  currentIndex: number;
}
const initialState: BackgroundState = {
  backgrounds: [],
  currentIndex: 0,
  query: 'landscape',
  status: 'idle',
  error: null,
};

const backgroundSlice = createSlice({
  name: 'background',
  initialState,
  reducers: {
    setCurrentIndex: (state, action) => {
      state.currentIndex = action.payload;
    },
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
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

export const { setCurrentIndex, setQuery } = backgroundSlice.actions;

export default backgroundSlice.reducer;



