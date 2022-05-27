import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import productsReducer from "../feature/productsSlice";

export default configureStore({
  reducer: {
    products: productsReducer,
  },
});
