import React, { useEffect } from 'react'
import { API_OPTIONS, TMDB_GET_MOVIE_DETAILS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addMovieDetails } from '../redux/moviesSlice';

const useMovieDetails = (movieId) => {
    const dispatch = useDispatch();
    // const movieDetails = useSelector(state => state.movies.movieDetails);

    useEffect(() => {
        fetchMovieDetails();
    },[])

    const fetchMovieDetails = async () => {
        const data = await fetch(TMDB_GET_MOVIE_DETAILS + movieId, API_OPTIONS);
        const json = await data.json();
        dispatch(addMovieDetails(json));        
    }

}

export default useMovieDetails