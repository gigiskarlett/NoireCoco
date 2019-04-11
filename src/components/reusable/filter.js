import React from "react";

import "./filter.css";

//Filter bar that displays amount of products and shows products being sorted from newest to oldest addition
export class Filter extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="item-count-container">
          <span>{this.props.products.length} ITEM(S)</span>
        </div>
        <div className="right">
          <p className="sortBy">SORT BY</p>
          <div className="drop-down">
            <button className="dropbtn">What's New</button>
          </div>
        </div>
      </div>
    );
  }
}
