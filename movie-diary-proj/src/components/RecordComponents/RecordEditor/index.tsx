import React, { useEffect, useState } from "react";
import * as S from "./style";
import MovieSelectModal from "../MovieSelectModal";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IMovie } from "../../../typings/db";
import { auth, db } from "../../../firebase";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

import useAuth from "../../../redux/useAuth";

interface Props {
  pageType: string;
}
const RecordEditor: React.FC<Props> = ({ pageType }) => {
  const isLoggedIn = useAuth();
  const user = auth.currentUser;
  const { id } = useParams();

  //모달
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovieInfo, setSelectedMovieInfo] = useState<IMovie>({
    id: 0,
    title: "",
    poster_path: "",
    release_date: "",
  });

  const [post, setPost] = useState({
    id: "",
    date: "",
    movieId: 0,
    moviePosterPath: "",
    movieReleaseDate: "",
    movieTitle: "",
    postId: 0,
    review: "",
    starRating: 5,
    user: isLoggedIn.user?.email,
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
            const posts = snapshot.docs.map((doc) => {
              const data = doc.data();
              return {
                id: doc.id,
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

            if (pageType === "record") {
              setPost({
                ...post,
                postId: posts.length + 1,
              });
            } else if (pageType === "edit") {
              const matchingPost = posts.find(
                (e) => e.postId === (id ? parseInt(id) : undefined)
              );

              if (matchingPost) {
                setPost(matchingPost);
                setSelectedMovieInfo({
                  id: matchingPost.movieId,
                  poster_path: matchingPost.moviePosterPath,
                  release_date: matchingPost.movieReleaseDate,
                  title: matchingPost.movieTitle,
                });
              } else {
                console.log("일치하는 데이터를 못 찾음");
              }
            }
          }
        } catch (e) {
          console.log(e);
        }
      }
    };

    fetchPostData();
  }, []);

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

    if (pageType === "record") {
      if (!post.date.trim()) {
        alert("시청 날짜를 입력해주세요");
        return;
      }
      if (!post.movieTitle.trim()) {
        alert("본 영화를 선택해주세요");
        return;
      }
      if (!post.review.trim()) {
        alert("느낀 점을 입력해주세요");
        return;
      }

      try {
        await addDoc(collection(db, "posts"), post);
        navigate("/");
      } catch (e) {
        console.log(e);
      }
    } else if (pageType === "edit") {
      try {
        await updateDoc(doc(db, "posts", post.id), {
          date: post.date,
          movieId: post.movieId,
          moviePosterPath: post.moviePosterPath,
          movieReleaseDate: post.movieReleaseDate,
          movieTitle: post.movieTitle,
          postId: post.postId,
          review: post.review,
          starRating: post.starRating,
          user: post.user,
        });
        console.log("성공!", post);
        navigate("/");
      } catch (e) {
        console.log(e);
      }
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
              value={post.date}
            ></input>
          </S.InputWrapper>
          <S.InputWrapper>
            <div>나의 평점: </div>
            <S.ScoreSelect>
              <select
                onChange={(e) =>
                  setPost({ ...post, starRating: +e.target.value })
                }
                value={post.starRating}
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
          value={post.review}
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
