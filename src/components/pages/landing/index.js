import React from "react";

import { NavBar } from "../../reusable/navBar";
import { Link } from "react-router-dom";
import { InstagramBanner } from "../../reusable/instagram-banner";
import "./index.css";
import EmailCapture from "../../reusable/email-capture";

//Renders landing page
export default class LandingPage extends React.Component {
  render() {
    return (
      <React.Fragment>
      <NavBar />
        <div className="about-us-banner">
          <p className="catchy-phrase title-for-catchy-phrase">SWIM</p>
          <p className="catchy-phrase">
            There’s nothing better than wearing the perfect swimwear to go to
            the pool or the beach, that’s why we have selected our favorite
            selection of quality and beautiful swimwear for you
          </p>
        </div>
        <div className="landing-banner">
          <div className="banner-left-img-container">
            <img
              src="https://i.ibb.co/6tjr3rC/Screen-Shot-2019-03-15-at-1-39-03-PM.png"
              alt="girl-in-monokini"
              className="banner-left-image"
            />
            <p className="left-img-word">Shop</p>
          </div>
          <div className="banner-center-img-container">
            <img
              src="https://i.ibb.co/fS1yBzG/purple-swimsuit.png"
              alt="girl-in-two-piece-swimsuit"
              className="banner-center-image"
            />

            <p className="center-img-word">New</p>
          </div>
          <div className="banner-right-img-container">
            <img
              src="https://i.ibb.co/KNB83Lk/Screen-Shot-2019-03-16-at-12-11-59-PM.png"
              alt="girl-in-two-piece-swimsuit"
              className="banner-right-image"
            />
            <p className="right-img-word">Styles</p>
          </div>
        </div>
        <div className="shop-by-style-container">
          <Link to="/category/two-piece" className="shop-two-piece-link">
            <img
              src="https://i.ibb.co/Rjs5cJ0/imageedit-52-9996487550.jpg"
              alt="shop-two-piece-sets"
              className="shop-two-piece"
            />
          </Link>
          <Link to="/category/one-piece" className="shop-one-piece-link">
            <img
              src="https://i.ibb.co/G33rjhm/shop-one-piece.jpg"
              alt="shop-one-piece-swimsuits"
              className="shop-one-piece"
            />
          </Link>
        </div>
        <InstagramBanner />
        <div className="landing-page-email-container">
          <EmailCapture />
        </div>
      </React.Fragment>
    );
  }
}
