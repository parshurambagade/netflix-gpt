import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovieCredits } from "../redux/moviesSlice";

const useMovieCredits = (movieId) => {
  const dispatch = useDispatch();

  const fetchMovieCredits = useCallback(async () => {
    try {
      const response = await fetch("/api/movie-credits?movieId=" + movieId, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      // const json = await response.json();
      // console.log(
      //   "Response from movie-credits API:",
      //   JSON.parse(await response.text())
      // );

      dispatch(addMovieCredits(JSON.parse(response.contents)));
    } catch (err) {
      console.error(err);
    }
  }, [movieId, dispatch]);

  useEffect(() => {
    movieId && fetchMovieCredits();
  }, [movieId, fetchMovieCredits]);
};

export default useMovieCredits;
