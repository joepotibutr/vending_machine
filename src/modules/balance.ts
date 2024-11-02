import { createSlice } from "@reduxjs/toolkit";


const balanceSlice = createSlice({
    name: "balance",
    initialState: 0,
    reducers: {
      addBalance(state, action) {
        return (state += action.payload);
      },
      decreaseBalance(state, action) {
        return (state -= action.payload);
      },
      resetBalance() {
        return 0
      },
    },
  });
  
  export const { addBalance, decreaseBalance, resetBalance } = balanceSlice.actions;
  export const balanceReducer = balanceSlice.reducer;