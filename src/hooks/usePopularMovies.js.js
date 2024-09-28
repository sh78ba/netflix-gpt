
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/constants';
import { useEffect } from 'react';

const usePopularMovies = () => {

    const dispatch=useDispatch();

    const getPopular=async()=>{
  
      const data=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
  
      const json= await data.json();
      console.log(json.results);
      dispatch(addPopularMovies(json.results));
        
    }
  useEffect(()=>{
    getPopular();
  },[])
  
}

export default usePopularMovies;