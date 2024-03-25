import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const uniqueCart = state.findIndex(
        (item) => item.id == action.payload.id
      );
      if (uniqueCart !== -1) {
        state[uniqueCart].qnt += action.payload.qnt;
      } else {
        state.push(action.payload);
      }
    },
    removeCart: (state, action) => {
      state.splice(
        state.findIndex((item) => item.id == action.payload),
        1
      );
    },
  },
});
export default cartSlice.reducer;
export const { addCart, removeCart } = cartSlice.actions;