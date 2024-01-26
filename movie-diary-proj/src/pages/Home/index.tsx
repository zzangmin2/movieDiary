import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import MainOption from "../../components/HomeComponents/MainOption";
import MainList from "../../components/HomeComponents/MainList";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/rootReducer";
import { checkLoginState } from "../../redux/authSlice";
import { useSelector } from "react-redux";
import axios from "axios";
import { log } from "console";
import { auth } from "../../firebase";

const Home = () => {
  const user = auth.currentUser;
  // const loggedInUserData = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const [postListSorting, setPostListSorting] =
    useState<string>("recentWrited");
  const [moviePosts, setMoviePosts] = useState<any[]>([]);

  useEffect(() => {
    // console.log(checkLoginState());
    // if (checkLoginState()) {
    //   navigate("/login");
    // } else {
    //   console.log(loggedInUserData);
    // }
    // if (!loggedInUserData.user) {
    //   navigate("/login");
    // } else {
    //   console.log(loggedInUserData.user);
    // }

    if (!user) {
      navigate("/login");
      alert("로그인 해 주세용 ");
    }
  }, []);

  useEffect(() => {
    const fetchMoviePosts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/moviePost");
        setMoviePosts(response.data);
        console.log(response.data);
      } catch (err) {
        console.error("불러오기 실패", err);
      }
    };

    fetchMoviePosts();
  }, []);

  return (
    <S.Home>
      <Header
        title={"나의 영화"}
        // userName={loggedInUserData.user?.userName || "로그인이 필요해"}
        userName={user?.displayName || "로그인이 필요해"}
        isHome
      />
      <MainOption
        setPostListSorting={setPostListSorting}
        moviePosts={moviePosts}
      />
      <MainList postListSorting={postListSorting} moviePosts={moviePosts} />
    </S.Home>
  );
};

export default Home;
