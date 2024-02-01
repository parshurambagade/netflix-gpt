import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MoviesCards = ({movies, name}) => {
  return (
    <div className=" my-2 mx-12 text-white ">
      <h1 className="font-bold text-2xl my-2">{name}</h1>
      <div className="flex gap-4 overflow-x-scroll  w-full">
        {movies?.map((movie) => (
          
            <img key={movie.id} src={IMG_CDN_URL + movie.poster_path} alt="movie poster" />
    
        ))}
      </div>
    </div>
  );
};

export default MoviesCards;
