import React, { useEffect, useState } from "react";
import MainListItem from "../MainListItem";
import * as S from "./style";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../../../firebase";
import { IPost } from "../../../typings/db";
import { getLoginCookie } from "../../../utils/cookieUtils";

interface Props {
  postListSorting: string;
  moviePosts: any[];
}

const MainList: React.FC<Props> = ({ postListSorting, moviePosts }) => {
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
    console.log(moviePosts);
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
        post.map((e: any) => {
          return (
            <S.MainListItemWrapper key={e.postId}>
              <MainListItem
                postId={e.postId}
                movieTitle={e.movieTitle}
                moviePosterPath={e.moviePosterPath}
                movieReleaseDate={e.movieReleaseDate}
                starRating={e.starRating}
                date={""}
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
