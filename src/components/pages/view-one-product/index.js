import React from "react";

import { NavBar } from "../../reusable/navBar";
import { ReusableBanner } from "../../reusable/banner";
import { ProductInformationDesktopView } from "./product-information-desktop-view";
import { ProductInformationMobileView } from "./product-information-mobile-view";
import  ProductImagesDesktopView  from "./product-images-desktop-view";
import { Footer } from "../../reusable/footer";
import "./index.css";

//Renders page with product selected
export function ShowOneProduct(props) {
  return (
    <React.Fragment>
      <NavBar />
      <ReusableBanner />
      <div className="desktop-view">
        <div className="product-container-desktop-view">
          <ProductImagesDesktopView />
          <ProductInformationDesktopView />
        </div>
      </div>
      <div className="mobile-view">
        <div className="product-container-mobile-view">
          <ProductInformationMobileView />
        </div>
      </div>
      <Footer />
      //dispatch to get one product //import
    </React.Fragment>
  );
}
