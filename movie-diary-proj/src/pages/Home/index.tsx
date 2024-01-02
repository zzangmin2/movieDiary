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
    // let foundUserData: AuthState | undefined;
    // for (let i = 0; i < localStorage.length; i++) {
    //   const userData = localStorage.getItem(`userData${i}`);
    //   if (userData) {
    //     const parsedUserData = JSON.parse(userData) as AuthState; //타입 단언
    //     if (parsedUserData.loginState === true) {
    //       foundUserData = parsedUserData;
    //       break;
    //     }
    //   }
    // }
    // if (foundUserData) {
    //   setLoggedInUserData(foundUserData);
    // } else {
    //   navigate("/login");
    // }

    if (!loggedInUserData || !loggedInUserData?.loginState) {
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
