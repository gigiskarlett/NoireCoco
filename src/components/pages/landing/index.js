import React from "react";

import { NavBar } from "../elements/navBar";
import { InstagramBanner } from "../elements/instagram-banner";
import { Footer } from "../elements/footer";
import "./index.css";
import { EmailCapture } from "../elements/email-capture";

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
          <h2>shop new styles</h2>
        </div>
        <section className="shop-by-style" />
        <InstagramBanner />
        <EmailCapture />
        <Footer />
      </React.Fragment>
    );
  }
}
