import { useEffect } from "react";
import { API_OPTIONS, TMDB_POPULAR_MOVIES } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../redux/moviesSlice";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchMovies();
    }, [])

    

    const fetchMovies = async () => {
        const data = await fetch(TMDB_POPULAR_MOVIES, API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    }
}

export default usePopularMovies;