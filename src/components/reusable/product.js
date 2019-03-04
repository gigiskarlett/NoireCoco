import React from 'react';

import './product.css';

//Renders Product with product images and information
export function Product(props) {
  return (
    <React.Fragment>
      <div className="products">
        <div className="product-container">
          <img
            className="product-image"
            src="https://i.ibb.co/w7pHj46/Screen-Shot-2019-02-11-at-8-25-02-AM.png"
            alt="bikini"
          />
          <h5 className="product-name">
            <img
              className="heart"
              src="https://i.ibb.co/CbBVXLq/imageedit-16-2644387967.png"
              alt="heart"
            />
            BLABLABLA BIKINI
          </h5>
          <p className="short-description">
            High Rise Thong Bikini Bottoms in White
          </p>
          <button className="button">BUY NOW</button>
        </div>
      </div>
    </React.Fragment>
  );
}
