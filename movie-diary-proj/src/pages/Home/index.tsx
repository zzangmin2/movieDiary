import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import MainOption from "../../components/HomeComponents/MainOption";
import MainList from "../../components/HomeComponents/MainList";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { getLoginCookie } from "../../utils/cookieUtils";

const Home = () => {
  const user = auth.currentUser;
  const navigate = useNavigate();
  const [postListSorting, setPostListSorting] =
    useState<string>("recentWrited");
  const [moviePosts, setMoviePosts] = useState<any[]>([]);

  useEffect(() => {
    const cookieUser = getLoginCookie();
    if (!cookieUser) {
      navigate("/login");
      alert("로그인 해 주세용 ");
    }
  }, [user, navigate]);

  return (
    <S.Home>
      <Header title={"나의 영화"} isHome />
      <MainOption
        setPostListSorting={setPostListSorting}
        moviePosts={moviePosts}
      />
      <MainList postListSorting={postListSorting} moviePosts={moviePosts} />
    </S.Home>
  );
};

export default Home;
