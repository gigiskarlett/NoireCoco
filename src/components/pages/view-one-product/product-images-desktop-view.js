import React from "react";

import { connect } from "react-redux";
import "./product-images-desktop-view.css";

export class ProductImagesDesktopView extends React.Component {

  render() {
    console.log(this.props)
    const products = this.props.products.map(
      (product) => {
        return (
          <React.Fragment>
            <div className="image-container" id="">
              <div className="hero right">
                <img src={product.imageUrl} alt={product.shortDescription} />
              </div>
              <div className="left-thumbnails">
                <a className="thumbnail" href="#">
                  <img
                    src={product.secondImage}
                    alt={product.shortDescription}
                  />
                </a>
                <a className="thumbnail" href="#">
                  <img
                    src={product.thirdImage}
                    alt={product.shortDescription}
                  />
                </a>
              </div>
            </div>
          </React.Fragment>
        );
      });
      return <React.Fragment>{products}</React.Fragment>
  }
}
const mapStateToProps = state => ({
  products: state.products.products
});

export default connect(mapStateToProps)(ProductImagesDesktopView);

//TRANSLATE THIS TO REACT
// function handleThumbnailClicks() {
//     $('.thumbnail').on('click', function(event) {
//        const imgSrc = $(this).find('img').attr('src'); 
//        const imgAlt = $(this).find('img').attr('alt');
//     $('.hero img').attr({'src': imgSrc, 'alt': imgAlt});
//     });
//   }
//   $(handleThumbnailClicks);
