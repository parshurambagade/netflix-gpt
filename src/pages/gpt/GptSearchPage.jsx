/* eslint-disable react/prop-types */
import { NETFLIX_BG } from "../../utils/constants";
import { useSelector } from "react-redux";
import MoviesCards from "../../components/MoviesCards";
import GptSearchbar from "./GptSearchbar";
import Header from "../../layouts/Header";
import SearchResultsShimmer from "./SearchResultsShimmer";

const GptSearchPage = () => {
  const {movies, loading, error, movieNames} = useSelector((state) => state.gpt);

  return (
    <div className="min-h-screen ">
      <Header />
      <img
        src={NETFLIX_BG}
        alt="netflix background"
        className="fixed top-0 -z-20 object-cover h-screen lg:w-full"
      />
      <main className="absolute z-10 flex justify-center w-full py-8 lg:py-[12vh] gap-20 flex-col">
        <div className="flex justify-center px-4 lg:px-0">
          <GptSearchbar />
        </div>
        <section aria-label="GPT Recommended Movies" >
        {loading === true ? <SearchResultsShimmer /> : error===true ? <p className="text-red-600 text-lg font-bold">Something went wrong!</p> : <SearchResults movieNames={movieNames} movies={movies} />}
        </section>
      </main>
    </div>
  );
};

const SearchResults = ({movieNames, movies}) => {
  if(!movieNames?.length) return;
  return (
      <div className={`bg-black bg-opacity-70 py-4 lg:py-8 px-4 mx-2 -my-16 sm:-my-8 lg:mx-20`}>
        {movieNames?.map((movie, i) => (
          <MoviesCards key={i} name={movie} movies={movies[i]} />
        ))}
      </div>
    )
}

export default GptSearchPage;
