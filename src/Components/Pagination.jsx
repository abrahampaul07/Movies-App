import React from "react";

function Pagination({pageNo, handlePrev, handleNext}) {

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
