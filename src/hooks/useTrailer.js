import { useEffect, useState } from "react";
import { API_OPTIONS, MOVIE_VIDEOS } from "../utils/constants";
import { useDispatch, useSelector} from "react-redux";
import { addTrailer } from "../redux/moviesSlice";

const useTrailer = (movieId) => {
    // const dispatch = useDispatch();
    // const trailer = useSelector(state => state.movies.trailer);
    const [trailer, setTrailer] = useState(null);

    useEffect(() => {
        // !trailer && fetchMovieVideos();
        fetchMovieVideos();
    }, [])
    
    const fetchMovieVideos = async () => {
        const data = await fetch(MOVIE_VIDEOS + movieId + "/videos", API_OPTIONS);
        const json = await data.json();
        // console.log(json);
        //checks for the type = Trailer 
        const filteredData = json.results.filter((video) => video.type==="Trailer");
        const trailer = filteredData.length ? filteredData[0] : json.results[0];
        
        // dispatch(addTrailer(trailer))
        setTrailer(trailer)
    }
    
    return trailer;
    
}

export default useTrailer;