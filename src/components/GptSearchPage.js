import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import bgimage from "../bgimage.png"

const GptSearchPage = () => {
  return (
    <div>
      <div className='fixed -z-10'>
       <img src={bgimage} alt='bgimage'></img>
       </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
      </div>
  )
}

export default GptSearchPage