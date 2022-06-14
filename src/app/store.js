import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import productsReducer from "../feature/productsSlice";
import loginReducer from "../feature/LoginSlice";

export default configureStore({
  reducer: {
    products: productsReducer,
    login: loginReducer,
  },
});
