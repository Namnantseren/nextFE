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

export default function Card(prop: MovieType): JSX.Element {
  return (
    <div className="flex justify-center align-center">
      <div className="flex flex-wrap w-96">
        <div className="w-96 h-64 rounded-t-lg bg-white poster flex-1">
          <picture>
            <img src={prop.poster} alt="pic" />
          </picture>
        </div>
        <div className="w-96 bg-gray-500 rounded-b-lg flex-1">
          <h4 className="pl-3 pt-3 text-red-500">{prop.title}</h4>
          <p className="pl-3 pr-3 pt-1 pb-3">{prop.plot}</p>
        </div>
      </div>
    </div>
  );
}
