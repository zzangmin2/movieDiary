import React, { useEffect } from "react";
import "./style.css";
import MainListItem from "../MainListItem";
import { dummy } from "../../../movieDummy";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/rootReducer";
import { loadMoviePostsFromLocalStorage } from "../../../redux/moviePostSlice";

const MainList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMoviePostsFromLocalStorage());
  }, [dispatch]);

  const moviePosts = useSelector(
    (state: RootState) => state.moviePost.moviePosts
  );

  return (
    <div className="Main-List">
      {moviePosts.map((e) => {
        return (
          <div className="main-item-wrapper" key={e.movie.id}>
            <MainListItem
              title={e.movie.title}
              posterPath={e.movie.poster_path}
              releaseDate={e.date}
              score={e.starRating}
            />
          </div>
        );
      })}
    </div>
  );
};

export default MainList;
