import React from 'react'
import Pagination from './Pagination'
import MovieCard from './MovieCard'
import { useState, useEffect } from 'react'
import axios from 'axios'

function TrendingMovies() {

  const [movies, setMovies] = useState([]);

  useEffect(()=> {
    axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=b379b6c371be86da8a049d0a8fa2e7eb')
    .then(function(response) {
      setMovies(response.data.results);
    })
  },[])

  // console.log(movies);

  if (movies.length === 0) {
    return <>...Loading</>
  }

  return (
    <>
        <div className='text-center text-lg font-bold my-5'>Trending movies</div>
        <div className='flex flex-wrap justify-evenly gap-4 m-4'>
          {
            movies.map((moviesObj)=> {
              return <MovieCard key={moviesObj.id} title={moviesObj.title} poster_path={moviesObj.poster_path}/>
            })
          }
        </div>
        <Pagination/>
    </>
  )
}

export default TrendingMovies
