import { useCallback, useEffect } from "react";
import { CORS_ORIGIN_PROXY, TMDB_PERSON_MOVIE_CREDITS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieCredits } from "../redux/personSlice";

const usePersonMovieCredits = (personId) => {
  const dispatch = useDispatch();

  const fetchMovieCredits = useCallback(async () => {
    try {
      const response = await fetch(
        `${CORS_ORIGIN_PROXY}${encodeURIComponent(
          `${TMDB_PERSON_MOVIE_CREDITS + personId}/movie_credits?language=en-US&api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }`
        )}`
      );
      const json = await response.json();

      dispatch(addMovieCredits(JSON.parse(json.contents)));
    } catch (err) {
      console.error(err);
    }
  }, [personId, dispatch]);

  useEffect(() => {
    personId && fetchMovieCredits();
  }, [personId, fetchMovieCredits]);
};

export default usePersonMovieCredits;
