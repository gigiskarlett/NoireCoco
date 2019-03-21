import React from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ReusableBanner } from "../../reusable/banner";
import AdminPagesNavBar  from "../../reusable/admin-page-nav-bar";
import InventoryItem from "./item";
import { getAllProducts } from "../../../actions/products";
import requiresLogin from "../../reusable/requires-login";

import "./index.css";

//Renders items in inventory
class Inventory extends React.Component {
  componentDidMount() {
    this.props.dispatch(getAllProducts());
  }
  render() {
    return (
      <React.Fragment>
        <AdminPagesNavBar />
        <ReusableBanner text="INVENTORY" />
        <div className="add-button-container">
          <button className="add-button">
            <img
              className="plus-icon"
              src="https://i.ibb.co/wYrwDgM/icons8-plus-math-60.png"
              alt="plus-icon"
            />
            <Link className="link-to-add-new" to="/admin/new-entry">
              ADD NEW
            </Link>
          </button>
        </div>
        <InventoryItem />
        <div className="empty-space" />
      </React.Fragment>
    );
  }
}

export default requiresLogin()(connect()(Inventory));
