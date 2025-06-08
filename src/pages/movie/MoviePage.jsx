import { useParams } from 'react-router-dom';
import useMovieDetails from '../../hooks/useMovieDetails';
import { useSelector } from 'react-redux';
import { IMG_CDN_URL } from '../../utils/constants';
import useMovieCredits from '../../hooks/useMovieCredits';
// import useTrailer from '../../hooks/useTrailer';
import Header from '../../layouts/Header';
import VideoBackground from '../../components/VideoBackground';

const MoviePage = () => {

  const {movieId} = useParams();

  const movie = useSelector(state => state.movies.movieDetails);
  const movieCredits = useSelector(state => state.movies.movieCredits);
  const trailer = useSelector(state => state.movies.trailer);

  useMovieDetails(movieId);
  // useTrailer(movieId);
  useMovieCredits(movieId);

  if(!movie) return null;

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main className='bg-black' >
      <div className="bg-black  relative">
        <div className="absolute -top-8 md:-top-16 lg:-top-24 inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
        {/* <img
          src={IMG_CDN_URL + movie?.backdrop_path}
          alt={movie?.title}
          className="w-full h-[70vh] object-cover"
        /> */}
        <VideoBackground movieId={movieId} />

        <section aria-label="Movie title" className=" absolute bottom-0 left-0 2xl:left-44 p-6 z-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">{movie?.title}</h1>
          <p className="text-lg md:text-xl">{movie?.tagline}</p>
        </section>
      </div>

      <div className=" container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <section aria-label='Movie poster' className="md:w-1/3">
            <img
              src={`${IMG_CDN_URL + movie?.poster_path}`}
              alt={movie?.title}
              className="w-full rounded-lg shadow-lg"
            />
          </section>
          <section aria-label='Movie overview' className="md:w-2/3">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-lg mb-6">{movie?.overview}</p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Release Date</h3>
                <p>{movie?.release_date}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Runtime</h3>
                <p>{movie?.runtime} minutes</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Rating</h3>
                <p>{movie?.vote_average?.toFixed(1)} / 10</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Genres</h3>
                <p>{movie?.genres?.map(genre => genre?.name).join(', ')}</p>
              </div>
            </div>
            <section aria-label='Movie trailer'>
              <h2 className="text-2xl font-semibold mb-4">Trailer</h2>
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${trailer?.key}`}
                  title="Movie Trailer"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </section>
          </section>
        </div>
        {movieCredits?.cast && 
        <section aria-labelledby='cast-heading' className="mt-12">
          <h2 className="text-2xl font-semibold mb-4" id='cast-heading'>Cast</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {movieCredits?.cast?.slice(0,12)?.map(actor => (
              <div key={actor?.id} className="text-center">
                <img
                  src={IMG_CDN_URL + actor?.profile_path}
                  alt={actor?.name}
                  className="w-full rounded-lg shadow-lg mb-2"
                />
                <p className="font-semibold">{actor?.name}</p>
                <p className="text-sm text-gray-400">{actor?.character}</p>
              </div>
            ))}
          </div>
        </section>
}
      </div>
      </main>
    </div>
  );
};

export default MoviePage;