import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies.js";
import GptSearch from "./GptSearchPage.js";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : 
        (<>
          <MainContainer />
          <SecondaryContainer />
        </>)
      }

      {/*
        Main Container
            -Video Background
            -Video Title
        Secondary Container
            -Movie List* n
              -cards* n
        */}
    </div>
  );
};

export default Browse;
