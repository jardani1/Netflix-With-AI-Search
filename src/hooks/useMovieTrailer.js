import { useDispatch, useSelector } from "react-redux";
import { Api_Options } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";


const useMovieTrailer = ({movieId}) => { // destruction on the fly
 
    const dispatch =useDispatch(); // always write the hooks on the top
    // console.log(movieId);

      
    const trailerVideo = useSelector((store) => store.movies.trailerVideo);
    
    const getMoviesVideos = async () => {

        const data = await fetch(
          "https://api.themoviedb.org/3/movie/"+movieId +
           "/videos?language=en-US",
          Api_Options
        );
        const json = await data.json();
        // console.log(json);
    
        const filterData = json?.results?.filter((video) => video?.type === "Trailer");
        // const trailer = filterData[0];
        const trailer = filterData?.length ? filterData[0] : json?.results[0]; // if there isnt any video of trailer then take the first video from the array
        // console.log(trailer);

        dispatch(addTrailerVideo(trailer));
      };
    
      useEffect(() => {
        !trailerVideo && getMoviesVideos();},
        []);
}

export default useMovieTrailer