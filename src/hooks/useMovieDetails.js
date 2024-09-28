import { useCallback, useEffect } from "react";
import { CORS_ORIGIN_PROXY, TMDB_GET_MOVIE_DETAILS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieDetails } from "../redux/moviesSlice";

const useMovieDetails = (movieId) => {
  const dispatch = useDispatch();
  // const movieDetails = useSelector(state => state.movies.movieDetails);
  const fetchMovieDetails = useCallback(async () => {
    try {
      const data = await fetch(
        `${CORS_ORIGIN_PROXY}${encodeURIComponent(
          `${TMDB_GET_MOVIE_DETAILS + movieId}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
        )}`
      );
      const json = await data.json();
      console.log(JSON.parse(json.contents));
      dispatch(addMovieDetails(JSON.parse(json.contents)));
    } catch (e) {
      console.error(e);
    }
  },[dispatch, movieId]);


  useEffect(() => {
    movieId && fetchMovieDetails();
  }, [fetchMovieDetails, movieId]);


};

export default useMovieDetails;
