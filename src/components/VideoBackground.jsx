import React from 'react'
import useTrailer from '../hooks/useTrailer'
import { useSelector } from 'react-redux';

const VideoBackground = ({movieId}) => {
    useTrailer(movieId);
    const trailer = useSelector(store => store.movies.trailer);
    if(!trailer.length) return;

    
  return (
    <div className='w-full '>
        <iframe src={`https://www.youtube.com/embed/${trailer[0].key}?si=Or7kDmuG1TMinh6H&mute=1&autoplay=1&controls=0&modestbranding&showinfo=0&loop=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className='w-full aspect-video'></iframe>
    </div>
  )
}

export default VideoBackground