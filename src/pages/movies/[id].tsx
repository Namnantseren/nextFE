// import axios from "axios";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
import { Movieinfo } from "../../../utils/MovieInfo";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";

export default function Card({
  data: movie,
}: {
  data: Movieinfo;
}): JSX.Element {
  // const { query } = useRouter();
  // const [movie, setMovie] = useState<Movieinfo | null>(null);

  // useEffect(() => {
  //   if (query.id) {
  //     axios
  //       .get(`http://localhost:6060/movie/${query.id}`)
  //       .then((res) => setMovie(res.data));
  //   }
  // }, [query.id]);
  // console.log(movie);

  return (
    <div>
      <div className="flex  justify-center gap-4 mt-5 ">
        <picture>
          <img src={movie.poster} alt="pic" className="w-80" />
        </picture>
        <div>
          <div className="w-96 font-thin text-xl">
            <p>{movie.title}</p>
          </div>
          <div className="mt-5">
            <div className="w-96">
              <p>{movie.fullplot}</p>
            </div>
            <div className="mt-5">
              <p>Cast: {movie.cast}</p>
              <p>runtime: {movie.runtime}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`http://localhost:6060/movie`);
  const resJson = await res.json();
  const paths = await resJson.map((id: { _id: string }) => ({
    params: { id: id._id },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

interface MovieProps {
  data: Movieinfo | null;
}

export const getStaticProps: GetStaticProps<MovieProps> = async ({
  params,
}: GetStaticPropsContext) => {
  const res = await fetch(`http://localhost:6060/movie/${params?.id}`);
  const movie = await res.json();
  return {
    props: {
      data: movie,
    },
  };
};
