import React, { useRef } from 'react'
import { useSelector } from 'react-redux';
import { languageText } from '../utils/languages';

const GptSearbar = () => {
    const searchQuery = useRef(null);
    const lang = useSelector(state => state.config.lang);
    
    const handleSearchClicked = () => {
        console.log(searchQuery.current.value)
    }
  return (
    <div className='bg-black text-white p-4 w-1/2' >
        <form onSubmit={(e) => e.preventDefault()} className='flex gap-3 w-full'>
            <input type="text" name="search" ref={searchQuery} placeholder={languageText?.gptSearchPageText[lang]?.placeHolder} className='w-4/5 px-4 py-2 text-black '/>
            <button className='bg-red-800 hover:bg-opacity-90 text-white px-4 py-2  w-1/5' onClick={handleSearchClicked}>{languageText?.gptSearchPageText[lang]?.buttonText}</button>
        </form>
    </div>
  )
}

export default GptSearbar