import { configureStore } from "@reduxjs/toolkit";
import { keypadReducer } from "../modules/keypad";
import { modalReducer } from "../modules/modal";
import { balanceReducer } from "../modules/balance";

export const store = configureStore({
    reducer: {
      balance: balanceReducer,
      keypad: keypadReducer,
      modal: modalReducer
    },
  });
  
  export type RootState = ReturnType<typeof store.getState>;