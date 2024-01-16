import * as S from "./style";

interface Props {
  date: string;
  starRating: number;
  movieReview: string;
}
const RecordedMovieDiary: React.FC<Props> = ({
  date,
  starRating,
  movieReview,
}) => {
  const renderStars = (score: number) => {
    const roundedScore = Math.round(score);
    const stars = Array.from({ length: roundedScore }, (_, index) => (
      <span>⭐️ </span>
    ));
    return stars;
  };
  return (
    <S.RecordedMovieDiary>
      <S.RecordMovieMyInfo>
        <div>
          <S.reviewDataWrapper>
            <div>시청 날짜</div>
            <div>{date}</div>
          </S.reviewDataWrapper>
          <S.reviewDataWrapper>
            <div>나의 평점</div>
            <div>{renderStars(starRating)}</div>
          </S.reviewDataWrapper>
        </div>
        <button>수정하기</button>
      </S.RecordMovieMyInfo>
      <S.RecordedMovieReview>
        <div>나의 영화 후기</div>
        <div>{movieReview}</div>
      </S.RecordedMovieReview>
    </S.RecordedMovieDiary>
  );
};

export default RecordedMovieDiary;
