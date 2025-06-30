import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovieCredits } from "../redux/personSlice";

const usePersonMovieCredits = (personId) => {
  const dispatch = useDispatch();

  const fetchMovieCredits = useCallback(async () => {
    try {
      const response = await fetch(
        `/api/person-movie-credits?personId=${personId}`
      );
      const json = await response.json();

      dispatch(addMovieCredits(json));
    } catch (err) {
      console.error(err);
    }
  }, [personId, dispatch]);

  useEffect(() => {
    personId && fetchMovieCredits();
  }, [personId, fetchMovieCredits]);
};

export default usePersonMovieCredits;
