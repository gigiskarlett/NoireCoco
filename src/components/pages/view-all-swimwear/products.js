import React from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import "./product.css";

//Renders Product with product images and short information
class Products extends React.Component {
  componentDidMount() {
    this.props.dispatch(getAllProducts());
  }
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
                <Link className="name-link" to={`/shop/${product.id}`}>
                  {product.name}
                </Link>
              </h6>
              <p className="short-description">{product.shortDescription}</p>
              <p className="product-price">{product.price}</p>
              <button className="product-button">
                <Link className="link-button" to={product.url}>
                  {" "}
                  {/*Todo use link tag */}
                  BUY NOW
                </Link>
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

//<Link to:/shop/{${productUrl}}><img></Link>
//create url link
