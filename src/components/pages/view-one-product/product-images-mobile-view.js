import React from "react";
import "./product-images-mobile-view.css";

//Renders mobile viewport layout for product images
export function ProductImagesMobileView(props) {
    return (
        <React.Fragment>
          <div className="images-container">
            <div className="hero-image">
              <img 
                src="https://i.ibb.co/vPVX4tQ/2019-sexy-black-yellow-high-waist-cut-out-trikini-ribbed-bathing-suit-monokini-hollow-out-shoulder-swimwear-one-piece-swimsuit-1.jpg "
                alt="igh-waist-cut-out-trikini-ribbed-bathing-suit."
              />
            </div>
            <div className="bottom-thumbnails-container">
              <a className="thumbnails" href="#">
                <img 
                  src="https://i.ibb.co/ft853Pz/2019-sexy-black-yellow-high-waist-cut-out-trikini-ribbed-bathing-suit-monokini-hollow-out-shoulder-swimwear-one-piece-swimsuit-2.jpg"
                  alt="trikini-ribbed-bathing-suit-monokini-hollow-out-shoulder-swimwear-one-piece-swimsuit."
                />
              </a>
              <a className="thumbnails" href="#">
                <img 
                  src="https://i.ibb.co/9qZdCqQ/2019-sexy-black-yellow-high-waist-cut-out-trikini-ribbed-bathing-suit-monokini-hollow-out-shoulder-swimwear-one-piece-swimsuit-3.jpg"
                  alt="trikini-ribbed-bathing-suit-monokini-hollow-out-shoulder-swimwear-one-piece-swimsuit"
                />
              </a>
            </div>
          </div>
        </React.Fragment>
      );
}