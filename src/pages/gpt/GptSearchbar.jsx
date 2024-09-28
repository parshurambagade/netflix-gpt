import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { languageText } from "../../utils/languages";
import { addMovieNames, addMovies } from "../../redux/gptSlice";
import {
  CORS_ORIGIN_PROXY,
  GPT_PROMPT,
  TMDB_GET_MOVIES_BY_KEYWORD,
} from "../../utils/constants";
import { GoogleGenerativeAI } from "@google/generative-ai";

const GptSearchbar = () => {
  const searchQuery = useRef(null);
  const lang = useSelector((state) => state.config.lang);
  const dispatch = useDispatch();

  const getTmdbMovies = async (movieName) => {
    try {
      const data = await fetch(
        `${CORS_ORIGIN_PROXY}${encodeURIComponent(
          `${TMDB_GET_MOVIES_BY_KEYWORD + movieName}`
        )}`
      );
      const json = await data.json();
      return JSON.parse(json.contents)?.results?.filter(
        (movie) => movie.poster_path
      );
    } catch (err) {
      console.error(err);
    }
  };
  const handleSearchClicked = () => {
    getGptResults();
  };

  const getGptResults = async () => {
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(
      GPT_PROMPT + searchQuery.current.value
    );
    const movieNames =
      result.response.candidates[0].content.parts[0].text.split(",");
    dispatch(addMovieNames(movieNames));
    const promiseArray = movieNames.map((movie) => getTmdbMovies(movie));
    const results = await Promise.all(promiseArray);
    dispatch(addMovies(results));
  };

  return (
    <div className="bg-black text-white p-2 lg:p-4 w-full lg:w-1/2">
      <form onSubmit={(e) => e.preventDefault()} className="flex gap-3 w-full">
        <input
          type="text"
          name="search"
          ref={searchQuery}
          placeholder={languageText?.gptSearchPageText[lang]?.placeHolder}
          className="w-9/12 lg:w-4/5 px-4 py-2 text-black text-sm lg:text-base"
          autoComplete="off"
        />
        <button
          className="bg-red-800 hover:bg-opacity-90 text-white px-4 py-2 text-sm lg:text-base w-3/12 lg:w-1/5"
          onClick={handleSearchClicked}
        >
          {languageText?.gptSearchPageText[lang]?.buttonText}
        </button>
      </form>
    </div>
  );
};

export default GptSearchbar;
