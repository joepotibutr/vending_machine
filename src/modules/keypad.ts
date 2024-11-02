import { createSlice } from "@reduxjs/toolkit";


const keypadSlice = createSlice({
    name: "keypad",
    initialState: '',
    reducers: {
      setKeypadAction(state, action) {
        return state + action.payload;
      },
      resetKeypad() {
        return ''
      },
    },
  });
  
  export const { setKeypadAction, resetKeypad } = keypadSlice.actions;
  export const keypadReducer = keypadSlice.reducer;