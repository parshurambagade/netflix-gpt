import React from 'react'
import { NETFLIX_BG } from '../utils/constants'
import GptSearbar from '../components/GptSearbar'

const GptSearchPage = () => {
  return (
    <div>
        <img src={NETFLIX_BG} alt="netflix background" className='absolute'/>
        <div className='absolute z-10 flex justify-center w-full py-[20vh]'>
        <GptSearbar />
        </div>
    </div>
  )
}

export default GptSearchPage