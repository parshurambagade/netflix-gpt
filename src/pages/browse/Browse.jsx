
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
import useMxPlayerMovies from "../../hooks/useMxPlayerMovies";
import { useEffect } from "react";

const Browse = () => {
  useMxPlayerMovies();
  useNowPlayingMovies();  
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();


  const mainMovie = useMainMovie();


  const showGptSearchPage = useSelector(store => store.gpt.showGptSearchPage);

  return (
    <div className="">
      <div className="w-full">
      <Header />
      </div>
      <div>
        {showGptSearchPage ? <GptSearchPage /> :
        <>
        <MainMovieSection mainMovie={mainMovie}/>
        <CardsContainer />
        </>}
      </div>
    </div>
  )
}

export default Browse