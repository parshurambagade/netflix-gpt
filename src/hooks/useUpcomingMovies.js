import { useEffect } from "react";
import { API_OPTIONS, TMDB_UPCOMING_MOVIES } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../redux/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((state) => state.movies.upcomingMovies);

  useEffect(() => {
    !upcomingMovies.length && fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const data = await fetch(TMDB_UPCOMING_MOVIES);
      const json = await data.json();

      console.log("upcoming: ", await JSON.parse(json?.contents)?.results);
      dispatch(addUpcomingMovies(await JSON.parse(json?.contents)?.results));
    } catch (e) {
      console.error(e);
    }
  };
};

export default useUpcomingMovies;
