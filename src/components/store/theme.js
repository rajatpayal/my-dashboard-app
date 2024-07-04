
import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    color: 'light', // Initial theme color
  },
  reducers: {
    toggleTheme: (state) => {
      state.color = state.color === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice;
