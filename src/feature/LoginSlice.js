import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "Sign in",
  isLogin: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    userLogin(state, action) {
      state.userName = action.payload;
      state.isLogin = true;
    },
    userLogout(state) {
      state.userName = "Sign in";
      state.isLogin = false;
    },
  },
});

export default loginSlice.reducer;

export const { userLogin, userLogout } = loginSlice.actions;
