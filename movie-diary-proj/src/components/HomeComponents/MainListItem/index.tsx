import React from "react";
import * as S from "./style";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

interface Props {
  title: string;
  posterPath: string;
  releaseDate: string;
  score: number;
}

const MainListItem: React.FC<Props> = ({
  title,
  posterPath,
  releaseDate,
  score,
}) => {
  const renderStars = (score: number) => {
    const roundedScore = Math.round(score);
    const stars = Array.from({ length: roundedScore }, (_, index) => (
      <div key={index}>⭐️</div>
    ));
    return stars;
  };

  return (
    <>
      <S.ItemWrapper>
        <S.ItemMovieImg>
          <img src={IMG_BASE_URL + posterPath} alt="영화포스터" />
        </S.ItemMovieImg>
        <S.ItemMovieInfo>
          <div>{releaseDate}</div>
          <div>{title}</div>
          <div>{renderStars(score)}</div>
        </S.ItemMovieInfo>
      </S.ItemWrapper>
    </>
  );
};

export default MainListItem;
