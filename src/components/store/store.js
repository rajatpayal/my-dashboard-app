// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import stopwatchSlice from './dashboard';
import themeSlice from './theme';

export const store = configureStore({
  reducer: {
    stopwatch: stopwatchSlice.reducer,
    theme: themeSlice.reducer,
  },
});
