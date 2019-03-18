import React from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAllProducts } from "../../../actions/products";
import "./product.css";

//Renders Product with product images and short information
class Products extends React.Component {
  componentDidMount() {
    this.props.dispatch(getAllProducts());
  }
  render() {
    let filteredProducts = this.props.products;

    // if (this.props.match.params.type) {
    //   let filteredProducts = this.props.products.filter(
    //     product => product.style === this.props.match.params.type
    //   );
    // }

    const products = filteredProducts.map((product, i) => {
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
const mapStateToProps = state => ({
  products: state.products.products
});

export default connect(mapStateToProps)(Products);
