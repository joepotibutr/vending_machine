import { configureStore } from "@reduxjs/toolkit";
import { coinsReducer } from "../modules/coins";
import { keypadReducer } from "../modules/keypad";
import { modalReducer } from "../modules/modal";

export const store = configureStore({
    reducer: {
      coins: coinsReducer,
      keypad: keypadReducer,
      modal: modalReducer
    },
  });
  
  export type RootState = ReturnType<typeof store.getState>;