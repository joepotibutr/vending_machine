import { createSlice } from "@reduxjs/toolkit";

interface ITest { type: string, data: any }

const modalSlice = createSlice({
    name: "modal",
    initialState: {
        isOpen: false,
        data: null,
        type: null
    },
    reducers: {
        openModalAction(state, { payload }) {
        return {
            isOpen: !state.isOpen,
            data: payload?.data || null, 
            type: payload?.type || null
        }
      },
    },
  });
  
  export const { openModalAction } = modalSlice.actions;
  export const modalReducer = modalSlice.reducer;