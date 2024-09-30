import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import bgimage from "../bgimage.png"

const GptSearchPage = () => {
  return (
    <div>
      <div className='absolute -z-10'>
       <img src={bgimage} alt='bgimage'></img>
       </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
      </div>
  )
}

export default GptSearchPage