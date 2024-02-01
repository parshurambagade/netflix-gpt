
import MainMovieSection from "../components/MainMovieSection";
import Header from "../layouts/Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import CardsContainer from "../components/CardsContainer";
import { useSelector } from "react-redux";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <div className="w-full">
      <Header />
      </div>
      <div>
        <MainMovieSection />
        <CardsContainer />
      </div>
    </div>
  )
}

export default Browse