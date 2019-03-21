import React from "react";

import { connect } from "react-redux";
import { getOneProduct } from "../../../actions/products";

import { NavBar } from "../../reusable/navBar";
import { ReusableBanner } from "../../reusable/banner";
import { ViewOneProductImagesAndDetails} from "./view-one-product-images-and-details.js";
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
        <div className="view-one-product-container">
          <ViewOneProductImagesAndDetails product={this.props.product} />
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
