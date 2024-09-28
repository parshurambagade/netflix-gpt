import MainMovieSection from "../../components/MainMovieSection";
import Header from "../../layouts/Header"
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import CardsContainer from "./CardsContainer";
import { useSelector } from "react-redux";
import usePopularMovies from "../../hooks/usePopularMovies";
import useTopRatedMovies from "../../hooks/useTopRatedMovies";
import useUpcomingMovies from "../../hooks/useUpcomingMovies";
import GptSearchPage from "../gpt/GptSearchPage";
import useMainMovie from "../../hooks/useMainMovie";

const Browse = () => {
  useNowPlayingMovies();  
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const mainMovie = useMainMovie();
  const showGptSearchPage = useSelector(store => store.gpt.showGptSearchPage);

  return (
    <div className="w-full">
      <Header />
      <main>
        {showGptSearchPage ? (
          <GptSearchPage />
        ) : (
          <div className="relative flex flex-col">
            <MainMovieSection mainMovie={mainMovie}/>
            <CardsContainer />
          </div>
        )}
      </main>
    </div>
  )
}

export default Browse