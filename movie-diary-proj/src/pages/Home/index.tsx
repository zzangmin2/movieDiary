import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import MainOption from "../../components/HomeComponents/MainOption";
import MainList from "../../components/HomeComponents/MainList";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import useAuth from "../../redux/useAuth";

const Home = () => {
  const isLoggedIn = useAuth();
  const navigate = useNavigate();
  const [postListSorting, setPostListSorting] =
    useState<string>("recentWrited");

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
      alert("로그인 해 주세용 ");
    }
  }, [navigate]);

  return (
    <S.Home>
      <Header title={"나의 영화"} ishome={true} />
      <MainOption setPostListSorting={setPostListSorting} />
      <MainList postListSorting={postListSorting} />
    </S.Home>
  );
};

export default Home;
