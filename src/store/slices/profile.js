import { createSlice } from '@reduxjs/toolkit';

export const profileReducer = createSlice({
  name: ' profileReducer ',
  initialState: [],
  reducers: {
    logIn: (state, action) => {
      state.push(action.payload);
    },
  },
});
export const { logIn } = profileReducer.actions;
export default profileReducer.reducer;
