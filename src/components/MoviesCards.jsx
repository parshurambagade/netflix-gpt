/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constants";

// eslint-disable-next-line react/prop-types
const MoviesCards = ({ movies, name }) => {
  if (!movies) return null;

  return (
    <section aria-label={name} className="text-white">
      <h2 className="font-bold text-xl md:text-2xl lg:text-3xl mb-4">{name}</h2>
      <div className="w-full pb-4">
        <div className="overflow-x-auto flex gap-4 pb-2" tabIndex={0}>
          {movies?.map((movie) => (
            <Link
              key={movie.id}
              to={"/movie/" + movie.id}
              className="flex-shrink-0 transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              <img
                src={IMG_CDN_URL + "w185" + movie?.poster_path}
                srcSet={`
${IMG_CDN_URL}w154${movie?.poster_path} 1x,
${IMG_CDN_URL}w342${movie?.poster_path} 2x`}
                alt={movie.title}
                className="w-32 sm:w-40 md:w-48 lg:w-56 rounded-lg shadow-lg"
                loading="lazy"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoviesCards;
