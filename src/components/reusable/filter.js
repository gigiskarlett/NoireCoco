import React from "react";

import "./filter.css";

export function Filter(props) {
  return (
    <div className="container">
      <div className="left">
        <input
          type="image"
          src="https://i.ibb.co/BKHV7n4/icons8-slider-96-2.png"
          className="filter-icon"
          alt="adjust icon"
        />
        <p className="filter-instructions">SHOW FILTER</p>
      </div>
      <div className="item-count-container">
        <span>100 items</span>
      </div>
      <div className="right">
        <p className="sortBy">SORT BY</p>
        <div className="drop-down">
          <button className="dropbtn">
            What's new
            <img
              className="downward-arrow"
              src="https://i.ibb.co/rfFd82D/icons8-chevron-down-filled-100-1.png"
              alt="downward arrow"
            />
          </button>
          <div className="dropdown-content">
            <a href="#">Price high to low</a>
            <a href="#">Price low to high</a>
          </div>
        </div>
      </div>
    </div>
  );
}
