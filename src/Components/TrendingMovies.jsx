import React from "react";
import Pagination from "./Pagination";
import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";
import axios from "axios";

function TrendingMovies() {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [watchList, setWatchList] = useState([]);

  const handleAddToWatchList = (id) => {
    const newWatchList = [...watchList];
    newWatchList.push(id);
    // console.log(newWatchList);
    localStorage.setItem('watchList',JSON.stringify(newWatchList));
    setWatchList(newWatchList);
  };

  const handleRemoveFromWatchList = (id) => {
    const newWatchList = watchList.filter((movieId)=> {
      return id!==movieId;
    })
    setWatchList(newWatchList);
  };

  const handlePrev = function () {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    }
  };

  const handleNext = function () {
    setPageNo(pageNo + 1);
  };

  // console.log(pageNo);

  useEffect(() => {
    let watchListFromLocalStorage = JSON.parse(localStorage.getItem('watchList'));
    setWatchList(watchListFromLocalStorage);
  })

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=b379b6c371be86da8a049d0a8fa2e7eb&page=${pageNo}`
      )
      .then(function (response) {
        setMovies(response.data.results);
      });
  }, [pageNo]); // it will make sure to execute callback in mounting as well as updation of pageNo state

  // console.log(movies);

  if (movies.length === 0) {
    return <>...Loading</>;
  }

  return (
    <>
      <div className="text-center text-lg font-bold my-5">Trending movies</div>
      <div className="flex flex-wrap justify-evenly gap-4 m-4">
        {movies.map((moviesObj) => {
          return (
            <MovieCard
              key={moviesObj.id}
              id={moviesObj.id}
              title={moviesObj.title}
              poster_path={moviesObj.poster_path}
              watchList={watchList}
              handleAddToWatchList={handleAddToWatchList}
              handleRemoveFromWatchList={handleRemoveFromWatchList}
            />
          );
        })}
      </div>
      <Pagination
        pageNo={pageNo}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
    </>
  );
}

export default TrendingMovies;
