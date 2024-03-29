import React, { useContext, useState } from "react";
import { MovieContext } from "./MovieContext";

function MovieCard({
  movieObj,
  title,
  poster_path, 
  onOpenModal,  
  isModalOpen
}) {

  const {watchList, handleAddToWatchList, handleRemoveFromWatchList} = useContext(MovieContext);

  function isContain(movieObj) {
    for (let i = 0; i < watchList.length; i++) {
      if (movieObj.id === watchList[i].id) {
        return true;
      }
    }
    return false;
  }

  const handleCardClick = () => {
    onOpenModal(movieObj);
  }

  const handleAddToWatchListClick = (event) => {
    event.stopPropagation(); // Stops the event from propagating
    handleAddToWatchList(movieObj);
  }

  const handleRemoveFromWatchListClick = (event) => {
    event.stopPropagation(); // Stops the event from propagating
    handleRemoveFromWatchList(movieObj);
  }
  
  return (
    <>
    <div onClick={handleCardClick}
      className="flex flex-col justify-between hover:scale-[0.9] duration-300 justify-center items-end h-64 w-40 md:w-1/2 lg:w-1/4 xl:w-1/6 rounded-lg overflow-hidden bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${poster_path})`,
      }}
    >
      {isContain(movieObj) ? (
        <div
          onClick={handleRemoveFromWatchListClick}
          className="text-xl m-2 rounded-lg py-1 bg-slate-950/50 cursor-pointer"
        >
          &#10060;  
        </div>
      ) : (
        <div
          onClick={handleAddToWatchListClick}
          className="text-xl m-2 rounded-lg py-1 bg-slate-950/50 cursor-pointer"
        >
          &#128525;
        </div>
      )}

      <div className="text-xl text-white py-1 bg-slate-950/50 w-full text-center">
        {title}
      </div>
    </div>
</>
  );
}

export default MovieCard;
