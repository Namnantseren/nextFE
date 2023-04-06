import Head from "next/head";
// import { useEffect, useState } from "react";
// import axios from "axios";
import Header from "../components/Header";
import Cards from "../components/Cards";
import { MovieType } from "../../utils/MovieType";

export default function Home(props: { movies: MovieType[] }): JSX.Element {
  const { movies } = props;
  // const [movie, setMovie] = useState<MovieType[] | null>(null);

  // useEffect(() => {
  //   axios.get(`http://localhost:6060/movies`).then((res) => setMovie(res.data));
  // }, []);
  // console.log("movie", movie);

  return (
    <>
      <div className="flex w-full flex-wrap gap-3">
        <Head>
          <title>Card</title>
          <link rel="icon" href="/favicon.ico" />
          <Header />
        </Head>
        <div className="flex flex-wrap gap-3 mt-5 ml-5">
          {movies.map((movie: MovieType, p: number) => (
            <Cards {...movie} key={p} />
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:6060/movies");
  const movie = await res.json();
  return {
    props: {
      movies: movie,
    },
  };
}
