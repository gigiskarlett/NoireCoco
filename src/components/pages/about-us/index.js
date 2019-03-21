import React from "react";

import { NavBar } from "../../reusable/navBar";
import "./index.css";
import { ReusableBanner } from "../../reusable/banner";
import { Button } from "../../reusable/button";

//Renders about us page page
export function AboutUs(props) {
  return (
    <React.Fragment>
    <NavBar />
      <ReusableBanner text="ABOUT US"/>
      <section className="pictureContainer">
        <img
          className="img"
          src="https://i.ibb.co/qJcqx7b/imageedit-37-3130109529.png"
          alt="girl in water with sharks in the Bahamas"
        />
      </section>
      <hr color="#FF70BD" />
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
        <hr color="#FF70BD" />
        <div className="empty-div-about-us" />
        <Button text="SHOP SWIMWEAR" />
        <div className="empty-space-about-us" />
      </section>
    </React.Fragment>
  );
}

