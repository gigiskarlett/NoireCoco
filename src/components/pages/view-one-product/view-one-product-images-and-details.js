import React from "react";

import { Button } from "../../reusable/button";
import { ViewOneProductImages } from "./view-one-product-images.js";

import "./view-one-product-images-and-details.css";

//Renders information about product
export class ViewOneProductImagesAndDetails extends React.Component {
  //At every dot it creates a new line
  replaceForNewLine() {
    let details = this.props.product.details;
    if (this.props.product.details) {
      const regex = /[.]/g;
      const subst = `<p className="details-list">`;

      const detailsResult = details.replace(regex, subst);

      return (
        <div
          className="details"
          dangerouslySetInnerHTML={{ __html: detailsResult }}
        />
      );
    }
  }
  render() {
    return (
      <div className="container-product-information">
        <h2 className="product-name">
          <img
            className="heart"
            src={"https://i.ibb.co/CbBVXLq/imageedit-16-2644387967.png"}
            alt="heart"
          />
          {this.props.product.name}
        </h2>
        <h4 className="price">${this.props.product.price}</h4>
        <ViewOneProductImages product={this.props.product} />
        <div className="product-details">
          <h3 className="details-heading">DETAILS</h3>
          <hr color="#FF70BD" width="80%" />

          {this.replaceForNewLine()}
        </div>
        <a
          target="_blank"
          href={this.props.product.url}
          className="link-button"
        >
          <Button text="BUY NOW" />
        </a>
      </div>
    );
  }
}
