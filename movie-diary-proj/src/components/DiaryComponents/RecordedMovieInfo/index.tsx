import * as S from "./style";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

interface Props {
  movie: {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
  };
}
const RecordedMovieInfo: React.FC<Props> = ({ movie }) => {
  return (
    <S.RecordedMovieInfo>
      <img
        src={IMG_BASE_URL + movie.poster_path}
        alt="영화포스터"
        style={{ width: "170px", borderRadius: "10px" }}
      />
      <div>{movie.title}</div>
      <div style={{ fontSize: "0.75rem" }}>{movie.release_date}</div>
    </S.RecordedMovieInfo>
  );
};

export default RecordedMovieInfo;
