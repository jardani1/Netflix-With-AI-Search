
import Header from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecoundryContainer from "./SecoundryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";
  //
  //   main container 
  //   movie running background
  //   movie title

  //   secoundry container 
  //   movie list * n
  //   movie cards * n */}

const Browse = () => {
const showGptSearch = useSelector(store=>store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
 
  return (
    <div>
    <Header/>
    {showGptSearch ? (<GptSearch/>):(<><MainContainer/>

    <SecoundryContainer/></>)}
    
    </div>
  )}

export default Browse