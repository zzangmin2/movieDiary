// src/redux/authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 유저 정보 타입 정의
interface User {
  email: string;
  password: string;
  userName: string;
}

// 슬라이스 상태 타입 정의
interface AuthState {
  user: User | null;
  loginState: boolean;
}

// 초기 상태 정의
const initialState: AuthState = {
  user: null,
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
      // localStorage에 로그인 정보 저장
      localStorage.setItem("user", JSON.stringify(action.payload));
      localStorage.setItem("loginState", "true");
    },
    logout: (state) => {
      state.user = null;
      state.loginState = false;
      // localStorage에서 로그인 정보 삭제
      localStorage.removeItem("user");
      localStorage.removeItem("loginState");
    },
  },
});

// 액션 및 리듀서 내보내기
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;