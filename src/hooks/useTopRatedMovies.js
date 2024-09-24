import { useEffect } from "react";
import { API_OPTIONS, TMDB_TOP_RATED_MOVIES } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../redux/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((state) => state.movies.topRatedMovies);

  useEffect(() => {
    !topRatedMovies.length && fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const data = await fetch(TMDB_TOP_RATED_MOVIES);
      const json = await data.json();
      console.log("top rated: ", await JSON.parse(json?.contents)?.results);
      dispatch(addTopRatedMovies(await JSON.parse(json?.contents)?.results));
    } catch (e) {
      console.log(e);
    }
  };
};

export default useTopRatedMovies;
