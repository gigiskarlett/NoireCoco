import React from "react";

import { connect } from "react-redux";
import { getOneProduct } from "../../../actions/products";

import { NavBar } from "../../reusable/navBar";
import { ReusableBanner } from "../../reusable/banner";
import { ProductInformationDesktopView } from "./product-information-desktop-view";
import { ProductInformationMobileView } from "./product-information-mobile-view";
import {ProductImagesDesktopView} from "./product-images-desktop-view";
import { Footer } from "../../reusable/footer";

import "./index.css";

//Renders page with product selected
class ShowOneProduct extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.dispatch(getOneProduct("5c872bdd9edb2b3123a68075"));
  }
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ReusableBanner />
        <div className="desktop-view">
          <div className="product-container-desktop-view">
            <ProductImagesDesktopView product={this.product} />
            <ProductInformationDesktopView product={this.product} />
          </div>
        </div>
        <div className="mobile-view">
          <div className="product-container-mobile-view">
            <ProductInformationMobileView product={this.product} />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  product: state.products.selectedProduct
});

export default connect(mapStateToProps)(ShowOneProduct);
