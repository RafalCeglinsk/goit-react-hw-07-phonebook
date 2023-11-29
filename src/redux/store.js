import { configureStore } from '@reduxjs/toolkit';
import { contactReducers } from './contactSlice';

export const store = configureStore({
  reducer: contactReducers,
});
