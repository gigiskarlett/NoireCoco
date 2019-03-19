import React from "react";

import {Link } from "react-router-dom";
import "./product.css";

//Renders Product with product images and short information
export default class Products extends React.Component {
  render() {
    const products = this.props.products.map((product, i) => {
      return (
        <li key={i}>
          <div className="products" id={product.id}>
            <div className="product-container">
              <Link
                className="name-link"
                to={`/shop/${product.id}`}
                target="_blank"
              >
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

                  {product.name}
                </h6>
              </Link>
              <p className="short-description">{product.shortDescription}</p>
              <p className="product-price">${product.price}</p>
              <button className="product-button">
                <a target="_blank" href={product.url} className="link-button">
                  BUY NOW
                </a>
              </button>
            </div>
          </div>
        </li>
      );
    });

    return <ul className="listing-products">{products}</ul>;
  }
}


