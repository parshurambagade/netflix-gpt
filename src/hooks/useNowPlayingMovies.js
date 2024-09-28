import { useCallback, useEffect } from "react";
import { TMDB_NOW_PLAYING_MOVIES } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../redux/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (state) => state.movies.nowPlayingMovies
  );

  const fetchMovies = useCallback(async () => {
    try {
      const data = await fetch(TMDB_NOW_PLAYING_MOVIES);
      const json = await data.json();
      dispatch(addNowPlayingMovies(JSON.parse(json.contents)?.results));
    } catch (e) {
      console.error(e);
    }
  }, [dispatch]);

  useEffect(() => {
    !nowPlayingMovies.length && fetchMovies();
  }, [nowPlayingMovies, fetchMovies]);
};

export default useNowPlayingMovies;
