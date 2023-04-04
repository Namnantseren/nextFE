import Head from "next/head";
import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

interface MovieType {
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

export default function Home(): JSX.Element {
  const [movie, setMovie] = useState<MovieType[] | null>(null);

  useEffect(() => {
    axios.get(`http://localhost:6060/movies`).then((res) => setMovie(res.data));
  }, []);
  console.log("movie", movie);

  return (
    <>
      <div className=" flex w-full flex-wrap gap-3">
        <Head>
          <title>Card</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {movie?.map((movie: MovieType, p: number) => (
          <Card {...movie} key={p} />
        ))}
      </div>
    </>
  );
}
