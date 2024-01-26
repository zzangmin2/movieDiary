import React, { Dispatch, SetStateAction, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./style";
import { useDispatch, useSelector } from "react-redux";
import { loadMoviePostsFromLocalStorage } from "../../../redux";
import { RootState } from "../../../redux/rootReducer";

interface Props {
  setPostListSorting: Dispatch<SetStateAction<string>>;
  moviePosts: any[];
}
const MainOption: React.FC<Props> = ({ setPostListSorting, moviePosts }) => {
  const navigate = useNavigate();

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(loadMoviePostsFromLocalStorage());
  // }, [dispatch]);

  const handleRecordButton = () => {
    navigate(`/record`);
  };

  // const moviePosts = useSelector(
  //   (state: RootState) => state.moviePost.moviePosts
  // );

  return (
    <S.MainOption>
      <S.Banner />
      <S.OptionWrapper>
        <div>
          <S.Filter onChange={(e) => setPostListSorting(e.target.value)}>
            <option value="recentWrited"> 최근 작성 순</option>
            <option value="oldWrited"> 오래된 작성 순</option>
            <option value="recentWatched"> 최근 시청 순</option>
            <option value="oldWatched"> 오래된 시청 순</option>
          </S.Filter>
          <S.MovieCountText>
            {`총 ${moviePosts.length}개의 영화 기록이 있습니다.`}
          </S.MovieCountText>
        </div>
        <S.RecordBtn onClick={handleRecordButton}>본 영화 기록하기</S.RecordBtn>
      </S.OptionWrapper>
    </S.MainOption>
  );
};

export default MainOption;
