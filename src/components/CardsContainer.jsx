import React from 'react'
import { useSelector } from 'react-redux';
import { IMG_CDN_URL } from '../utils/constants';
import MoviesCards from './MoviesCards';
import { addTopRatedMovies, addUpcomingMovies } from '../redux/moviesSlice';

const CardsContainer = () => {
    const movies = useSelector(store => store.movies);
    console.log(movies.nowPlayingMovies)
    const nowPlayingMovies = movies.nowPlayingMovies;
    const popularMovies = movies.popularMovies;
    const topRatedMovies = movies.topRatedMovies;
    const upcomingMovies = movies.upcomingMovies;
  return (
    <div className='bg-black p-8'>
        <div className='flex flex-col gap-4 -mt-72 relative z-10'>
        
        <MoviesCards name="Now Playing" movies={nowPlayingMovies} />
        <MoviesCards name="Popular" movies={popularMovies} />
        <MoviesCards name="Top Rated" movies={topRatedMovies} />
        <MoviesCards name="Upcoming" movies={upcomingMovies} />
        
        </div>
    </div>
  )
}

export default CardsContainer