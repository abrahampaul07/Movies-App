import React from 'react'

function TrendingMovies() {
  return (
    <>
        <div className='text-center text-lg font-bold my-5'>Trending movies</div>
        <div className='flex flex-wrap justify-evenly gap-4 m-4'>
        <div className="flex justify-center items-end h-48 w-32 rounded-lg overflow-hidden bg-[url('https://cdn.europosters.eu/image/hp/66923.jpg')] bg-cover bg-no-repeat">
            <div className='text-sm text-white py-1 bg-slate-950/50 w-full text-center'>
                Batman
            </div>
        </div>
        </div>
    </>
  )
}

export default TrendingMovies
