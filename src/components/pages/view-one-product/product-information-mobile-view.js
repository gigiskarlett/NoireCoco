import React from "react";

import { Button } from "../../reusable/button";
import { ProductImagesMobileView } from "./product-images-mobile-view";

import "./product-information-mobile-view.css";

//Renders information about product
export class ProductInformationMobileView extends React.Component {
  replaceForNewLine() {
    let details = this.props.product.details;
    console.log(details);
    if (this.props.product.details) {
      const regex = /[.]/g;
      const subst = `<li className="mobile-details-list">`;

      const detailsResult = details.replace(regex, subst);

      return (
        <li
          className="details"
          dangerouslySetInnerHTML={{ __html: detailsResult }}
        />
      );
    }
  }
  render() {
    return (
      <div className="mobile-product-information">
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

          {this.replaceForNewLine()}
        </div>
        <Button text="BUY NOW" />
      </div>
    );
  }
}

//pass state+props from db item
