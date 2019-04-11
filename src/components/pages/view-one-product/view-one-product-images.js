import React from "react";


import "./view-one-product-images.css";

//Renders mobile viewport layout for product images
export class ViewOneProductImages extends React.Component {
  //stores current state of selected image to show on hero image
  constructor(props) {
    super(props);
      this.state = {
        selectedImage: this.props.product.imageUrl
      };
  }
  render() {
    return (
      <div className="images-container">
        <div className="hero-image">
        <img src={this.state.selectedImage || this.props.product.imageUrl} alt={this.props.product.shortDescription} />
        </div>
        <div className="bottom-thumbnails-container">
          <a className="thumbnails">
          <img
          src={this.props.product.secondImage}
          alt={this.props.product.shortDescription}
          onClick={(e) =>
            this.setState({ selectedImage: this.props.product.secondImage })
          }
        />
          </a>
          <a className="thumbnails">
          <img
          src={this.props.product.imageUrl}
          alt={this.props.product.shortDescription}
          onClick={(e) =>
            this.setState({ selectedImage: this.props.product.imageUrl })
          }
        />
          </a>
          <a className="thumbnails">
          <img
          src={this.props.product.thirdImage}
          alt={this.props.product.shortDescription}
          onClick={(e) =>
            this.setState({ selectedImage: this.props.product.thirdImage })
          }
        />
          </a>
        </div>
      </div>
    );
  }
}
