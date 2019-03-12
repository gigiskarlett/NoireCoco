import React from "react";

import { connect } from "react-redux";
import { NavBar } from "../../reusable/navBar";
import { ReusableBanner } from "../../reusable/banner";
import { Footer } from "../../reusable/footer";
import InventoryItem from "./item";
import { getAllProducts } from "../../../actions/products";

import "./index.css";

export class Inventory extends React.Component {
  componentDidMount() {
    this.props.dispatch(getAllProducts());
  }
  render() {
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
}

export default connect()(Inventory);
