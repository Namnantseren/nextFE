import Link from "next/link";
import { MovieType } from "../../utils/MovieType";

export default function Cards(prop: MovieType): JSX.Element {
  return (
    <div className="flex justify-center align-center">
      <Link href={`/movies/${prop._id}`}>
        <div className="flex flex-wrap w-96 ">
          <div className="rounded-l-lg bg-white flex-1">
            <picture className="h-[192] h-full">
              <img src={prop.poster} alt="pic" className="rounded-l-lg" />
            </picture>
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
