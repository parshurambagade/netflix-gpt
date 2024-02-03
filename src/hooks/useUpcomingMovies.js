import { useEffect } from "react";
import { API_OPTIONS, TMDB_UPCOMING_MOVIES } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {  addUpcomingMovies } from "../redux/moviesSlice";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const upcomingMovies = useSelector(state => state.movies.upcomingMovies);

    useEffect(() => {
        !upcomingMovies.length && fetchMovies();
    }, [])

    

    const fetchMovies = async () => {
        const data = await fetch(TMDB_UPCOMING_MOVIES , API_OPTIONS);
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
    }
}

export default useUpcomingMovies;