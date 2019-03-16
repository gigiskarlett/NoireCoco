import React from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { NavBar } from "../../reusable/navBar";
import { InstagramBanner } from "../../reusable/instagram-banner";
import { Footer } from "../../reusable/footer";
import "./index.css";
import { EmailCapture } from "../../reusable/email-capture";

//Renders landing page
export default class LandingPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="about-us-banner">
          <p className="catchy-phrase">SWIM</p>
          <p className="catchy-phrase">
            There’s nothing better than wearing the perfect swimwear to go to
            the pool or the beach, that’s why we have selected our favorite
            selection of swimwear for you
          </p>
        </div>
        <div className="landing-banner">
          <div className="banner-left-img-container">
          <img
          src="https://i.ibb.co/6tjr3rC/Screen-Shot-2019-03-15-at-1-39-03-PM.png"
          alt="girl-in-monokini-image"
          className="banner-left-image"
        />
        <p className="left-img-word">Shop</p>
          </div>
          <div className="banner-center-img-container">
          <img
          src="  https://i.ibb.co/TY7Z4F2/Screen-Shot-2019-02-11-at-8-26-10-AM.png"
          alt="girl-in-two-piece-swimsuit-image"
          className="banner-center-image"
        />
      
        <p className="center-img-word">New</p>
          </div>
          <div className="banner-right-img-container">
          <img
          src="https://i.ibb.co/sFVCvgS/Screen-Shot-2019-03-01-at-4-32-50-PM.png"
          alt="girl-in-one-piece-swimsuit-sitting"
          className="banner-right-image"
        />
        <p className="right-img-word">Styles</p>
          </div>
        </div>
        <div className="shop-by-style-container">
          {/*<a href="" className="shop-two-piece-link">*/}
          <img
            src="https://i.ibb.co/Rjs5cJ0/imageedit-52-9996487550.jpg"
            alt="shop-two-piece-sets"
            className="shop-two-piece"
          />
          {/*</a>*/}
          {/*<a href="" className="shop-one-piece-link">*/}
          <img
            src="https://i.ibb.co/4WNdwD0/imageedit-45-5144540347.jpg"
            alt="shop-one-piece-swimsuits"
            className="shop-one-piece"
          />
          {/*</a>*/}
        </div>
        <InstagramBanner />
        <EmailCapture />
        <Footer />
      </React.Fragment>
    );
  }
}

//header with pics, pics that act as link to two pieces and one piece
