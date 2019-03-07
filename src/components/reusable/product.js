import React from "react";

import { connect } from "react-redux";
import "./product.css";

//Renders Product with product images and information
export function Product(props) {
  //connect to store
  //map state to props
  //use this.props.products .map show components
  return (
    <React.Fragment>
      <div className="products" id={props.products.id}>
        <div className="product-container">
          <img
            className="product-image"
            src={props.products.imageUrl}
            alt="bikini"
          />
          <h6 className="product-name">
            <img
              className="heart"
              src="https://i.ibb.co/CbBVXLq/imageedit-16-2644387967.png"
              alt="heart"
            />
            {props.products.name}
          </h6>
          <p className="short-description">
            {props.products.shortDescription}
          </p>
          <p className="product-price">{props.products.price}</p>
          <button className="product-button">BUY NOW</button>
        </div>
      </div>
    </React.Fragment>
  );
}
const mapStateToProps = state => ({
  products: state.products
});

export default connect(mapStateToProps)(Product);

//pass state+props from db item
