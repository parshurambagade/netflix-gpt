import { useCallback, useEffect } from "react";
import { CORS_ORIGIN_PROXY, MOVIE_VIDEOS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../redux/moviesSlice";

const useTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailer = useSelector((state) => state.movies.trailer);

  const fetchMovieVideos = useCallback(async () => {
    try {
      const data = await fetch(
        `${CORS_ORIGIN_PROXY}${encodeURIComponent(
          `${MOVIE_VIDEOS + movieId}/videos?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }`
        )}`
      );

      const json = await data.json();

      //checks for the type = Trailer
      const filteredData = await JSON.parse(json?.contents)?.results?.filter(
        (video) => video.type === "Trailer"
      );

      const trailer = filteredData?.length
        ? filteredData[0]
        : JSON.parse(json?.contents)?.results[0];

      dispatch(addTrailer(trailer));
    } catch (e) {
      console.error(e);
    }
  }, [movieId, dispatch]);

  useEffect(() => {
    movieId && fetchMovieVideos();
  }, [movieId, fetchMovieVideos]);

  return trailer;
};

export default useTrailer;
