import React from "react";

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { connect } from "react-redux";
import "./product.css";

//Renders Product with product images and short information
class Product extends React.Component {
  render() {
    const products = this.props.products.map((product, i) => {
      return (
        <li key={i}>
          <div className="products" id={product.id}>
            <div className="product-container">
              <img
                className="product-image"
                src={product.imageUrl}
                alt="bikini"
              />
              <h6 className="product-name">
                <img
                  className="heart"
                  src="https://i.ibb.co/CbBVXLq/imageedit-16-2644387967.png"
                  alt="heart"
                />
                <Link className="name-link" to="/{product.id}">{product.name}</Link>
              </h6>
              <p className="short-description">{product.shortDescription}</p>
              <p className="product-price">{product.price}</p>
              <button className="product-button"><Link className="link-button" to="{product.url}">BUY NOW</Link></button>
            </div>
          </div>
        </li>
      );
    });

    return <ul className="listing-products">{products}</ul>;
  }
}
const mapStateToProps = state => ({
  products: state.products.products
});

export default connect(mapStateToProps)(Product);


//<Link to:/shop/{${productUrl}}><img></Link>
//create url link