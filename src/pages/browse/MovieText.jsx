import { FaPlay } from "react-icons/fa";
import { ImInfo } from "react-icons/im";
import { useSelector } from 'react-redux';
import { languageText } from '../../utils/languages';

const MovieText = ({title, overview}) => {
  const lang = useSelector(state => state.config.lang);

  return (
    <div className='-z-6 w-full aspect-video absolute px-4  md:px-8 lg:px-20 pt-[35%] md:pt-[20%] xl:pt-[15%] 2xl:pt-[20%] flex  flex-col gap-2 md:gap-4 bg-gradient-to-l md:bg-gradient-to-r from-black text-white items-end md:items-start'>
        {/* text container  */}
        <div className='flex flex-col gap-3  w-1/2 sm:w-max md:w-2/4 2xl:w-1/3'>
        <h1 className=' text-wrap text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-extrabold text-right md:text-left mx-2 md:mx-0'>{title}</h1>
        <p className='hidden md:flex md:text-base xl:text-lg'>{overview}</p>
        </div>

        {/* buttons container  */}
        <div className='flex w-1/2 sm:w-max md:w-2/4 xl:w-1/3 gap-2 sm:gap-4 justify-end sm:justify-center md:justify-start md:flex-row'>
            <div className='cursor-pointer bg-white hover:bg-opacity-80 py-1 lg:py-3 px-3 md:mr-0 lg:px-6 text-black rounded-lg text-xs md:text-sm lg:text-lg xl:text-base flex gap-1 lg:gap-2 items-center justify-center  '>
                <span className='lg:text-xl'><FaPlay /></span>{languageText?.browsePage[lang]?.play}</div>
            <div className='cursor-pointer bg-gray-700 bg-opacity-80 hover:bg-opacity-100 py-1 lg:py-3 px-3 lg:px-6 text-white text-xs md:text-sm lg:text-lg xl:text-base rounded-lg flex  gap-1 lg:gap-2 items-center justify-center md:mr-0 '>
            <span className='text-xs lg:text-2xl'><ImInfo /></span>{languageText?.browsePage[lang]?.moreInfo}</div>
        </div>
    </div>
  )
}

export default MovieText