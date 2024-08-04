import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

// MovieList - popular
// MovieCards*n
// MovieList - Now Playing
// MovieList - Trending
// MovieList - Horror

const SecoundryContainer = () => {
  const movies = useSelector((store) => store.movies);
  if (!movies) return;
  // console.log(movies);

  return (
    <div className="bg-black">
      <div className="-mt-[265px] pl-2 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Upcomig movies"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecoundryContainer;
