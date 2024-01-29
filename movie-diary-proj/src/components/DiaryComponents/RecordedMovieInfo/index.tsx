import * as S from "./style";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

interface Props {
  movie: {
    movieId: string;
    moviePosterPath: string;
    movieReleaseDate: string;
    movieTitle: string;
  };
}
const RecordedMovieInfo: React.FC<Props> = ({ movie }) => {
  return (
    <S.RecordedMovieInfo>
      <img
        src={IMG_BASE_URL + movie.moviePosterPath}
        alt="영화포스터"
        style={{ width: "170px", borderRadius: "10px" }}
      />
      <div>{movie.movieTitle}</div>
      <div style={{ fontSize: "0.75rem" }}>{movie.movieReleaseDate}</div>
    </S.RecordedMovieInfo>
  );
};

export default RecordedMovieInfo;
