import { useSelector } from 'react-redux'
import MovieText from '../pages/browse/MovieText';
import VideoBackground from './VideoBackground';
import { useParams } from 'react-router-dom';

const MainMovieSection = ({mainMovie}) => {
  if(!mainMovie) return null;
  // console.log(mainMovie);
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