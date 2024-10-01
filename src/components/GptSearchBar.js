import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openAi from "../utils/openAi";
import { API_OPTIONS } from "../utils/constants";
import {addGptMovieResults} from "../utils/gptSlice"

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch=useDispatch();

  const searchMovieTMDB=async(movie)=>{
    const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS)

    const json=await data.json();
    return json.results;
  }

  const handleGPTSearchClick = async () => {
    //console.log()

    const query =
      "Act as a movie recommendation system and suggest some movies for the query " +
      searchText.current.value +
      " only give me names of 5 movies, comma separated like the example result given ahead . Example Results: Gaddar, Sholay, Don, Golmaal , Koi Mil Gaya";
    //make api call to gpt
    const gptResults = await openAi.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });

    //console.log(gptResults.choices[0]?.message?.content);

    //if gpt result fails return error page

    const gptMovies=gptResults.choices[0]?.message?.content.split(",");

    const promiseArray=gptMovies.map(movie=>searchMovieTMDB(movie));

    const tmdbresults=await Promise.all(promiseArray);
    dispatch(addGptMovieResults({movieNames:gptMovies,movieResults:tmdbresults}))
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="p-4 m-4 col-span-9 outline-none"
          ref={searchText}
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          onClick={handleGPTSearchClick}
          className="py-2  m-4 px-4 bg-red-700 text-white  col-span-3 "
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
