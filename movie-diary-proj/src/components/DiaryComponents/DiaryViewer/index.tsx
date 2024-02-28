import React from "react";
import * as S from "./style";
import RecordedMovieInfo from "../RecordedMovieInfo";
import RecordedMovieDiary from "../RecordedMovieDiary";
import { useNavigate } from "react-router-dom";
import { IPost } from "../../../typings/db";

interface Props {
  data: IPost | undefined;
}

const DiaryViewer: React.FC<Props> = ({ data }) => {
  const navigate = useNavigate();
  if (!data) {
    return null;
  }
  
  return (
    <>
      <S.prevBtn
        onClick={() => {
          navigate(-1);
        }}
      >
        &lt; 이전으로
      </S.prevBtn>
      <S.DiaryWrap>
        <RecordedMovieInfo
          movie={{
            movieId: data.movieId,
            moviePosterPath: data.moviePosterPath,
            movieReleaseDate: data.movieReleaseDate,
            movieTitle: data.movieTitle,
          }}
        />
        <RecordedMovieDiary
          id={data.id}
          postId={data.postId}
          date={data.date}
          starRating={data.starRating}
          movieReview={data.review}
        />
      </S.DiaryWrap>
    </>
  );
};

export default DiaryViewer;
