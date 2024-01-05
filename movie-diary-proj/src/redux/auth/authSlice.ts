// src/redux/authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getLoginCookie,
  removeLoginCookie,
  setLoginCookie,
} from "../../utils/cookieUtils";

//영화 기록 게시물 정보 타입 정의
interface MoviePost {
  date: string;
  starRating: number;
  movieTitle: string;
  movieReview: string;
}
// 유저 정보 타입 정의
interface User {
  email: string;
  password: string;
  userName: string;
  moviePosts: MoviePost[];
}

// 슬라이스 상태 타입 정의
interface AuthState {
  user: User | null;
  loginState: boolean;
}

// 초기 상태 정의ss
const initialState: AuthState = {
  user: getLoginCookie() || {
    email: "",
    password: "",
    userName: "",
    moviePosts: [],
  },
  loginState: false,
};

// Slice 생성
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.loginState = true;
      setLoginCookie(action.payload);
    },
    logout: (state) => {
      state.user = null;
      state.loginState = false;
      removeLoginCookie();
    },
    checkLoginState: (state) => {
      const userFromCookie = getLoginCookie();
      if (userFromCookie) {
        state.user = userFromCookie;
        state.loginState = true;
      }
    },
  },
});

// 액션 및 리듀서 내보내기
export const { login, logout, checkLoginState } = authSlice.actions;
export default authSlice.reducer;
