import { useDispatch, useSelector } from "react-redux";
import { addMainMovieId } from "../redux/moviesSlice";
const useMainMovie = () => {
    const dispatch = useDispatch();

    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);
    // const mxPlayerMovies = useSelector(store => store.movies.mxPlayerMovies);

    if(!nowPlayingMovies.length) {
        return
    }

    // if(!mxPlayerMovies.length) {
    //     return
    // }
    
    const mainMovie = nowPlayingMovies[0];
    dispatch(addMainMovieId(mainMovie.id));
    // const mainMovie = mxPlayerMovies[0].items[0];


    return mainMovie;
}

export default useMainMovie;