import { createSlice } from "@reduxjs/toolkit";

export const cartReducer = createSlice({
  name: "cartReducer ",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const findItem = state.find(
        (product) => product.id === action.payload.id
      );

      if (findItem) {
        findItem.qty++;
      } else {
        const cartItem = { ...action.payload, qty: 1 };
        state.push(cartItem);
      }
    },
    removeCart: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    clearCart: (state, action) => {
      return [];
    },
  },
});
export const { addToCart, removeCart, clearCart } = cartReducer.actions;
export default cartReducer.reducer;
