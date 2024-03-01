import React from 'react'

function Pagination() {
  return (
    <>
    <div className='flex gap-5 bg-slate-400 m-2 p-2 justify-center'>
        <div className='cursor-pointer'><i className="fa-solid fa-arrow-left"></i></div>
        <div className='font-bold'>1</div>
        <div className='cursor-pointer'><i className="fa-solid fa-arrow-right"></i></div>
    </div>
    </>
  )
}

export default Pagination

