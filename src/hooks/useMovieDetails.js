import { useCallback, useEffect } from "react";
import { CORS_ORIGIN_PROXY, TMDB_GET_MOVIE_DETAILS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieDetails } from "../redux/moviesSlice";

const useMovieDetails = (movieId) => {
  const dispatch = useDispatch();
  // const movieDetails = useSelector(state => state.movies.movieDetails);

  useEffect(() => {
    movieId && fetchMovieDetails();
  }, [fetchMovieDetails, movieId]);

  const fetchMovieDetails = useCallback(async () => {
    try {
      const data = await fetch(
        `${CORS_ORIGIN_PROXY}${encodeURIComponent(
          `${TMDB_GET_MOVIE_DETAILS}${movieId}`
        )}`
      );
      const json = await data.json();
      dispatch(addMovieDetails(json));
    } catch (e) {
      console.error(e);
    }
  },[dispatch, movieId]);
};

export default useMovieDetails;
