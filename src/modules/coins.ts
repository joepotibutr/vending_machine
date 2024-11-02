import { createSlice } from "@reduxjs/toolkit";


const insertCoinSlice = createSlice({
    name: "coins",
    initialState: 0,
    reducers: {
      insertCoinAction(state, action) {
        return (state += action.payload);
      },
    },
  });
  
  export const { insertCoinAction } = insertCoinSlice.actions;
  export const coinsReducer = insertCoinSlice.reducer;