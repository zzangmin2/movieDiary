import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import * as S from "./style";

import { useNavigate, useParams } from "react-router-dom";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { IPost } from "../../typings/db";
import { getLoginCookie } from "../../utils/cookieUtils";
import { db } from "../../firebase";
import { match } from "assert";
import RecordEditor from "../../components/RecordComponents/RecordEditor";

const Edit = () => {
  const { id } = useParams();
  const cookieUser = getLoginCookie();
  const [data, setData] = useState<IPost>();

  useEffect(() => {
    const fetchPostData = async () => {
      if (cookieUser) {
        const PostDataQuery = query(
          collection(db, "posts"),
          where("user", "==", cookieUser.email),
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

          const matchingPost = posts.find(
            (e) => e.postId === (id ? parseInt(id) : undefined)
          );

          matchingPost
            ? setData(matchingPost)
            : console.log("일치하는 데이터를 못 찾음");
          console.log(data);
        } catch (e) {
          console.log(e);
        }
      } else {
        console.log("오류발생");
      }
    };

    fetchPostData();
  }, []);
  return (
    <S.Edit>
      <Header title="게시물 수정" />
      <RecordEditor />
    </S.Edit>
  );
};

export default Edit;
