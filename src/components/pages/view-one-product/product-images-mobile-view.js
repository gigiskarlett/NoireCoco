import React from "react";


import "./product-images-mobile-view.css";

//Renders mobile viewport layout for product images
export class ProductImagesMobileView extends React.Component {
  // constructor(props) {
    // super(props);
    //   this.state = {
    //     selectedImage: props.product.imageUrl
    //   };
  // }
  render() {
    return (
      <div className="images-container">
        <div className="hero-image">
          <img src={this.props.product.imageUrl} alt={this.props.product.shortDescription} />
        </div>
        <div className="bottom-thumbnails-container">
          <a className="thumbnails">
            <img src={this.props.product.secondImage} alt={this.props.product.shortDescription} />
          </a>
          <a className="thumbnails">
            <img src={this.props.product.thirdImage} alt={this.props.product.shortDescription} />
          </a>
        </div>
      </div>
    );
  }
}
