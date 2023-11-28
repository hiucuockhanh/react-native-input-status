import { configureStore } from '@reduxjs/toolkit';
import inputReducer from './inputSlice';

export const store = configureStore({
  reducer: {
    input: inputReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
