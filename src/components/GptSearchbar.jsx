import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { languageText } from '../utils/languages';
import OpenAI from "openai";
import {  addMovieNames, addMovies } from '../redux/gptSlice';
import { API_OPTIONS, TMDB_GET_MOVIES_BY_KEYWORD } from '../utils/constants';

const GptSearchbar = () => {
    const searchQuery = useRef(null);
    const lang = useSelector(state => state.config.lang);
    const dispatch = useDispatch();

    
  
  const getTmdbMovies = async (movieName) => {
    const data = await fetch(TMDB_GET_MOVIES_BY_KEYWORD + movieName, API_OPTIONS);
    const json = await data.json();
    return json.results.filter(movie => movie.poster_path);
  }
    const handleSearchClicked = () => {
        getGptResults();
    }

    const openai = new OpenAI({
      apiKey: import.meta.env.VITE_GPT_API_KEY, // This is the default and can be omitted
      dangerouslyAllowBrowser: true
    });

    const prompt = "Act as a movie recommandation system, Give only the names of 5 movies that are related to the provided topic, dont give numbering, only give names comma separated. (result shlould look like: 'bhool bhooliya, aparichit, jadoo, raaz, bhoot') topic is: "

    const getGptResults = async () => {
      const completion = await openai.chat.completions.create({
        messages: [{ role: "user", content: prompt + searchQuery.current.value }],
          model: "gpt-3.5-turbo",
      });
  
        const movieNames = completion.choices[0]?.message?.content?.split(',');
        dispatch(addMovieNames(movieNames));
        const promiseArray = movieNames.map(movie => getTmdbMovies(movie));
        const results = await Promise.all(promiseArray);
        dispatch(addMovies(results));
        
    }


  return (
    <div className='bg-black text-white p-2 lg:p-4 w-full lg:w-1/2' >
        <form onSubmit={(e) => e.preventDefault()} className='flex gap-3 w-full'>
            <input type="text" name="search" ref={searchQuery} placeholder={languageText?.gptSearchPageText[lang]?.placeHolder} className='w-9/12 lg:w-4/5 px-4 py-2 text-black text-sm lg:text-base' autoComplete='off'/>
            <button className='bg-red-800 hover:bg-opacity-90 text-white px-4 py-2 text-sm lg:text-base w-3/12 lg:w-1/5' onClick={handleSearchClicked}>{languageText?.gptSearchPageText[lang]?.buttonText}</button>
        </form>
    </div>
  )
}

export default GptSearchbar