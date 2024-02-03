import { useEffect } from "react";
import { API_OPTIONS, TMDB_TOP_RATED_MOVIES } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {  addTopRatedMovies } from "../redux/moviesSlice";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const topRatedMovies = useSelector(state => state.movies.topRatedMovies);

    useEffect(() => {
        !topRatedMovies.length && fetchMovies();
    }, [])

    

    const fetchMovies = async () => {
        const data = await fetch(TMDB_TOP_RATED_MOVIES, API_OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
    }
}

export default useTopRatedMovies;