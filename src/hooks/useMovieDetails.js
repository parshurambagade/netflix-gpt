import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovieDetails } from "../redux/moviesSlice";

const useMovieDetails = (movieId) => {
  const dispatch = useDispatch();
  // const movieDetails = useSelector(state => state.movies.movieDetails);
  const fetchMovieDetails = useCallback(async () => {
    try {
      const data = await fetch(`/api/movie-details?movieId=${movieId}`);
      const json = await data.json();
      dispatch(addMovieDetails(json));
    } catch (e) {
      console.error(e);
    }
  }, [dispatch, movieId]);

  useEffect(() => {
    movieId && fetchMovieDetails();
  }, [fetchMovieDetails, movieId]);
};

export default useMovieDetails;
