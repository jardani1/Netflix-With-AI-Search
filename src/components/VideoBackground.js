import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";



// const VideoBackground = ({ movieId }) => {
//   const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

//   useMovieTrailer(movieId);

//   return (
//     <div className=" w-screen -my-48 ">
//       <div className="pointer-events-none"></div>
//       <iframe
//         className="w-screen aspect-video "
//         src={
//           "https://www.youtube.com/embed/" +
//           trailerVideo?.key +
//           "?&autoplay=1&mute=1&loop=1"
//         }
//         title="YouTube video player"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//       ></iframe>
//     </div>
//   );
// };
// export default VideoBackground;




const VideoBackground = (movieId) => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  // console.log("VideoBackground");
  // console.log(movieId);

  // I have done modular coding this is also known as seperation of concerns
   useMovieTrailer(movieId); // this custom hook fetching the trailer video and updating the store with the the trailer video data/key

  return (
    
    <div className="w-screen relative -mt-20 z-5">
         
      <iframe
        className=" w-screen aspect-video "
     
        src={"https://www.youtube.com/embed/" + trailerVideo?.key+ "?autoplay=1&mute=1&si=-YEY_eSYFq0ZMWpx"}
        // src={"https://www.youtube.com/embed/" + trailerVideo?.key+ "?&si=-YEY_eSYFq0ZMWpx"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       
      ></iframe>
   
    </div>
    // console.log("video")
  );




};

export default VideoBackground;
