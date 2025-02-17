import React from 'react'
import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {


    const movies = useSelector((store)=>store.movies?.nowPlayingMovies);


    if (!movies) return;
    
    console.log(movies);
        
    // console.log("hello anyone") 11 13 16  18 2 
        
    const {original_title, overview, id }=movies[16];
    // console.log(id);



  return (
    <div >
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer