import { createSlice } from "@reduxjs/toolkit";


const productsSlice = createSlice({
    name: "products",
    initialState: [],
    reducers: {
        setProducts(state, action) {
        return action.payload
      },
      removeProduct(state, action) {
        return state.filter((product) => product.productCode !== action.payload)
      }
    },
  });
  
  export const { setProducts, removeProduct } = productsSlice.actions;
  export const productsReducer = productsSlice.reducer;