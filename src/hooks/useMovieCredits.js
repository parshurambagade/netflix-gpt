import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovieCredits } from "../redux/moviesSlice";

const useMovieCredits = (movieId) => {
  const dispatch = useDispatch();

  const fetchMovieCredits = useCallback(async () => {
    try {
      const response = await fetch("/api/movie-credits?movieId=" + movieId);
      if (!response.ok) {
        throw new Error("Failed to fetch movie credits");
      }
      const json = await response.json();
      console.log("Movie Credits:", json);
      dispatch(addMovieCredits(json));
    } catch (err) {
      console.error(err);
    }
  }, [movieId, dispatch]);

  useEffect(() => {
    movieId && fetchMovieCredits();
  }, [movieId, fetchMovieCredits]);
};

export default useMovieCredits;
