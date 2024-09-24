
import { Link } from "react-router-dom";
import { CORS_ORIGIN_PROXY, IMG_CDN_URL, MX_PLAYER_IMAGE_BASE_URL } from "../utils/constants";

const MoviesCards = ({movies, name}) => {
  if(!movies) return;
  return (
    <div className=" my-2  lg:mx-12 text-white  overflow-x-scroll max-w-full" >  
      <h1 className="font-bold text-lg lg:text-2xl mt-4 mb-3 lg:my-4">{name}</h1>
      <div className="flex gap-4 lg:gap-6 w-max">
        {movies?.map((movie) => (
          <Link key={movie.id} to={'/movie/' + movie.id} className="w-max cursor-pointer    hover:border hover:border-white transition-all ease-linear">
            {/* <img src={`${CORS_ORIGIN_PROXY}${encodeURIComponent(`${IMG_CDN_URL}${movie.poster_path}`) }`} alt="movie poster" className="w-32 sm:w-40 md:w-48 lg:w-56"  /> */}
            <img src={`${IMG_CDN_URL}${movie.poster_path}`} alt="movie poster" className="w-32 sm:w-40 md:w-48 lg:w-56"  />
          
            {/* <img src={MX_PLAYER_IMAGE_BASE_URL + movie.imageInfo.filter(img => img.type=='portrait_large')[0].url} alt="movie poster" className="w-32 lg:hover:w-60 transition-all ease-linear sm:w-40 md:w-48 lg:w-56"  /> */}
          </Link>
        ))} 
      </div>    
    </div>      
  );
};

export default MoviesCards;
