import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from './exampelSlice';
import quoteReducer from './quoteSlice';

const store = configureStore({
  reducer: {
    example: exampleReducer,
    quote: quoteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
