import React from "react";

import { connect } from "react-redux";
import { getOneProduct } from "../../../actions/products";

import { NavBar } from "../../reusable/navBar";
import { ReusableBanner } from "../../reusable/banner";
import { ProductInformationDesktopView } from "./product-information-desktop-view";
import { ProductInformationMobileView } from "./product-information-mobile-view";
import { ProductImagesDesktopView } from "./product-images-desktop-view";
import { Footer } from "../../reusable/footer";

import "./index.css";

//Renders page with product selected
class ShowOneProduct extends React.Component {
  componentDidMount() {
    this.props.dispatch(getOneProduct(this.props.match.params.product));
  }
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ReusableBanner
          text="There’s nothing better than wearing the perfect swimwear to go to
          the pool or the beach, that’s why we have selected our favorite
          selection of quality and beautiful swimwear for you"
        />
        <div className="desktop-view">
          <div className="product-container-desktop-view">
            <ProductImagesDesktopView product={this.props.product} />
            <ProductInformationDesktopView product={this.props.product} />
          </div>
        </div>
        <div className="mobile-view">
          <div className="product-container-mobile-view">
            <ProductInformationMobileView product={this.props.product} />
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
