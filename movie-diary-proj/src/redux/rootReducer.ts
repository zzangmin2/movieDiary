// src/redux/rootReducer.ts
import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
// 추가적인 슬라이스들을 가져오세요

const rootReducer = combineReducers({
  auth: authReducer,
  // 추가적인 리듀서들을 추가하세요
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
