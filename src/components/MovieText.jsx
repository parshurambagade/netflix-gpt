import React from 'react'
import { FaPlay } from "react-icons/fa";
import { ImInfo } from "react-icons/im";
import { useSelector } from 'react-redux';
import { languageText } from '../utils/languages';

const MovieText = ({title, overview}) => {
  const lang = useSelector(state => state.config.lang);

  return (
    <div className='w-full aspect-video absolute px-4  lg:px-20 pt-[25%] lg:py-96 flex  flex-col gap-4 bg-gradient-to-l lg:bg-gradient-to-r from-black text-white items-end lg:items-start'>
        {/* text container  */}
        <div className='flex flex-col gap-3 w-1/3'>
        <h1 className='text-3xl lg:text-6xl font-extrabold text-right lg:text-left mx-2 lg:mx-0'>{title}</h1>
        <p className='hidden lg:flex'>{overview}</p>
        </div>

        {/* buttons container  */}
        <div className='flex gap-4 justify-start lg:flex-row flex-col-reverse'>
            <div className='cursor-pointer bg-white hover:bg-opacity-80 py-1 lg:py-3 px-3 mr-4 lg:mr-0 lg:px-6 text-black rounded-lg text-sm lg:text-lg flex gap-1 lg:gap-2 items-center justify-center '>
                <span className='lg:text-xl'><FaPlay /></span>{languageText?.browsePage[lang]?.play}</div>
            <div className='cursor-pointer bg-gray-700 bg-opacity-80 hover:bg-opacity-100 py-1 lg:py-3 px-3 lg:px-6 text-white text-sm lg:text-lg rounded-lg lg:flex hidden gap-1 lg:gap-2 items-center ustify-center '>
            <span className='text-sm lg:text-2xl'><ImInfo /></span>{languageText?.browsePage[lang]?.moreInfo}</div>
        </div>
    </div>
  )
}

export default MovieText