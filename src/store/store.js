import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice';
import CartReducer from './slices/addToCartSlice';
import favReducer from './slices/addToFav';
import signUpReducer from './slices/signUpslice';
import profileReducer from './slices/profile';

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: CartReducer,
    fav: favReducer,
    signUp: signUpReducer,
    profile: profileReducer,
  },
});
