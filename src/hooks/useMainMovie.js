import { useDispatch, useSelector } from "react-redux";
import { addMainMovieId } from "../redux/moviesSlice";
const useMainMovie = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  if (!nowPlayingMovies?.length) {
    return;
  }

  const mainMovie = nowPlayingMovies[0];
  dispatch(addMainMovieId(mainMovie.id));

  return mainMovie;
};

export default useMainMovie;
