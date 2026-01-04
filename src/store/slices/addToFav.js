import { createSlice } from "@reduxjs/toolkit";

export const favReducer = createSlice({
  name: "favReducer ",
  initialState: [],
  reducers: {
    addToFav: (state, action) => {
      const cheak = state.some((product) => product.id === action.payload.id);
      if (cheak) {
        return state.filter((product) => product.id !== action.payload.id);
      } else state.push(action.payload);

      console.log(state);
    },
  },
});
export const { addToFav } = favReducer.actions;
export default favReducer.reducer;
