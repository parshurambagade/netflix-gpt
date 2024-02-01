
import MainMovieSection from "../components/MainMovieSection";
import Header from "../layouts/Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovies();
  
  return (
    <div>
      <div className="w-full">
      <Header />
      </div>
      <div>
        <MainMovieSection />
      </div>
    </div>
  )
}

export default Browse