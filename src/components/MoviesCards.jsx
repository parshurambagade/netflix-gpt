/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constants";

// eslint-disable-next-line react/prop-types
const MoviesCards = ({movies, name}) => {
  if(!movies) return null;

  return (
    <div className="text-white">  
      <h2 className="font-bold text-xl md:text-2xl lg:text-3xl mb-4">{name}</h2>
      <div className="overflow-x-auto pb-4">
        <div className="flex gap-4 w-max">
          {movies?.map((movie) => (
            <Link key={movie.id} to={'/movie/' + movie.id} className="flex-shrink-0 transition-transform duration-300 ease-in-out transform hover:scale-105">
              <img 
                src={`${IMG_CDN_URL}${movie.poster_path}`} 
                alt={movie.title} 
                className="w-32 sm:w-40 md:w-48 lg:w-56 rounded-lg shadow-lg"
              />
            </Link>
          ))} 
        </div>    
      </div>
    </div>      
  );
};

export default MoviesCards;