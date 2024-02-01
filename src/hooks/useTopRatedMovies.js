import { useEffect } from "react";
import { API_OPTIONS, TMDB_TOP_RATED_MOVIES } from "../utils/constants";
import { useDispatch } from "react-redux";
import {  addTopRatedMovies } from "../redux/moviesSlice";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchMovies();
    }, [])

    

    const fetchMovies = async () => {
        const data = await fetch(TMDB_TOP_RATED_MOVIES, API_OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
    }
}

export default useTopRatedMovies;