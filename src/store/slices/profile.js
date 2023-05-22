import { createSlice } from '@reduxjs/toolkit';

export const profileReducer = createSlice({
  name: ' profileReducer ',
  initialState: [],
  reducers: {
    logIn: (state, action) => {
        state.push(action.payload);
        console.log(action.payload);
    },
    logOut: (state, action) => {
      state.pop()

  },
  },
});
export const { logIn,  logOut } = profileReducer.actions;
export default profileReducer.reducer;
