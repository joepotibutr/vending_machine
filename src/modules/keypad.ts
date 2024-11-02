import { createSlice } from "@reduxjs/toolkit";


const keypadSlice = createSlice({
    name: "keypad",
    initialState: '',
    reducers: {
      setKeypadAction(state, action) {
        if (state.length === 2) return "";
        return state + action.payload;
      },
    },
  });
  
  export const { setKeypadAction } = keypadSlice.actions;
  export const keypadReducer = keypadSlice.reducer;