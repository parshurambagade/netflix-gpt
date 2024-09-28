import { useCallback, useEffect } from "react";
import { TMDB_TOP_RATED_MOVIES } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../redux/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((state) => state.movies.topRatedMovies);

  const fetchMovies = useCallback(async () => {
    try {
      const data = await fetch(TMDB_TOP_RATED_MOVIES);
      const json = await data.json();
      dispatch(addTopRatedMovies(JSON.parse(json?.contents)?.results));
    } catch (e) {
      console.log(e);
    }
  }, [dispatch]);

  useEffect(() => {
    !topRatedMovies?.length && fetchMovies();
  }, [topRatedMovies, fetchMovies]);
};

export default useTopRatedMovies;
