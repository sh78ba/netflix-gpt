import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import bgimage from "../bgimage.webp"

const GptSearchPage = () => {
  return (
    <>
     <div className='fixed -z-10'>
       <img src={bgimage} alt='bgimage' className='h-screen md:h-full w-full object-cover'></img>
       </div>
       <div className=''>
     
      <GptSearchBar/>
      <GptMovieSuggestions/>
      </div>
       </>
    
  )
}

export default GptSearchPage
