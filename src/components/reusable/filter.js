import React from "react";

import "./filter.css";

export class Filter extends React.Component {
  // sortDescOrder = this.props.product.sort(
  //   (a, b) => parseFloat(a.price) - parseFloat(b.price)
  // );

  //action -> asc || desc -> add sort to reducer //

  render() {
    return (
      <div className="container">
        <div className="item-count-container">
          <span>{this.props.products.length} ITEM(S)</span>
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
              <a href="#" onClick={e => this.sortDescOrder()}>
                Price high to low
              </a>
              <a href="#">Price low to high</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
