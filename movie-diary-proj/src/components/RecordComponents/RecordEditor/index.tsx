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
import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { getLoginCookie } from "../../../utils/cookieUtils";

interface Props {
  userEmail: string;
}

const RecordEditor: React.FC<Props> = ({ userEmail }) => {
  const user = auth.currentUser;

  //모달
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovieInfo, setSelectedMovieInfo] = useState<Movie>({
    id: 0,
    title: "",
    poster_path: "",
    release_date: "",
  });

  const cookieUser = getLoginCookie();
  const [post, setPost] = useState({
    date: "",
    movieId: 0,
    moviePosterPath: "",
    movieReleaseDate: "",
    movieTitle: "",
    postId: 0,
    review: "",
    starRating: 1,
    user: cookieUser.email,
  });
  const navigate = useNavigate();
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    const fetchPostData = async () => {
      if (user?.email) {
        const PostDataQuery = query(
          collection(db, "posts"),
          where("user", "==", user?.email),
          orderBy("date", "desc")
        );

        try {
          if (PostDataQuery) {
            const snapshot = await getDocs(PostDataQuery);
            console.log(snapshot);
            const posts = snapshot.docs.map(function (doc) {
              const data = doc.data();
              return {
                date: data.date,
                movieId: data.movieId,
                moviePosterPath: data.moviePosterPath,
                movieReleaseDate: data.movieReleaseDate,
                movieTitle: data.movieTitle,
                postId: data.postId,
                review: data.review,
                starRating: data.starRating,
                user: data.user,
              };
            });

            setPost({
              ...post,
              postId: posts.length + 1,
            });
          }
        } catch (e) {
          console.log(e);
        }
      }
    };

    fetchPostData();
  }, [post, user]);

  useEffect(() => {
    setPost({
      ...post,
      movieId: selectedMovieInfo.id,
      moviePosterPath: selectedMovieInfo.poster_path,
      movieReleaseDate: selectedMovieInfo.release_date,
      movieTitle: selectedMovieInfo.title,
    });
  }, [selectedMovieInfo]);

  //에디터
  const handleAddPost = async () => {
    if (!user) return;

    try {
      await addDoc(collection(db, "posts"), post);
      console.log("성공!", post);
      navigate("/");
    } catch (e) {
      console.log(e);
    } finally {
    }
  };

  return (
    <>
      <S.RecordEditor>
        <S.RecordEditorTopSection>
          <S.InputWrapper>
            <div>시청 날짜 </div>
            <input
              type="date"
              onChange={(e) => setPost({ ...post, date: e.target.value })}
            ></input>
          </S.InputWrapper>
          <S.InputWrapper>
            <div>나의 평점: </div>
            <S.ScoreSelect>
              <select
                onChange={(e) =>
                  setPost({ ...post, starRating: +e.target.value })
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
          onChange={(e) => setPost({ ...post, review: e.target.value })}
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
