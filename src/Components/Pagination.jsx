import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

function Pagination() {

  const {pageNo, handleNext, handlePrev} = useContext(MovieContext);

  return (
    <>
      <div className="flex gap-5 bg-slate-400 m-2 p-2 justify-center">
        <div className="cursor-pointer" onClick={handlePrev}>
          <i className="fa-solid fa-arrow-left"></i>
        </div>
        <div className="font-bold">{pageNo}</div>
        <div className="cursor-pointer" onClick={handleNext}>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </>
  );
}

export default Pagination;
