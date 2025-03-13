// redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addHostel: (state, action) => {
      state.items.push(action.payload);
    },
    removeHostel: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { addHostel, removeHostel } = cartSlice.actions;
export default cartSlice.reducer;
