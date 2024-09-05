import { createSlice } from "@reduxjs/toolkit";

/*
  This is exampleSlice.ts. This is a slice, where we can define different functions
  for the state, for example for storing a value to the state or clearing that
  specific value. We then export these functions so that they can be passed to
  the rootReducer.
*/

export const exampleSlice = createSlice({
  name: "example",
  initialState: {
    example: null,
  },
  reducers: {
    saveExample: (state, action) => {
      state.example = action.payload;
    },
    clearExample: (state) => {
      state.example = null;
    },
  },
});

export const { saveExample, clearExample } = exampleSlice.actions;

export default exampleSlice.reducer;
