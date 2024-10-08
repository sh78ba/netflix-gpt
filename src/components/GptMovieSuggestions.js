import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from "../components/MovieList"

const GptMovieSuggestions = () => {
  const gpt=useSelector(store=>store.gpt);
  const movieResults=gpt.movieResults;
  const movieNames=gpt.movieNames;

  if(movieNames===null){
    return null;
  }

  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-90'>
   
    <div>
      {
        movieNames.map((movieName,index)=>(
<MovieList key={movieName} title={movieName} movies={movieResults[index]}/>
        ))
      }

    </div>
    </div>
  )
}

export default GptMovieSuggestions