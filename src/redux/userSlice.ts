import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../typings/db";

type initialStateType = {
  isLoggedIn: boolean;
  user: IUser | null;
};

const initialState: initialStateType = {
  isLoggedIn: false,
  user: {
    email: "",
    password: "",
    userName: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export default userSlice.reducer;
export const { login, logout } = userSlice.actions;
