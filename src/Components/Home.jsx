import React from 'react'
import Banner from './Banner'
import Pagination from './Pagination'
import TrendingMovies from './TrendingMovies'

function Home() {
  return (
    <>
    <Banner/>
    <TrendingMovies/>
    <Pagination/>
    </>
  )
}

export default Home