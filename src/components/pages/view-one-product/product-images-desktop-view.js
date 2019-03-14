import React from "react";

import { connect } from "react-redux";
import "./product-images-desktop-view.css";

export class ProductImagesDesktopView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: props.product.imageUrl
    };
  }
  render() {
    return (
      <div className="image-container" id="">
        <img src={this.state.selectedImage} />
        <div className="hero right">
          <img
            src={this.props.product.imageUrl}
            alt={this.props.product.shortDescription}
            onClick={e =>
              this.setState({ selectedImage: this.props.product.imageUrl })
            }
          />
        </div>
        <div className="left-thumbnails">
          <a className="thumbnail" href="#">
            <img
              src={this.props.product.secondImage}
              alt={this.props.product.shortDescription}
              onClick={e =>
                this.setState({ selectedImage: this.props.product.secondImage })
              }
            />
          </a>
          <a className="thumbnail" href="#">
            <img
              src={this.props.product.thirdImage}
              alt={this.props.product.shortDescription}
            />
          </a>
        </div>
      </div>
    );
  }
}

//TRANSLATE THIS TO REACT
// function handleThumbnailClicks() {
//     $('.thumbnail').on('click', function(event) {
//        const imgSrc = $(this).find('img').attr('src');
//        const imgAlt = $(this).find('img').attr('alt');
//     $('.hero img').attr({'src': imgSrc, 'alt': imgAlt});
//     });
//   }
//   $(handleThumbnailClicks);
