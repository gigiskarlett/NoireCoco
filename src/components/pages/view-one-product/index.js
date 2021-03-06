import React from "react";

import { NavBar } from "../../reusable/navBar";
import { connect } from "react-redux";
import { getOneProduct } from "../../../actions/products";
import { ReusableBanner } from "../../reusable/banner";
import { ViewOneProductImagesAndDetails } from "./view-one-product-images-and-details.js";
import Spinner from "react-spinkit";
import "./index.css";

//Renders page with product selected
class ShowOneProduct extends React.Component {
    //if page is loading shows loading transition 
  isLoading() {
    if (this.props.loading) {
      return (
        <Spinner
          name="three-bounce"
          style={{
            display: "flex",
            color: "#FFA3D4",
            justifyContent: "center",
            margin: "40px"
          }}
        />
      );
    }
  }
  //dispatches action to fetch the product selected
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
        {this.isLoading()}
        <div className="view-one-product-container">
          <ViewOneProductImagesAndDetails product={this.props.product} />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  product: state.products.selectedProduct,
  loading: state.products.loading
});

export default connect(mapStateToProps)(ShowOneProduct);
