import React from "react";

function MovieCard({title, poster_path}) {

  return (
    <div className="flex justify-center items-end h-64 w-48 rounded-lg overflow-hidden bg-cover bg-no-repeat"
    style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${poster_path})`}}
    >
      {/* <div>&#128525;</div> */}
      <div className="text-xl text-white py-1 bg-slate-950/50 w-full text-center">
        {title}
      </div>
    </div>
  );
}

export default MovieCard;
