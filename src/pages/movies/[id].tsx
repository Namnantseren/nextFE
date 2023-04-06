import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Movieinfo } from "../../../utils/MovieInfo";

export default function Card(): JSX.Element {
  const { query } = useRouter();
  const [movie, setMovie] = useState<Movieinfo | null>(null);

  useEffect(() => {
    if (query.id) {
      axios
        .get(`http://localhost:6060/movie/${query.id}`)
        .then((res) => setMovie(res.data));
    }
  }, [query.id]);
  console.log(movie);

  return (
    <div>
      <div className="flex  justify-center gap-4 mt-5 ">
        <picture>
          <img src={movie?.poster} alt="pic" className="w-80" />
        </picture>
        <div>
          <div className="w-96 font-thin text-xl">
            <p>{movie?.title}</p>
          </div>
          <div className="mt-5">
            <div className="w-96">
              <p>{movie?.fullplot}</p>
            </div>
            <div className="mt-5">
              <p>Cast: {movie?.cast}</p>
              <p>runtime: {movie?.runtime}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
