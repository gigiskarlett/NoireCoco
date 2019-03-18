import React from "react";

import { connect } from "react-redux";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { NavBar } from "../../reusable/navBar";
import { ReusableBanner } from "../../reusable/banner";
import { Footer } from "../../reusable/footer";
import InventoryItem from "./item";
import { getAllProducts } from "../../../actions/products";

import "./index.css";

class Inventory extends React.Component {
  componentDidMount() {
    this.props.dispatch(getAllProducts());
  }
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ReusableBanner text="INVENTORY" />
        <div className="add-button-container">
        <button className="add-button">
        <img
          className="plus-icon"
          src="https://i.ibb.co/wYrwDgM/icons8-plus-math-60.png"
          alt="plus-icon"
        />
        <Link className="link-to-add-new" to="/admin/new-entry">ADD NEW</Link>
      </button>
        </div>
        <InventoryItem />
        <div className="empty-space" />
        <Footer />
      </React.Fragment>
    );
  }
}

// Inventory.defaultProps ={
//   heading: INVENTORY
// } add inventory to banner

export default connect()(Inventory);
