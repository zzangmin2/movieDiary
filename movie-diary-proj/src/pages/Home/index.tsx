import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import MainOption from "../../components/HomeComponents/MainOption";
import MainList from "../../components/HomeComponents/MainList";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/rootReducer";
import { useSelector } from "react-redux";

interface AuthState {
  email: string;
  loginState: boolean;
  password: string;
  userName: string;
}

const Home = () => {
  const loggedInUserData = useSelector((state: RootState) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (
      !loggedInUserData ||
      !loggedInUserData.user ||
      !loggedInUserData.loginState
    ) {
      navigate("/login");
    }
  }, [loggedInUserData, navigate]);

  return (
    <S.Home>
      <Header
        title={"나의 영화"}
        userName={loggedInUserData.user?.userName || "로그인이 필요해"}
        isHome
      />
      <MainOption />
      <MainList />
    </S.Home>
  );
};

export default Home;
