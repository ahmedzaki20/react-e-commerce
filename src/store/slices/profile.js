import { createSlice } from '@reduxjs/toolkit';

export const profileReducer = createSlice({
  name: ' profileReducer ',
  initialState: [],
  reducers: {
    logIn: (state, action) => {
      state.push(action.payload);
    },
    updateProfInfo: (state, action) => {
      return [action.payload];
    },
    logOut: (state, action) => {
      state.pop();
    },
  },
});
export const { logIn, logOut, updateProfInfo } = profileReducer.actions;
export default profileReducer.reducer;
