import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getLoginCookie,
  removeLoginCookie,
  setLoginCookie,
} from "../utils/cookieUtils";
import { User } from "../typings/db";

interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  // user: getLoginCookie() || {
  //   id: "",
  //   email: "",
  //   password: "",
  //   userName: "",
  // },
  user: {
    id: "",
    email: "",
    password: "",
    userName: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      console.log(action.payload);
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
      console.log(state.user);
      removeLoginCookie();
    },
    checkLoginState: (state) => {
      const userFromCookie = getLoginCookie();
      console.log(userFromCookie);
      if (userFromCookie) {
        state.user = userFromCookie;
      } else {
        state.user = null;
      }
    },
  },
});

export const { login, logout, checkLoginState } = authSlice.actions;
export default authSlice.reducer;
