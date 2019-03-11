import React from "react";

import "./index.css";
import { NavBar } from "../../reusable/navBar";
import { ReusableBanner } from "../../reusable/banner";
import { Footer } from "../../reusable/footer";
import { InventoryItem } from "./item";

export function Inventory(props) {
  return (
    <React.Fragment>
      <NavBar />
      <ReusableBanner />
      <div className="add-button-container">
        <button className="add-button">
          <img
            className="plus-icon"
            src="https://i.ibb.co/wYrwDgM/icons8-plus-math-60.png"
            alt="plus-icon"
          />
          ADD NEW
        </button>
      </div>
      <InventoryItem />
      <div className="empty-space" />
      <Footer />
    </React.Fragment>
  );
}
