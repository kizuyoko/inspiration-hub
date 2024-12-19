import { configureStore } from '@reduxjs/toolkit';
import quoteReducer from './quoteSlice';
import weatherReducer from './weatherSlice';

const store = configureStore({
  reducer: {
    quote: quoteReducer,
    weather: weatherReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
