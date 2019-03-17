import React from "react";

import { Button } from "../../reusable/button";
import {ProductImagesMobileView} from "./product-images-mobile-view";

import "./product-information-mobile-view.css";

//Renders information about product
export class ProductInformationMobileView extends React.Component {
  render() {
    return (
      <div className="product-information">
        <h2 className="product-name">
          <img
            className="heart"
            src={"https://i.ibb.co/CbBVXLq/imageedit-16-2644387967.png"}
            alt="heart"
          />
        {this.props.product.name}
        </h2>
        <h4 className="price">${this.props.product.price}</h4>
        <ProductImagesMobileView product={this.props.product} />
        <div className="product-details">
          <h3 className="details-heading">DETAILS</h3>
          <hr color="#FF70BD" width="80%" />
          <p className="details">
           {this.props.product.details}
          </p>
        </div>
        <Button />
      </div>
    );
  }
}

//pass state+props from db item