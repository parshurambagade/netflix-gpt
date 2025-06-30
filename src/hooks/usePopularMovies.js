import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../redux/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.movies.popularMovies);

  const fetchMovies = useCallback(async () => {
    try {
      const data = await fetch("/api/popular-movies");
      const json = await data.json();
      dispatch(addPopularMovies(json.results));
    } catch (e) {
      console.error(e);
    }
  }, [dispatch]);

  useEffect(() => {
    !popularMovies?.length && fetchMovies();
  }, [popularMovies, fetchMovies]);
};

export default usePopularMovies;
