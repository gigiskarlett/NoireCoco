import React from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { NavBar } from "../../reusable/navBar";
import { ReusableBanner } from "../../reusable/banner";
import { Footer } from "../../reusable/footer";
import InventoryItem from "./item";
import { getAllProducts } from "../../../actions/products";
import requiresLogin from "../../reusable/requires-login";
// import requiresLogin from "../../pages/login/requires-login";
// import { fetchProtectedData } from "../../../actions/protected-data";

import "./index.css";

class Inventory extends React.Component {
  componentDidMount() {
    this.props.dispatch(getAllProducts());
    {
      /*this.props.dispatch(fetchProtectedData());*/
    }
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
            <Link className="link-to-add-new" to="/admin/new-entry">
              ADD NEW
            </Link>
          </button>
        </div>
        {/*Protected data: {this.props.protectedData}*/}
        <InventoryItem />
        <div className="empty-space" />
        <Footer />
      </React.Fragment>
    );
  }
}

export default requiresLogin()(connect()(Inventory));
