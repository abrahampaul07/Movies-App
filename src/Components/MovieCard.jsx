import React from "react";

function MovieCard({title, poster_path}) {

  return (
    <div className="flex flex-col justify-between hover:scale-[0.9] duration-300 justify-center items-end h-64 w-48 rounded-lg overflow-hidden bg-cover bg-no-repeat"
    style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${poster_path})`}}
    >
      {/* <div className="text-xl m-2 rounded-lg py-1 bg-slate-950/50 cursor-pointer">&#128525;</div> */}
      <div className="text-xl m-2 rounded-lg py-1 bg-slate-950/50 cursor-pointer">&#10060;</div>
      <div className="text-xl text-white py-1 bg-slate-950/50 w-full text-center">
        {title}
      </div>
    </div>
  );
}

export default MovieCard;
