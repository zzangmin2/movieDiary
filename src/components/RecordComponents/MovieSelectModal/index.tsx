import axios from "axios";
import * as S from "./style";
import { useCallback, useEffect, useState } from "react";
import { IMovie } from "../../../typings/db";

interface Props {
  closeModal: () => void;
  setSelectedMovieInfo: React.Dispatch<React.SetStateAction<IMovie>>;
}

const MovieSelectModal: React.FC<Props> = ({
  closeModal,
  setSelectedMovieInfo,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<IMovie>();
  const [clickSearchBtn, setClickSearchBtn] = useState(false);

  const apiKey = "8a30d757cc508b84e1bb016450c77af9";

  const searchMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=true&language=ko-KR&page=1&api_key=${apiKey}`
      )
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      searchMovies();
      setClickSearchBtn(true);
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
          <h2>영화선택하기</h2>
          <span onClick={closeModal}>&times;</span>
        </div>
        <input
          type="text"
          placeholder={"본 영화를 검색하세요"}
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setClickSearchBtn(false);
          }}
          onKeyPress={handleOnKeyPress}
        />
        <S.MovieList>
          <ul>
            {clickSearchBtn ? (
              movies.length >= 1 ? (
                movies.map((movie) => (
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
                ))
              ) : (
                <div>{`검색 결과에  "${searchTerm}"  에 대한 항목이 없습니다. 다시 검색해주세요.`}</div>
              )
            ) : (
              <></>
            )}
          </ul>
        </S.MovieList>
        <S.Button onClick={handleMovieSelect}>선택완료</S.Button>
      </S.MovieSelectModal>
    </>
  );
};

export default MovieSelectModal;
