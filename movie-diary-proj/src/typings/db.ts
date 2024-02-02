export interface IMovie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

export interface IPost {
  id: string;
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
