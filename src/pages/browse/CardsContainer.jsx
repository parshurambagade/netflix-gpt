import { useSelector } from 'react-redux';
import MoviesCards from '../../components/MoviesCards';
import { languageText } from '../../utils/languages';

const CardsContainer = () => {
    const movies = useSelector(state => state.movies);
    const lang = useSelector(state => state.config.lang);

    // console.log(movies.nowPlayingMovies)
    const nowPlayingMovies = movies.nowPlayingMovies;
    const popularMovies = movies.popularMovies;
    const topRatedMovies = movies.topRatedMovies;
    const upcomingMovies = movies.upcomingMovies;
  return (
    <div className='bg-black px-2 pt-8 pb-16 md:px-6 lg:p-8 overflow-y-visible '>
        <div className='flex flex-col gap-2 lg:gap-4 -mt-8 md:-mt-16  lg:-mt-24 xl:-mt-60  2xl:-mt-72 relative z-10 '>
        
        <MoviesCards name={languageText?.browsePage[lang]?.nowPlaying} movies={nowPlayingMovies} />
        <MoviesCards name={languageText?.browsePage[lang]?.popular} movies={popularMovies} />
        <MoviesCards name={languageText?.browsePage[lang]?.topRated} movies={topRatedMovies} />
        <MoviesCards name={languageText?.browsePage[lang]?.upcoming} movies={upcomingMovies} />
        
        </div>
    </div>
  )
}

export default CardsContainer