import React from "react";

// import {onePiecefilter, twoPiecefilter} from '../../functions/filter';
import "./filter.css";

export class Filter extends React.Component {
  countProducts() {
    let products = this.props.product;
    for (let i = 0; i <= products.length; i++) {
      i = products.length;
      return <span>{i} ITEM(S)</span>;
    }
  }
  render() {
    return (
      <div className="container">
        <div className="item-count-container">
          <span>{this.countProducts()}</span>
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
}
