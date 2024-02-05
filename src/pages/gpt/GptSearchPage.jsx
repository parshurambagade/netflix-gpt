import {NETFLIX_BG } from '../../utils/constants'
import { useSelector } from 'react-redux'
import MoviesCards from '../../components/MoviesCards'
import GptSearchbar from './GptSearchbar'

const GptSearchPage = () => {
  const movieNames = useSelector(state => state.gpt.movieNames);
  const movies = useSelector(state => state.gpt.movies);
    
  
  return (
    <div className='min-h-screen '>
        <img src={NETFLIX_BG} alt="netflix background" className='fixed top-0 -z-20 object-cover h-screen lg:w-full'/>
        <div className='absolute z-10 flex justify-center w-full py-8 lg:py-[12vh] gap-20 flex-col'>
          <div className='flex justify-center px-4 lg:px-0'>
        <GptSearchbar />
        </div>
        {movieNames.length && 
        <div className='bg-black bg-opacity-70 py-4 lg:py-8 px-4 mx-2 -my-16 sm:-my-8 lg:mx-20'>
          {movieNames.map((movie, i) => <MoviesCards key={movie} name={movie} movies={movies[i]}/>)}
        </div>}
        </div>
    </div>
  )
}

export default GptSearchPage