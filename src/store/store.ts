import { configureStore } from '@reduxjs/toolkit';
import quoteReducer from './quoteSlice';
import weatherReducer from './weatherSlice';
import backgroundReducer from './backgroundSlice';

const store = configureStore({
  reducer: {
    quote: quoteReducer,
    weather: weatherReducer,
    background: backgroundReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
