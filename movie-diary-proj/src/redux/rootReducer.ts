// src/redux/rootReducer.ts
import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import moviePostRecucer from "./moviePostSlice";
// 추가적인 슬라이스들을 가져오세요

const rootReducer = combineReducers({
  auth: authReducer,
  moviePost: moviePostRecucer,
  // 추가적인 리듀서들을 추가하세요
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
