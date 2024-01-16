import React from "react";
import * as S from "./style";
import RecordedMovieInfo from "../RecordedMovieInfo";
import RecordedMovieDiary from "../RecordedMovieDiary";

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
  if (!data) {
    return null;
  } else {
    console.log(data);
  }
  return (
    <>
      <S.prevBtn> &lt; 이전으로</S.prevBtn>
      <S.DiaryWrap>
        <RecordedMovieInfo />
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
