import { configureStore } from '@reduxjs/toolkit';
import quoteReducer from './quoteSlice';
import weatherReducer from './weatherSlice';
import backgroundReducer from './backgroundSlice';
import goalReducer from './goalSlice';goalReducer;

const store = configureStore({
  reducer: {
    quote: quoteReducer,
    weather: weatherReducer,
    background: backgroundReducer,
    goals: goalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
