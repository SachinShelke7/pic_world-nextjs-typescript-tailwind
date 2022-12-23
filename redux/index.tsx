import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    setItems: (state, action) => {
      if (action.payload.data === undefined) {
        state.items = [];
      } else {
        const data = action.payload.data;
        state.items = data;
      }
    },
  },
});

export const { setItems } = itemSlice.actions;

export default itemSlice.reducer;
