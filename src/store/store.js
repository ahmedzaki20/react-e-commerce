import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice';
import CartReducer from './slices/addToCartSlice';
import favReducer from './slices/addToFav';

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: CartReducer,
    fav: favReducer,
  },
});
