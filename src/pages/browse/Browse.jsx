
import MainMovieSection from "./MainMovieSection";
import Header from "../../layouts/Header"
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import CardsContainer from "./CardsContainer";
import { useSelector } from "react-redux";
import usePopularMovies from "../../hooks/usePopularMovies";
import useTopRatedMovies from "../../hooks/useTopRatedMovies";
import useUpcomingMovies from "../../hooks/useUpcomingMovies";
import GptSearchPage from "../gpt/GptSearchPage";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const showGptSearchPage = useSelector(store => store.gpt.showGptSearchPage);

  return (
    <div className="">
      <div className="w-full">
      <Header />
      </div>
      <div>
        {showGptSearchPage ? <GptSearchPage /> :
        <>
        <MainMovieSection />
        <CardsContainer />
        </>}
      </div>
    </div>
  )
}

export default Browse