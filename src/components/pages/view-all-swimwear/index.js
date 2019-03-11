import React from "react";

import { connect } from "react-redux";
import { NavBar } from "../../reusable/navBar";
import { EmailCapture } from "../../reusable/email-capture";
import { Filter } from "../../reusable/filter";
import Product from "./product";
import { Footer } from "../../reusable/footer";
import { getAllProducts } from "../../../actions/products";

import "./index.css";

export class ViewAllSwimwear extends React.Component {
  componentDidMount() {
    this.props.dispatch(getAllProducts());
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="pink-banner">
          <EmailCapture />
        </div>
        <Filter />
        <section className="swimwear-products">
          <Product />
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default connect()(ViewAllSwimwear);
