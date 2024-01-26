import React, { useEffect, useState } from "react";
import * as S from "./style";
import MovieSelectModal from "../MovieSelectModal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/rootReducer";
import {
  addMoviePost,
  loadMoviePostsFromLocalStorage,
} from "../../../redux/moviePostSlice";
import { useNavigate } from "react-router-dom";
import { Movie, MoviePost } from "../../../typings/db";
import { ref } from "firebase/storage";
import { auth, db, storage } from "../../../firebase";
import { addDoc, collection } from "firebase/firestore";

interface Props {
  userEmail: string;
}

const RecordEditor: React.FC<Props> = ({ userEmail }) => {
  //모달
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovieInfo, setSelectedMovieInfo] = useState<Movie>({
    id: 0,
    title: "",
    poster_path: "",
    release_date: "",
  });

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(loadMoviePostsFromLocalStorage());
  // }, [dispatch]);

  const moviePosts = useSelector(
    (state: RootState) => state.moviePost.moviePosts
  );

  const moviePostIndex = moviePosts ? moviePosts.length + 1 : 1;
  // const user = useSelector((state: RootState) => state.auth.user);

  const [newPost, setNewPost] = useState<MoviePost>({
    idx: 0,
    date: "",
    starRating: 5,
    movie: {
      id: selectedMovieInfo.id,
      title: selectedMovieInfo.title,
      poster_path: selectedMovieInfo.poster_path,
      release_date: selectedMovieInfo.release_date,
    },
    movieReview: "",
    userEmail: userEmail,
  });

  const [post, setPost] = useState({
    date: "",
    movieId: "",
    moviePosterPath: "",
    movieReleaseDate: "",
    movieTitle: "",
    postId: 0,
    review: "",
    starRating: 1,
    user: "",
  });
  const navigate = useNavigate();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setNewPost({
      ...newPost,
      idx: moviePostIndex,
      movie: selectedMovieInfo,
    });
  }, [selectedMovieInfo]);

  //에디터
  const handleAddPost = async () => {
    // if (!newPost.date) {
    //   alert("날짜를 입력해 주세요");
    //   return;
    // }

    // if (!newPost.starRating) {
    //   alert("평점을 입력해 주세요");
    //   return;
    // }
    // if (!newPost.movieReview || newPost.movieReview.length < 5) {
    //   alert("느낀점을 5자 이상으로 입력해 주세요");
    //   return;
    // }

    setPost({
      date: "2024-01-23",
      movieId: "109526",
      moviePosterPath: "/9djKSjGogao0ROefsa2YTeNy2w3.jpg",
      movieReleaseDate: "1994-04-23",
      movieTitle: "짱구는 못말려 극장판: 부리부리 왕국의 보물",
      postId: 10,
      review: "짱구야\n재밌다",
      starRating: 1,
      user: "1234",
    });

    const user = auth.currentUser;
    if (!user) return;

    try {
      await addDoc(collection(db, "posts"), post);
      console.log("성공!", post);
    } catch (e) {
      console.log(e);
    } finally {
    }

    // if (user) {
    //   dispatch(addMoviePost(newPost));
    //   console.log(user);
    //   alert("저장 성공 !");
    //   navigate("/");
    // }
  };

  return (
    <>
      <S.RecordEditor>
        <S.RecordEditorTopSection>
          <S.InputWrapper>
            <div>시청 날짜 </div>
            <input
              type="date"
              onChange={(e) => setNewPost({ ...newPost, date: e.target.value })}
            ></input>
          </S.InputWrapper>
          <S.InputWrapper>
            <div>나의 평점: </div>
            <S.ScoreSelect>
              <select
                onChange={(e) =>
                  setNewPost({ ...newPost, starRating: +e.target.value })
                }
              >
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
              </select>
              <div> /5</div>
            </S.ScoreSelect>
          </S.InputWrapper>
          <S.InputWrapper>
            <div>본 영화</div>
            {selectedMovieInfo.id > 0 ? (
              <div>
                <div>{selectedMovieInfo.title}</div>
                <button onClick={openModal}>영화 다시 선택하기</button>
              </div>
            ) : (
              <button onClick={openModal}>영화 선택하기</button>
            )}
          </S.InputWrapper>
        </S.RecordEditorTopSection>
        <textarea
          placeholder="본 영화에 대해서 느낀 점을 기록해 보세요."
          value={newPost.movieReview}
          onChange={(e) =>
            setNewPost({ ...newPost, movieReview: e.target.value })
          }
        />

        <button onClick={handleAddPost}>등록하기</button>

        {isModalOpen && (
          <MovieSelectModal
            closeModal={closeModal}
            setSelectedMovieInfo={setSelectedMovieInfo}
          />
        )}
      </S.RecordEditor>
    </>
  );
};

export default RecordEditor;
