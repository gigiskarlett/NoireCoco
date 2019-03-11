import React from "react";

import { NavBar } from "../../reusable/navBar";
import { ReusableBanner } from "../../reusable/banner";
import { ProductInformationDesktopView } from "../../reusable/product-information-desktop-view";
import { ProductInformationMobileView } from "../../reusable/product-information-mobile-view";
import { ProductImagesDesktopView } from "./product-images-desktop-view";
import { Footer } from "../../reusable/footer";
import "./index.css";

//Renders page with product selected
export function ShowOneProduct(props) {
  return (
    <div className="desktop-view">
      <NavBar />
      <ReusableBanner />
      <div className="product-container-desktop-view">
        <ProductImagesDesktopView />
        <ProductInformationDesktopView />
      </div>
      <div className="product-container-mobile-view">
        <ProductInformationMobileView />
      </div>
      <Footer />
    </div>
  );
}
