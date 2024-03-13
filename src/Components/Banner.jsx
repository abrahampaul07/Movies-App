import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function Banner() {
  const [movieObj, setMovieObj] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=b379b6c371be86da8a049d0a8fa2e7eb"
      )
      .then(function (response) {
        // handle success
        // console.log(response);
        let movies = response.data.results;
        // console.log(movies);
        let randomMovie = movies[Math.floor(Math.random() * 20)];
        // console.log(randomMovie);
        setMovieObj(randomMovie);
      });
  }, []);

  if (movieObj.backdrop_path === undefined) {
    return <>...Loading</>
  }

  return (
    <div
      className="h-[70vh] bg-cover bg-center flex items-end"
      style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${movieObj.backdrop_path})`}}
    >
      <div className="text-white py-1 bg-slate-950/50 w-full text-center">
        {movieObj.title}
      </div>
    </div>
  );
}

export default Banner;
