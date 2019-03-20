import React from "react";

import "./product-images-desktop-view.css";

//renders images on desktop view for one product
export class ProductImagesDesktopView extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     selectedImage: this.props.product.imageUrl
  //   };
  // }
  render() {
    return (
      <div className="image-container">
        {/*<img src={this.props.product.selectedImage} alt="main-image" />*/}
        <div className="left-thumbnails">
          <a className="thumbnail">
            <img
              src={this.props.product.secondImage}
              alt={this.props.product.shortDescription}
              onClick={e =>
                this.setState({ selectedImage: this.props.product.secondImage })
              }
            />
          </a>
          <a className="thumbnail" >
            <img
              src={this.props.product.thirdImage}
              alt={this.props.product.shortDescription}
              onClick={e =>
                this.setState({ selectedImage: this.props.product.thirdImage })
              }
            />
          </a>
        </div>
        <div className="hero right">
          <img
            src={this.props.product.imageUrl}
            alt={this.props.product.shortDescription}
          />
        </div>
      </div>
    );
  }
}
