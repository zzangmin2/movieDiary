import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import * as S from "./style";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import DiaryViewer from "../../components/DiaryComponents/DiaryViewer";
import { useNavigate, useParams } from "react-router-dom";
import { loadMoviePostsFromLocalStorage } from "../../redux";

interface MoviePost {
  idx: number;
  date: string;
  starRating: number;
  movie: {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
  };
  movieReview: string;
  userEmail: string;
}

const Diary = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMoviePostsFromLocalStorage());
  }, [dispatch]);

  const loggedInUserData = useSelector((state: RootState) => state.auth);
  const moviePosts = useSelector(
    (state: RootState) => state.moviePost.moviePosts
  );

  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState<MoviePost>();

  useEffect(() => {
    if (moviePosts.length >= 1 && id) {
      const targetPost = moviePosts.find((it) => it.idx === parseInt(id));

      if (targetPost) {
        setData(targetPost);
        console.log("타겟게시물" + JSON.stringify(targetPost));
      } else {
        alert("없는 게시물입니다.");
        navigate("/", { replace: true });
      }
    }
  }, [id, moviePosts, navigate]);

  return (
    <S.Diary>
      <Header
        title={"기록 상세페이지"}
        userName={loggedInUserData.user?.userName || "로그인이 필요해"}
      ></Header>
      <DiaryViewer data={data} />
    </S.Diary>
  );
};

export default Diary;
