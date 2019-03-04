import React from "react";

import { Button } from "../reusable/reusable-button";
import {ProductImagesMobileView} from "../reusable/product-images-mobile-view";

import "./product-information-mobile-view.css";

//Renders information about product
export class ProductInformationMobileView extends React.Component {
  render() {
    return (
      <div className="product-information">
        <h2 className="product-name">
          <img
            className="heart"
            src="https://i.ibb.co/CbBVXLq/imageedit-16-2644387967.png"
            alt="heart"
          />
          STRAPPY HIGH RISE THONG CUT BIKINI BOTTOMS IN WHITE
        </h2>
        <h4 className="price">$40.00</h4>
        <ProductImagesMobileView />
        <h3 className="colour-heading">COLOUR</h3>
        <p className="colour">WHITE</p>
        <div className="product-details">
          <h3 className="details-heading">DETAILS</h3>
          <p className="details">
            Fabric: 80% chinlon,20% spandex Design: Falbala design Tie at back
            About Cup Style: Padding bra Garment Care: Hand Wash and Hang Dry.
            Recommend with Cold Water. Do not Use Bleach.
          </p>
        </div>
        <Button />
      </div>
    );
  }
}
