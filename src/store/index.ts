import { configureStore } from "@reduxjs/toolkit";
import { keypadReducer } from "../modules/keypad";
import { modalReducer } from "../modules/modal";
import { balanceReducer } from "../modules/balance";
import { productsReducer } from "../modules/products";

export const store = configureStore({
    reducer: {
      balance: balanceReducer,
      keypad: keypadReducer,
      modal: modalReducer,
      products: productsReducer
    },
  });
  
  export type RootState = ReturnType<typeof store.getState>;