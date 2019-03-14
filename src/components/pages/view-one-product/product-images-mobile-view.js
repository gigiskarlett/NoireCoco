import React from "react";

import { connect } from "react-redux";
import "./product-images-mobile-view.css";

//Renders mobile viewport layout for product images
export class ProductImagesMobileView extends React.Component {
  render() {
    const products = this.props.products.map(
      product => {
        return (
          <React.Fragment>
            <div className="images-container">
              <div className="hero-image">
                <img src={product.imageUrl} alt={product.shortDescription} />
              </div>
              <div className="bottom-thumbnails-container">
                <a className="thumbnails" href="#">
                  <img
                    src={product.secondImage}
                    alt={product.shortDescription}
                  />
                </a>
                <a className="thumbnails" href="#">
                  <img
                    src={product.thirdImage}
                    alt={product.shortDescription}
                  />
                </a>
              </div>
            </div>
          </React.Fragment>
        );
      }
    );
    return <React.Fragment>{products}</React.Fragment>;
  }
}

const mapStateToProps = state => ({
  products: state.products.products
});

export default connect(mapStateToProps)(ProductImagesMobileView);


//TRANSLATE THIS TO REACT
// function handleThumbnailClicks() {
//     $('.thumbnail').on('click', function(event) {
//        const imgSrc = $(this).find('img').attr('src'); 
//        const imgAlt = $(this).find('img').attr('alt');
//     $('.hero img').attr({'src': imgSrc, 'alt': imgAlt});
//     });
//   }
//   $(handleThumbnailClicks);