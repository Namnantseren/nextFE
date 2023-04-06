export interface Movieinfo {
  _id: string;
  title: string;
  cast: string;
  runtime: string;
  year: number;
  imdb: {
    rating: number;
    votes: number;
    id: number;
  };
  fullplot: string;
  poster: string;
}
