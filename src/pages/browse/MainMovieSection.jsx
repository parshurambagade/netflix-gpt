import { useSelector } from 'react-redux'
import MovieText from './MovieText';
import VideoBackground from './VideoBackground';

const MainMovieSection = () => {
  const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);
  
  if(!nowPlayingMovies.length) return;

  const mainMovie = nowPlayingMovies[0];
  // console.log(mainMovie)
  const {original_title, overview, id} = mainMovie;
    // const trailer = useSelector(store => store.movies?.trailer);


  return (
    <div className=''>
       {/* MOVIE TEXT CONTAINER  */}
       <MovieText title={original_title} overview={overview} />

        {/* VIDEO BACKGROUND CONTAINER*/}
        <VideoBackground movieId={id}/>
       
    </div>
  )
}

export default MainMovieSection