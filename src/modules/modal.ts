import { createSlice } from "@reduxjs/toolkit";


const modalSlice = createSlice({
    name: "modal",
    initialState: {
        isOpen: false,
        data: null
    },
    reducers: {
        openModalAction(state, payload) {
        return {
            isOpen: !state.isOpen,
            data: payload
        }
      },
    },
  });
  
  export const { openModalAction } = modalSlice.actions;
  export const modalReducer = modalSlice.reducer;