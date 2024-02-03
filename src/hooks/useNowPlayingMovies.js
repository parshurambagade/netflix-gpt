import { useEffect } from "react";
import { API_OPTIONS, TMDB_NOW_PLAYING_MOVIES } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {  addNowPlayingMovies } from "../redux/moviesSlice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector(state => state.movies.nowPlayingMovies);

    useEffect(() => {
        !nowPlayingMovies.length && fetchMovies();
    }, [])

    

    const fetchMovies = async () => {
        const data = await fetch(TMDB_NOW_PLAYING_MOVIES, API_OPTIONS);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    }
}

export default useNowPlayingMovies;