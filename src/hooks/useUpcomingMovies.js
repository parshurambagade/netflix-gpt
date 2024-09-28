import { useCallback, useEffect } from "react";
import { TMDB_UPCOMING_MOVIES } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../redux/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((state) => state.movies.upcomingMovies);

  const fetchMovies = useCallback(async () => {
    try {
      const data = await fetch(TMDB_UPCOMING_MOVIES);
      const json = await data.json();
      dispatch(addUpcomingMovies(JSON.parse(json.contents)?.results));
    } catch (e) {
      console.error(e);
    }
  }, [dispatch]);

  useEffect(() => {
    !upcomingMovies.length && fetchMovies();
  }, [fetchMovies, upcomingMovies]);
};

export default useUpcomingMovies;
