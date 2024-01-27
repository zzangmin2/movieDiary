export interface AuthState {
  email: string;
  loginState: boolean;
  password: string;
  userName: string;
}

export interface MoviePost {
  idx: number;
  date: string;
  starRating: number;
  movie: {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
  };
  movieReview: string;
  userEmail: string;
}

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

export interface User {
  id: string;
  email: string;
  password: string;
  userName: string;
}

export interface IPost {
  date: string;
  movieId: string;
  moviePosterPath: string;
  movieReleaseDate: string;
  movieTitle: string;
  postId: number;
  review: string;
  starRating: number;
  user: string;
}
