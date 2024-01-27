import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { IPost } from "../../../typings/db";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

const MainListItem: React.FC<IPost> = ({
  postId,
  movieTitle,
  moviePosterPath,
  movieReleaseDate,
  starRating,
}) => {
  const navigate = useNavigate();
  const goDetailPage = () => {
    navigate(`/Diary/${postId}`);
  };
  const renderStars = (score: number) => {
    const roundedScore = Math.round(score);
    const stars = Array.from({ length: roundedScore }, (_, index) => (
      <span>⭐️ </span>
    ));
    return stars;
  };

  return (
    <>
      <S.ItemWrapper onClick={goDetailPage}>
        <S.ItemMovieImg>
          <img src={IMG_BASE_URL + moviePosterPath} alt="영화포스터" />
        </S.ItemMovieImg>
        <S.ItemMovieInfo>
          <div>{movieReleaseDate}</div>
          <div>{movieTitle}</div>
          <div>{renderStars(starRating)}</div>
        </S.ItemMovieInfo>
      </S.ItemWrapper>
    </>
  );
};

export default MainListItem;
