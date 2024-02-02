import React from 'react'
import { FaPlay } from "react-icons/fa";
import { ImInfo } from "react-icons/im";
import { useSelector } from 'react-redux';
import { languageText } from '../utils/languages';

const MovieText = ({title, overview}) => {
  const lang = useSelector(state => state.config.lang);

  return (
    <div className='w-full aspect-video absolute px-20 py-64 flex flex-col gap-4 bg-gradient-to-r from-black text-white'>
        {/* text container  */}
        <div className='flex flex-col gap-3 w-1/3'>
        <h1 className='text-6xl font-extrabold'>{title}</h1>
        <p>{overview}</p>
        </div>

        {/* buttons container  */}
        <div className='flex gap-4 justify-start'>
            <div className='cursor-pointer bg-white hover:bg-opacity-80 py-3 px-6 text-black rounded-lg flex gap-2 items-center'>
                <span className='text-xl'><FaPlay /></span>{languageText?.browsePage[lang]?.play}</div>
            <div className='cursor-pointer bg-gray-700 bg-opacity-80 hover:bg-opacity-100 py-3 px-6 text-white rounded-lg flex gap-2 items-center'>
            <span className='text-2xl'><ImInfo /></span>{languageText?.browsePage[lang]?.moreInfo}</div>
        </div>
    </div>
  )
}

export default MovieText