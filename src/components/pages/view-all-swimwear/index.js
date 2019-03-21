import React from "react";

import { connect } from "react-redux";
import { getAllProducts } from "../../../actions/products";
import { NavBar } from "../../reusable/navBar";
import EmailCapture from "../../reusable/email-capture";
import { Filter } from "../../reusable/filter";
import Products from "./products";
import { Footer } from "../../reusable/footer";
import Spinner from "react-spinkit";

import "./index.css";

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
        <div className="pink-banner">
          <EmailCapture />
        </div>
        <Filter products={this.props.products} />
        <section className="swimwear-products">
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
