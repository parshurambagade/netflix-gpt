import { useEffect, useState } from "react";
import { API_OPTIONS, CORS_ORIGIN_PROXY, MOVIE_VIDEOS } from "../utils/constants";
import { useDispatch, useSelector} from "react-redux";
import { addTrailer } from "../redux/moviesSlice";

const useTrailer = (movieId) => {
    const dispatch = useDispatch();
    const trailer = useSelector(state => state.movies.trailer);
    // const [trailer, setTrailer] = useState(null);

    useEffect(() => {
        !trailer && fetchMovieVideos();
        fetchMovieVideos();
    }, [])
    
    const fetchMovieVideos = async () => {
        try{

        const data = await fetch(`${CORS_ORIGIN_PROXY}${encodeURIComponent(`${MOVIE_VIDEOS}${movieId}/videos`)}`);
        const json = await data.json();
        console.log("trailer: ", await JSON.parse(json?.contents)?.results);
        //checks for the type = Trailer 
        const filteredData = await JSON.parse(json?.contents)?.results?.filter((video) => video.type==="Trailer");
        const trailer = filteredData.length ? filteredData[0] : JSON.parse(json?.contents)?.results[0];
        
        dispatch(addTrailer(trailer))
        // setTrailer(trailer)
        }catch(e){
            console.error(e);
        }
    }
    
    return trailer;
    
}

export default useTrailer;