import React from "react";

// import {newLine, replaceForNewLine} from '../../../functions/regex';
import { Button } from "../../reusable/button";
import "./product-information-desktop-view.css";

//Renders information about product
export class ProductInformationDesktopView extends React.Component {
  replaceForNewLine() {
    let details = this.props.product.details;
    console.log(details);
    if (this.props.product.details) {
      const regex = /[.]/g;
      const subst = `<p className="desktop-details-list">`;

      const detailsResult = details.replace(regex, subst);

      return <div className="desktop-details" dangerouslySetInnerHTML={{__html:detailsResult}}/>;
    }
  }

  render() {
    return (
      <div className="product-information">
        <h2 className="product-name">
          <img
            className="heart"
            src="https://i.ibb.co/CbBVXLq/imageedit-16-2644387967.png"
            alt="heart"
          />
          {this.props.product.name}
        </h2>
        <h4 className="price">${this.props.product.price}</h4>
        <div className="desktop-product-details">
          <h3 className="details-heading">DETAILS</h3>
          <hr color="#FF70BD" />
          {this.replaceForNewLine()}
        </div>
        <Button text="BUY NOW" />
      </div>
    );
  }
}
