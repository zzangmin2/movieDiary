import axios from "axios";
import * as S from "./style";
import { useCallback, useEffect, useState } from "react";

interface Props {
  closeModal: () => void;
  setSelectedMovieInfo: React.Dispatch<React.SetStateAction<Movie>>;
}

interface Movie {
  id: number;
  poster_path: string;
  title: string;
  release_date: string;
}

const MovieSelectModal: React.FC<Props> = ({
  closeModal,
  setSelectedMovieInfo,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie>();

  const apiKey = "8a30d757cc508b84e1bb016450c77af9";

  const searchMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=true&language=ko-KR&page=1&api_key=${apiKey}`
      )
      .then((response) => {
        console.log("성공!");
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      searchMovies();
    }
  };

  const handleMovieSelect = () => {
    if (selectedMovie) {
      setSelectedMovieInfo(selectedMovie);
      closeModal();
    }
  };

  return (
    <>
      <S.DarkOverlay onClick={closeModal} />
      <S.MovieSelectModal>
        <div>
          <h1>영화선택하기</h1>
          <span onClick={closeModal}>&times;</span>
        </div>
        <input
          type="text"
          placeholder={"본 영화를 검색하세요"}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleOnKeyPress}
        />

        <S.MovieList>
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                <input
                  type="radio"
                  name="selected-movie"
                  onChange={() =>
                    setSelectedMovie({
                      id: movie.id,
                      poster_path: movie.poster_path,
                      title: movie.title,
                      release_date: movie.release_date,
                    })
                  }
                />
                <div>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <div>
                    <div>{movie.release_date}</div>
                    <div>{movie.title}</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </S.MovieList>
        <S.Button onClick={handleMovieSelect}>선택완료</S.Button>
      </S.MovieSelectModal>
    </>
  );
};

export default MovieSelectModal;
