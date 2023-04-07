import Link from "next/link";
import { useEffect, useState } from "react";
import { MovieType } from "../../utils/MovieType";
import NoImg from "./NoImg";

export default function Cards(prop: MovieType): JSX.Element {
  const [imgChecker, setImgCheckeer] = useState<boolean>(true);

  useEffect(() => {
    if (!prop.poster) {
      setImgCheckeer(false);
    } else {
      const http = new XMLHttpRequest();
      http.open("HEAD", prop.poster, false);
      http.status != 404 ? setImgCheckeer(true) : setImgCheckeer(false);
    }
  }, [prop.poster]);

  return (
    <div className="flex justify-center align-center">
      <Link href={`/movies/${prop._id}`}>
        <div className="flex flex-wrap w-80">
          <div className="rounded-l-lg bg-white flex-1">
            {prop.poster ? (
              imgChecker ? (
                <picture className="h-[192] h-full w-96">
                  <img
                    src={prop.poster}
                    alt="pic"
                    className="rounded-l-lg"
                    onLoad={() => setImgCheckeer(true)}
                    onError={() => setImgCheckeer(false)}
                  />
                </picture>
              ) : (
                <NoImg />
              )
            ) : (
              <NoImg />
            )}
          </div>
          <div className="w-96 bg-gray-500 rounded-r-lg flex-1 h-64">
            {prop.title.length > 20 ? (
              <h4 className="pl-3 pt-3 text-red-500">
                {prop.title.slice(0, 20)}...
              </h4>
            ) : (
              <h4 className="pl-3 pt-3 text-red-500">{prop.title}</h4>
            )}
            <p className="pl-3 pr-3 pt-1 pb-3">{prop.plot.slice(0, 100)}...</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
