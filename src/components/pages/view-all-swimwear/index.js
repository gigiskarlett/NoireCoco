import React from "react";

import { connect } from "react-redux";
import { getAllProducts } from "../../../actions/products";
import { NavBar } from "../../reusable/navBar";
import EmailCapture from "../../reusable/email-capture";
import { Filter } from "../../reusable/filter";
import Products from "./products";
import { Footer } from "../../reusable/footer";

import "./index.css";

export class ViewAllSwimwear extends React.Component {
  componentDidMount() {
    this.props.dispatch(getAllProducts());
  }
  render() {
    let filteredProducts = this.props.products;

    if (this.props.match.params.type) {
      let filteredProducts = this.props.products.filter(
        product => product.style === this.props.match.params.type
      );
    }
    return (
      <React.Fragment>
        <NavBar />
        <div className="pink-banner">
          <EmailCapture />
        </div>
        <Filter product={this.props.product} />
        <section className="swimwear-products">
          <Products filteredProducts={this.props.products} />
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  product: state.products.products
});

export default connect(mapStateToProps)(ViewAllSwimwear);
