import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./style";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../../../firebase";
import { IPost } from "../../../typings/db";
import { getLoginCookie } from "../../../utils/cookieUtils";

interface Props {
  setPostListSorting: Dispatch<SetStateAction<string>>;
}
const MainOption: React.FC<Props> = ({ setPostListSorting }) => {
  const navigate = useNavigate();
  const cookieUser = getLoginCookie();

  const [post, setPost] = useState<IPost[]>([]);

  useEffect(() => {
    const fetchPostData = async () => {
      if (cookieUser) {
        const PostDataQuery = query(
          collection(db, "posts"),
          where("user", "==", cookieUser?.email),
          orderBy("date", "desc")
        );

        try {
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

          setPost(posts);
          console.log(posts);
        } catch (e) {
          console.log(e);
        }
      }
    };

    fetchPostData();
  }, []);

  const handleRecordButton = () => {
    navigate(`/record`);
  };

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
            {`총 ${post.length}개의 영화 기록이 있습니다.`}
          </S.MovieCountText>
        </div>
        <S.RecordBtn onClick={handleRecordButton}>본 영화 기록하기</S.RecordBtn>
      </S.OptionWrapper>
    </S.MainOption>
  );
};

export default MainOption;
