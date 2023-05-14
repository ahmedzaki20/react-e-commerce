import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
export const fetchProducts = createAsyncThunk(
  'productReducer/fetchProducts',
  async () => {
    let fetchedProducts = await fetch('https://fakestoreapi.com/products');
    const data = await fetchedProducts.json();
    return data;
  }
);
export const productReducer = createSlice({
  name: 'productReducer',
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});
export const { addProduct } = productReducer.actions;
export default productReducer.reducer;
