import React from 'react'
import { IMG_CDN_URL } from "../utils/constants"

const MovieCard = ({posterPath}) => {
  if (!posterPath) return null;
  return (
    <div className="w-44 h-48 pr-2 overflow-y-hidden">
        <img alt="Image-poster" src={ IMG_CDN_URL+posterPath}></img>
    </div>
  )
}

export default MovieCard