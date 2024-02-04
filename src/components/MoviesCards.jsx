import { IMG_CDN_URL } from "../utils/constants";

const MoviesCards = ({movies, name}) => {
  return (
    <div className=" my-2  lg:mx-12 text-white ">
      <h1 className="font-bold text-lg lg:text-2xl mt-4 mb-3 lg:my-4">{name}</h1>
      <div className="flex gap-4 lg:gap-6 overflow-x-scroll  w-full">
        {movies?.map((movie) => (
          
            <img key={movie.id} src={IMG_CDN_URL + movie.poster_path} alt="movie poster" className="w-32 sm:w-40 md:w-48 lg:w-56 " />
    
        ))}
      </div>
    </div>
  );
};

export default MoviesCards;
