import { createSlice } from "@reduxjs/toolkit";


const modalSlice = createSlice({
    name: "modal",
    initialState: false,
    reducers: {
        openModalAction(state) {
        return !state
      },
    },
  });
  
  export const { openModalAction } = modalSlice.actions;
  export const modalReducer = modalSlice.reducer;