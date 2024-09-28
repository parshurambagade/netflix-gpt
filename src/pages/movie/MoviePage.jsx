import { useParams } from 'react-router-dom';
import useMovieDetails from '../../hooks/useMovieDetails';
import { useSelector } from 'react-redux';
import { IMG_CDN_URL } from '../../utils/constants';

const MoviePage = () => {

  const {movieId} = useParams();

  const movie = useSelector(state => state.movies.movieDetails);

  useMovieDetails(movieId);
  

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
        <img
          src={IMG_CDN_URL + movie.backdrop_path}
          alt={movie.title}
          className="w-full h-[70vh] object-cover"
        />
        <div className="absolute bottom-0 left-0 p-6 z-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{movie.title}</h1>
          <p className="text-lg md:text-xl mb-4">{movie.tagline}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <img
              src={`${IMG_CDN_URL + movie.poster_path}`}
              alt={movie.title}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-lg mb-6">{movie.overview}</p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Release Date</h3>
                <p>{movie.release_date}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Runtime</h3>
                <p>{movie.runtime} minutes</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Rating</h3>
                <p>{movie.vote_average.toFixed(1)} / 10</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Genres</h3>
                <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Trailer</h2>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.youtube.com/embed/N5uPZ7ocsqA"
                  title="Movie Trailer"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Cast</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {movie.credits.cast.map(actor => (
              <div key={actor.id} className="text-center">
                <img
                  src={actor.profile_path}
                  alt={actor.name}
                  className="w-full rounded-lg shadow-lg mb-2"
                />
                <p className="font-semibold">{actor.name}</p>
                <p className="text-sm text-gray-400">{actor.character}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MoviePage;