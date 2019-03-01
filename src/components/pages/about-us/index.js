import React from "react";

import "./index.css";
import { NavBar } from "../../reusable/navBar";
import { ReusableBanner } from "../../reusable/reusable-banner";
import { Button } from "../../reusable/reusable-button";
import { Footer } from "../../reusable/footer";

export function AboutUs(props) {
  return (
    <React.Fragment>
      <NavBar />
      <ReusableBanner />
      <section className="pictureContainer">
        <img
          className="img"
          src="https://i.ibb.co/qJcqx7b/imageedit-37-3130109529.png"
          alt="girl in water with sharks"
        />
      </section>
      <section className="about-us-section">
        <p className="about-us-paragraph">
          Noire Coco was created by a beach lover who’s always on the search for
          swimwear for her next vacation. I’ve always struggled on finding a
          nice swimwear and it seems that at times I stumbled upon having too
          many or too little options for pieces that I didn’t really like. I
          wanted to create a page where finding a beautiful swimsuit for a
          reasonable price wouldn’t be a search down hundreds of pages. I wanted
          to make beautiful swimwear with reasonable prices accessible to every
          women who finds herself always on a quest when trying to find
          swimwear.
        </p>
        <Button />
        <div className="empty-space" />
        <Footer />
      </section>
    </React.Fragment>
  );
}
