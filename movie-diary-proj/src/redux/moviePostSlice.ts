// features/moviePostsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getLoginCookie } from "../utils/cookieUtils";
import { useRouteError } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { MoviePost } from "../typings/db";

interface MoviePostsState {
  moviePosts: MoviePost[];
}

const initialState: MoviePostsState = {
  moviePosts: [],
};

const moviePostsSlice = createSlice({
  name: "moviePosts",
  initialState,
  reducers: {
    addMoviePost: (state, action: PayloadAction<MoviePost>) => {
      const serializedPosts = localStorage.getItem("moviePosts");

      let updatedPosts: MoviePost[];

      if (serializedPosts) {
        const parsedPosts: MoviePost[] = JSON.parse(serializedPosts);
        updatedPosts = [...parsedPosts, action.payload];
      } else {
        updatedPosts = [action.payload];
      }

      state.moviePosts = updatedPosts;
      localStorage.setItem("moviePosts", JSON.stringify(updatedPosts));
    },
    editMoviePost: (
      state,
      action: PayloadAction<{ index: number; updatedPost: MoviePost }>
    ) => {
      state.moviePosts[action.payload.index] = action.payload.updatedPost;
    },
    deleteMoviePost: (state, action: PayloadAction<number>) => {
      state.moviePosts.splice(action.payload, 1);
    },

    loadMoviePostsFromLocalStorage: (state) => {
      const serializedPosts = localStorage.getItem("moviePosts");
      if (serializedPosts) {
        const parsedPosts = JSON.parse(serializedPosts);
        const userFromCookie = getLoginCookie();
        const userPosts = [];
        console.log(parsedPosts, userFromCookie);
        for (let i = 0; i < parsedPosts.length; i++) {
          if (parsedPosts[i].userEmail === userFromCookie.email) {
            // userPosts.push(parsedPosst[i]);
          }
        }
      }
    },

    // loadMoviePostsFromLocalStorage: (state) => {
    //   axios
    //     .get("http://localhost:4000/moviePost")
    //     .then((response) => {
    //       console.log(response.data);
    //       state.moviePosts = response.data;
    //     })
    //     .catch((err) => {
    //       console.error(err);
    //     });
    // },

    // loadMoviePostsFromLocalStorage: (state) => {
    //   const fetchMoviePosts = async () => {
    //     try {
    //       const response = await axios.get("http://localhost:4000/moviePost");
    //       console.log(response.data);
    //       state.moviePosts = response.data;
    //     } catch (err) {
    //       console.error("불러오기 실패", err);
    //     }
    //   };

    //   fetchMoviePosts();
    // },
  },
});

export const {
  addMoviePost,
  editMoviePost,
  deleteMoviePost,
  loadMoviePostsFromLocalStorage,
} = moviePostsSlice.actions;
export default moviePostsSlice.reducer;
