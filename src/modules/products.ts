import { createSlice } from "@reduxjs/toolkit";


const productsSlice = createSlice({
    name: "products",
    initialState: [],
    reducers: {
        setProducts(state, action) {
        return action.payload
      },
      removeProduct(state, action) {
        const currentIdx = state.findIndex((product) => product.id === action.payload)


        return currentIdx !== -1 ? 
        [
          ...state.slice(0, currentIdx), 
          { ...state[currentIdx], quantity: state[currentIdx].quantity - 1 }, 
          ...state.slice(currentIdx + 1)
        ] 
        : state
      }
    },
  });
  
  export const { setProducts, removeProduct } = productsSlice.actions;
  export const productsReducer = productsSlice.reducer;