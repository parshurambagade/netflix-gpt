import { useEffect } from "react";
import { TMDB_NOW_PLAYING_MOVIES } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../redux/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (state) => state.movies.nowPlayingMovies
  );

  useEffect(() => {
    !nowPlayingMovies.length && fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      // const data = await fetch(TMDB_NOW_PLAYING_MOVIES, API_OPTIONS);
      const data = await fetch(TMDB_NOW_PLAYING_MOVIES);
      const json = await data.json();

      console.log("now playing: ", await JSON.parse(json.contents)?.results);

      dispatch(addNowPlayingMovies(await JSON.parse(json.contents)?.results));
    } catch (e) {
      console.error(e);
    }
  };
};

export default useNowPlayingMovies;
