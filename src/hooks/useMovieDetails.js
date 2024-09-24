import React, { useEffect } from 'react'
import { API_OPTIONS, CORS_ORIGIN_PROXY, TMDB_GET_MOVIE_DETAILS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addMovieDetails } from '../redux/moviesSlice';

const useMovieDetails = (movieId) => {
    const dispatch = useDispatch();
    // const movieDetails = useSelector(state => state.movies.movieDetails);

    useEffect(() => {
        fetchMovieDetails();
    },[])

    const fetchMovieDetails = async () => {
        try{
        const data = await fetch(`${CORS_ORIGIN_PROXY}${encodeURIComponent(`${TMDB_GET_MOVIE_DETAILS}${movieId}`)}`);
        const json = await data.json();
        console.log("movie details: ", JSON.parse(json.contents));
        dispatch(addMovieDetails(json));      
        }catch(e){
            console.error(e);
        }  
    }

}

export default useMovieDetails