import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Api_Options } from "../utils/constants";
import { addnowPlayingMovies } from "../utils/moviesSlice";


const useNowPlayingMovies=()=>{
    const dispatch = useDispatch();

    const nowPlayingMovies = useSelector(
      (store) => store.movies.nowPlayingMovies
    );

    const getnowPlayingMovies = async() =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', Api_Options);
  
      const json = await data.json();
      // console.log(json.results);
      dispatch(addnowPlayingMovies(json.results));
    }
  
    useEffect(()=>{
      !nowPlayingMovies && getnowPlayingMovies();
    },[]);
};

export default useNowPlayingMovies;