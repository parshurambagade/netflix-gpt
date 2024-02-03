import React, { useEffect } from 'react'
import { API_OPTIONS, NETFLIX_BG, TMDB_GET_MOVIES_BY_KEYWORD } from '../utils/constants'
import GptSearbar from '../components/GptSearbar'
import { useSelector } from 'react-redux'
import MoviesCards from '../components/MoviesCards'

const GptSearchPage = () => {
  const movieNames = useSelector(state => state.gpt.movieNames);
  const movies = useSelector(state => state.gpt.movies);
    
  
  return (
    <div>
        <img src={NETFLIX_BG} alt="netflix background" className='fixed'/>
        <div className='absolute z-10 flex justify-center w-full py-[20vh] gap-20 flex-col'>
          <div className='flex justify-center'>
        <GptSearbar />
        </div>
        {movieNames.length && 
        <div className='bg-black bg-opacity-70 py-8  mx-20'>
          {movieNames.map((movie, i) => <MoviesCards key={movie} name={movie} movies={movies[i]}/>)}
        </div>}
        </div>
    </div>
  )
}

export default GptSearchPage