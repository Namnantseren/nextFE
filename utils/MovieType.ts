export interface MovieType {
  _id: string;
  title: string;
  year: number;
  imdb: {
    rating: number;
    votes: number;
    id: number;
  };
  plot: string;
  poster: string;
}
