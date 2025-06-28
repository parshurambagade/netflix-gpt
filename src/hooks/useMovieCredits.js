import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovieCredits } from "../redux/moviesSlice";

const useMovieCredits = (movieId) => {
  const dispatch = useDispatch();

  const fetchMovieCredits = useCallback(async () => {
    try {
      const response = await fetch("/api/movie-credits?movieId=" + movieId);

      dispatch(addMovieCredits(response?.contents));
    } catch (err) {
      console.error(err);
    }
  }, [movieId, dispatch]);

  useEffect(() => {
    movieId && fetchMovieCredits();
  }, [movieId, fetchMovieCredits]);
};

export default useMovieCredits;
