import React from "react";

import { connect } from "react-redux";
import "./product.css";

//Renders Product with product images and short information
export class Product extends React.Component {
  // createProduct() {
  //   return this.props.products.map(product => {
  //     return (
  //       <ul>
  //         <div className="products" id={this.props.id}>
  //           <div className="product-container">
  //             <img
  //               className="product-image"
  //               src={this.props.imageUrl}
  //               alt="bikini"
  //             />
  //             <h6 className="product-name">
  //               <img
  //                 className="heart"
  //                 src="https://i.ibb.co/CbBVXLq/imageedit-16-2644387967.png"
  //                 alt="heart"
  //               />
  //               {this.props.name}
  //             </h6>
  //             <p className="short-description">
  //               {this.props.shortDescription}
  //             </p>
  //             <p className="product-price">{this.props.price}</p>
  //             <button className="product-button">BUY NOW</button>
  //           </div>
  //         </div>
  //       </ul>
  //     );
  //   });
  // }
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
                {product.name}
              </h6>
              <p className="short-description">{product.shortDescription}</p>
              <p className="product-price">{product.price}</p>
              <button className="product-button">BUY NOW</button>
            </div>
          </div>
        </li>
      );
    });

    return <ul>{products}</ul>;
  }
}
const mapStateToProps = state => ({
  products: state.products.products
});

export default connect(mapStateToProps)(Product);
