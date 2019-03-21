import React from "react";

import { NavBar } from "../../reusable/navBar";
import { connect } from "react-redux";
import { getAllProducts } from "../../../actions/products";
import EmailCapture from "../../reusable/email-capture";
import { Filter } from "../../reusable/filter";
import Products from "./products";
import Spinner from "react-spinkit";

import "./index.css";

//Renders all swimwear
export class ViewAllSwimwear extends React.Component {
  isLoading() {
    if (this.props.loading) {
      return <Spinner name="three-bounce" color="fuchsia" />;
    }
  }
  componentDidMount() {
    this.props.dispatch(getAllProducts());
  }
  render() {
    let filteredProducts = this.props.products;

    if (this.props.match.params.type) {
      filteredProducts = this.props.products.filter(
        product => product.style === this.props.match.params.type
      );
    }
    return (
      <React.Fragment>
      <NavBar />
        <div className="pink-banner">
          <EmailCapture />
        </div>
        <Filter products={this.props.products} />
        <section className="swimwear-products">
        {this.isLoading()}
          <Products products={filteredProducts} />
        </section>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  products: state.products.products,
  loading: state.products.loading
});

export default connect(mapStateToProps)(ViewAllSwimwear);
