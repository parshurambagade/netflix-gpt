import { useSelector } from 'react-redux'
import MovieText from '../pages/browse/MovieText';
import VideoBackground from './VideoBackground';
import { useParams } from 'react-router-dom';

const MainMovieSection = ({mainMovie}) => {
  if(!mainMovie) return null;

  const {original_title, overview, id} = mainMovie;

  // const {id,description, title } = mainMovie;


  return (
    <div className=''>
       {/* MOVIE TEXT CONTAINER  */}
       <MovieText title={original_title} overview={overview} />
       {/* <MovieText title={title} overview={description} /> */}

        {/* VIDEO BACKGROUND CONTAINER*/}
        {/* <VideoBackground movieId="NcCYq3bvlJM"/> */}
        <VideoBackground movieId={id}/>
       
    </div>
  )
}

export default MainMovieSection