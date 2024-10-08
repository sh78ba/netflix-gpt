import React from 'react'
import { IMAGE_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath)return null;
   
  return (
    <div className='w-36 md:w-48 pr-4 hover:scale-75  transition-all duration-500'>

        <img src={IMAGE_CDN_URL+posterPath} alt='Movie Card' />
    </div>
  )
}

export default MovieCard