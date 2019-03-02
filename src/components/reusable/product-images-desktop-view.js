import React from "react";
import "./product-images-desktop-view.css";

export function ProductImagesDesktopView(props) {
  return (
    <React.Fragment>
      <div className="image-container">
        <div className="hero right">
          <img
            src="https://i.ibb.co/vPVX4tQ/2019-sexy-black-yellow-high-waist-cut-out-trikini-ribbed-bathing-suit-monokini-hollow-out-shoulder-swimwear-one-piece-swimsuit-1.jpg "
            alt="igh-waist-cut-out-trikini-ribbed-bathing-suit."
          />
        </div>
        <div className="left-thumbnails">
          <a className="thumbnail" href="#">
            <img
              src="https://i.ibb.co/ft853Pz/2019-sexy-black-yellow-high-waist-cut-out-trikini-ribbed-bathing-suit-monokini-hollow-out-shoulder-swimwear-one-piece-swimsuit-2.jpg"
              alt="trikini-ribbed-bathing-suit-monokini-hollow-out-shoulder-swimwear-one-piece-swimsuit."
            />
          </a>
          <a className="thumbnail" href="#">
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

//TRANSLATE THIS TO REACT
// function handleThumbnailClicks() {
//     $('.thumbnail').on('click', function(event) {
//        const imgSrc = $(this).find('img').attr('src');
//        const imgAlt = $(this).find('img').attr('alt');
//     $('.hero img').attr({'src': imgSrc, 'alt': imgAlt});
//     });
//   }
//   $(handleThumbnailClicks);
