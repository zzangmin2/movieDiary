import React, { useEffect } from "react";
import MainListItem from "../MainListItem";
import { dummy } from "../../../movieDummy";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/rootReducer";
import { loadMoviePostsFromLocalStorage } from "../../../redux/moviePostSlice";
import * as S from "./style";

interface Props {
  postListSorting: string;
}

const MainList: React.FC<Props> = ({ postListSorting }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMoviePostsFromLocalStorage());
  }, [dispatch]);

  const moviePosts = useSelector(
    (state: RootState) => state.moviePost.moviePosts
  );

  const getProcessedPostList = () => {
    const copyMoviePosts = JSON.parse(JSON.stringify(moviePosts));

    switch (postListSorting) {
      case "recentWrited":
        return copyMoviePosts.sort((a: any, b: any) => a.idx - b.idx);
      case "oldWrited":
        return copyMoviePosts.sort((a: any, b: any) => b.idx - a.idx);
      case "recentWatched":
        return copyMoviePosts.sort(
          (a: any, b: any) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        );
      case "oldWatched":
        return copyMoviePosts.sort(
          (a: any, b: any) =>
            new Date(a.date).getTime() - new Date(b.date).getTime()
        );
      default:
        return copyMoviePosts;
    }
  };

  return (
    <S.MainList>
      {getProcessedPostList().map((e: any) => {
        return (
          <S.MainListItemWrapper key={e.movie.id}>
            <MainListItem
              id={e.idx}
              title={e.movie.title}
              posterPath={e.movie.poster_path}
              releaseDate={e.date}
              score={e.starRating}
            />
          </S.MainListItemWrapper>
        );
      })}
    </S.MainList>
  );
};

export default MainList;
