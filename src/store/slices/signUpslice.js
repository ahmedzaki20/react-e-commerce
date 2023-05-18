import { createSlice } from '@reduxjs/toolkit';

export const signUpReducer = createSlice({
  name: 'cartReducer ',
  initialState: [],
  reducers: {
    signUp: (state, action) => {
      state.push(action.payload);
    },
  },
});
export const { signUp } = signUpReducer.actions;
export default signUpReducer.reducer;
