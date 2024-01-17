import React from "react";
import * as S from "./style";
import RecordedMovieInfo from "../RecordedMovieInfo";
import RecordedMovieDiary from "../RecordedMovieDiary";
import { useNavigate } from "react-router-dom";

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

interface Props {
  data: MoviePost | undefined;
}

const DiaryViewer: React.FC<Props> = ({ data }) => {
  const navigate = useNavigate();
  if (!data) {
    return null;
  } else {
    console.log(data);
  }
  return (
    <>
      <S.prevBtn
        onClick={() => {
          navigate(-1);
        }}
      >
        {" "}
        &lt; 이전으로
      </S.prevBtn>
      <S.DiaryWrap>
        <RecordedMovieInfo movie={data.movie} />
        <RecordedMovieDiary
          date={data.date}
          starRating={data.starRating}
          movieReview={data.movieReview}
        />
      </S.DiaryWrap>
    </>
  );
};

export default DiaryViewer;
