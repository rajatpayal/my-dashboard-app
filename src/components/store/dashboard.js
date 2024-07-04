// src/features/stopwatchSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const stopwatchSlice = createSlice({
  name: 'stopwatch',
  initialState: {
    time: 0,
    isActive: false,
  },
  reducers: {
    start: (state) => {
      state.isActive = true;
    },
    stop: (state) => {
      state.isActive = false;
    },
    reset: (state) => {
      state.time = 0;
    },
    tick: (state) => {
      state.time += 1;
      if (state.time >= 32400) { // Reset if time exceeds 9 hours
        state.time = 0;
      }
    },
  },
});

export const { start, stop, reset, tick } = stopwatchSlice.actions;

export default stopwatchSlice;
