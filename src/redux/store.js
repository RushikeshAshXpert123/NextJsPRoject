import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; // Adjust the path to your cartSlice

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
