import React, { useEffect } from "react";
import movieTrailer from 'movie-trailer'; 

const DummyMovie = () => {

  const fetchMovie = async function () {
    try {
        const response = await fetch('https://crossorigin.me/http://www.omdbapi.com/?&apikey=6b3d4583&t=tumbbad', {method: 'GET'});

    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return <div>DummyMovie</div>;
};

export default DummyMovie;
