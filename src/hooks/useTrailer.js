import { useEffect } from "react";
import { API_OPTIONS, MOVIE_VIDEOS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../redux/moviesSlice";

const useTrailer = (movieId) => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchMovieVideos();
    }, [])
    
    const fetchMovieVideos = async () => {
        const data = await fetch(MOVIE_VIDEOS + movieId + "/videos", API_OPTIONS);
        const json = await data.json();
        const trailer = json.results.filter((video) => video.type=="Trailer")
        
        dispatch(addTrailer(trailer))
    }
}

export default useTrailer;