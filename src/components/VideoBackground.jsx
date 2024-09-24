import React, { useState } from "react";
import useTrailer from "../hooks/useTrailer";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  const trailer = useTrailer(movieId);
  // const trailer = useSelector(state => state.movies.trailer);

  if (!trailer) return;

  return (
    <div className="relative w-full -mt-[3.7rem] md:-mt-24 lg:-mt-32 -z-30">
      <iframe
        src={`https://www.youtube.com/embed/${trailer.key}?si=Or7kDmuG1TMinh6H&mute=1&autoplay=1&controls=0&modestbranding=1&showinfo=0&loop=1&rel=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className=" w-full aspect-video"
      ></iframe>
      {/* <iframe src="https://www.youtube.com/embed/7ODn7WAiZoA?si=WX2aWbaPg1V-wbEc&mute=1&autoplay=1&controls=0&modestbranding=1&showinfo=0&loop=1&rel=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-full aspect-video" ></iframe> */}


    </div>
  );
};

export default VideoBackground;
