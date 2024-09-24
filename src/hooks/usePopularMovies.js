import { useEffect } from "react";
import { API_OPTIONS, TMDB_POPULAR_MOVIES } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../redux/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.movies.popularMovies);

  useEffect(() => {
    !popularMovies.length && fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const data = await fetch(TMDB_POPULAR_MOVIES);
      const json = await data.json();

      console.log("popular movies: ",await JSON.parse(json?.contents)?.results);
      dispatch(addPopularMovies(await JSON.parse(json?.contents)?.results));
    } catch (e) {
      console.error(e);
    }
  };
};

export default usePopularMovies;
