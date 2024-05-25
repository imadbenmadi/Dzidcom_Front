// CustomPagination.js

import React from "react";
import { BiArrowFromLeft } from "react-icons/bi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const CustomPagination = ({
  totalSlides,
  activeIndex,
  onPrevClick,
  onNextClick,
}) => {
  return (
    <div className="custom-pagination">
      <button onClick={onPrevClick} className="pagination-arrow prev">
        <IoIosArrowBack style={{ fontSize: "1.7rem", fontWeight: "bold" }} />
      </button>
      {Array.from({ length: totalSlides }).map((_, index) => (
        <span
          key={index}
          className={`pagination-dot ${index === activeIndex ? "active" : ""}`}
        ></span>
      ))}
      <button onClick={onNextClick} className="pagination-arrow next">
        <IoIosArrowForward style={{ fontSize: "1.7rem", fontWeight: "bold" }} />
      </button>
    </div>
  );
};

export default CustomPagination;
