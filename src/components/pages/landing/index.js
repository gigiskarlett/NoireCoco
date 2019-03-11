import React from "react";

import { NavBar } from "../../reusable/navBar"
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

//header with pics, pics that act as link to two pieces and one piece