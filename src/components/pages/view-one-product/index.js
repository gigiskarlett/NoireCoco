import React from "react";

import { NavBar } from "../../reusable/navBar";
import { ReusableBanner } from "../../reusable/banner";
import { ProductInformationDesktopView } from "./product-information-desktop-view";
import { ProductInformationMobileView } from "./product-information-mobile-view";
import ProductImagesDesktopView from "./product-images-desktop-view";
import { Footer } from "../../reusable/footer";
import "./index.css";

//Renders page with product selected

export class ShowOneProduct extends React.Component {
  componentDidMount() {
    //use postman and paste an id here
    this.props.dispatch(getOneProduct("123112312123"));
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ReusableBanner />
        <div className="desktop-view">
          <div className="product-container-desktop-view">
            <ProductImagesDesktopView product={this.product} />
            <ProductInformationDesktopView />
          </div>
        </div>
        <div className="mobile-view">
          <div className="product-container-mobile-view">
            <ProductInformationMobileView />
          </div>
        </div>
        <Footer />
        {/* Hello this is a comment */}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  product: state.products.selectedProduct
});

export default connect(mapStateToProps)(ShowOneProduct);
