import React from 'react'
import { useParams } from 'react-router-dom'
import useMovieDetails from '../../hooks/useMovieDetails';
import Header from '../../layouts/Header';
import MainMovieSection from '../../components/MainMovieSection';
import { useSelector } from 'react-redux';
import useTrailer from '../../hooks/useTrailer';

const MoviePage = () => {
    const {movieId} = useParams();
    useMovieDetails(movieId);
    
    
    const mainMovie = useSelector(store => store.movies.movieDetails);

  return (
    <div>
        <Header />
        <MainMovieSection mainMovie={mainMovie} />
    </div>
  )
}

export default MoviePage