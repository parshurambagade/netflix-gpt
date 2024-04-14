import { useSelector } from "react-redux";

const useMainMovie = () => {
    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);

    if(!nowPlayingMovies.length) {
        return
    }
    
    const mainMovie = nowPlayingMovies[0];

    return mainMovie;
}

export default useMainMovie;