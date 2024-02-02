import React, { useEffect, useState } from "react";
import MainListItem from "../MainListItem";
import * as S from "./style";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../../../firebase";
import { IPost } from "../../../typings/db";
import { getLoginCookie } from "../../../utils/cookieUtils";

interface Props {
  postListSorting: string;
}

const MainList: React.FC<Props> = ({ postListSorting }) => {
  const cookieUser = getLoginCookie();

  const [post, setPost] = useState<IPost[]>([]);

  useEffect(() => {
    const fetchPostData = async () => {
      if (cookieUser) {
        const PostDataQuery = query(
          collection(db, "posts"),
          where("user", "==", cookieUser?.email)
          // orderBy("postId", "desc")
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

  const getProcessedPostList = () => {
    console.log(post);
    const copypost = JSON.parse(JSON.stringify(post));
    switch (postListSorting) {
      case "recentWrited":
        return copypost.sort((a: any, b: any) => a.postId - b.postId);
      case "oldWrited":
        return copypost.sort((a: any, b: any) => b.postId - a.postId);
      case "recentWatched":
        return copypost.sort(
          (a: any, b: any) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        );
      case "oldWatched":
        return copypost.sort(
          (a: any, b: any) =>
            new Date(a.date).getTime() - new Date(b.date).getTime()
        );
      default:
        return copypost;
    }
  };

  return (
    <S.MainList>
      {/* {getProcessedPostList().map((e: any) => {
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
      })} */}

      {post ? (
        getProcessedPostList().map((e: any) => {
          return (
            <S.MainListItemWrapper key={e.postId}>
              <MainListItem
                id={e.id}
                postId={e.postId}
                movieTitle={e.movieTitle}
                moviePosterPath={e.moviePosterPath}
                movieReleaseDate={e.movieReleaseDate}
                starRating={e.starRating}
                date={e.date}
                movieId={""}
                review={""}
                user={""}
              />
            </S.MainListItemWrapper>
          );
        })
      ) : (
        <div>아직 작성한 게시물이 없습니다.</div>
      )}
    </S.MainList>
  );
};

export default MainList;
