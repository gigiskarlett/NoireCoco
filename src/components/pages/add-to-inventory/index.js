import React from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ReusableBanner } from "../../reusable/banner";
import AdminPagesNavBar from "../../reusable/admin-page-nav-bar";
import { postItem } from "../../../actions/products";
import requiresLogin from "../../reusable/requires-login";
import "./index.css";

//Renders new entry form 
class NewInventoryEntry extends React.Component {
  //contains initial state
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      url: "",
      imageUrl: "",
      secondImage: "",
      thirdImage: "",
      shortDescription: "",
      details: "",
      price: "",
      style: "one-piece bikini"
    };
  }

  //handles submission of form and dispatches action to post item
  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(postItem(this.state))
    .then(() => this.clearFields());
  }
  //clears field after submission
  clearFields() {
    this.setState({
      name: "",
      url: "",
      imageUrl: "",
      secondImage: "",
      thirdImage: "",
      shortDescription: "",
      details: "",
      price: "",
      style: "one-piece bikini"
    });
  }
  //renders form
  render() {
    return (
      <React.Fragment>
        <AdminPagesNavBar />
        <ReusableBanner text="INVENTORY" />
        <form
          className="inventory-form "
          aria-live="polite"
          onSubmit={e => this.handleSubmit(e)}
        >
          <legend>ADD TO INVENTORY</legend>
          <fieldset>
            <label htmlFor="name">
              NAME
              <input
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
                aria-label="name"
                aria-required="true"
                className="inventory-input "
                type="text"
                name="product-name"
                id="name"
                required
              />
            </label>
            <label htmlFor="url">
              URL
              <input
                value={this.state.url}
                onChange={e => this.setState({ url: e.target.value })}
                aria-required="true"
                className="inventory-input "
                type="text"
                name="product-image-url"
                id="url"
                required
              />
            </label>
            <label htmlFor="imageUrl">
              IMAGE URL
              <input
                value={this.state.imageUrl}
                onChange={e => this.setState({ imageUrl: e.target.value })}
                aria-label="imageUrl"
                className="inventory-input "
                type="text"
                name="product-image-url"
                id="imageUrl"
                required
              />
            </label>
            <label htmlFor="secondImage">
              SECOND IMAGE URL
              <input
                value={this.state.secondImage}
                onChange={e => this.setState({ secondImage: e.target.value })}
                aria-label="secondImage"
                className="inventory-input"
                type="text"
                name="product-image-url"
                id="secondImage"
                required
              />
            </label>
            <label htmlFor="thirdImage">
              THIRD IMAGE URL
              <input
                value={this.state.thirdImage}
                onChange={e => this.setState({ thirdImage: e.target.value })}
                aria-label="thirdImage"
                className="inventory-input "
                type="text"
                name="product-image-url"
                id="thirdImage"
                required
              />
            </label>
            <label htmlFor="shortDescription">
              SHORT DESCRIPTION
              <textarea
                value={this.state.shortDescription}
                onChange={e =>
                  this.setState({ shortDescription: e.target.value })
                }
                aria-label="shortDescription"
                className="inventory-input"
                name="short-description"
                id="shortDescription"
                rows="2"
                required
              />
            </label>
            <label htmlFor="details">
              DETAILS
              <textarea
                value={this.state.details}
                onChange={e => this.setState({ details: e.target.value })}
                aria-label="details"
                className="inventory-input"
                name="product-details"
                rows="4"
                id="details"
                required
              />
            </label>
            <label htmlFor="price">
              PRICE
              <input
                value={this.state.price}
                onChange={e => this.setState({ price: e.target.value })}
                aria-label="price"
                className="inventory-input"
                type="number"
                step="0.01"
                name="product-price"
                id="price"
                required
              />
            </label>
            <label htmlFor="style">
              STYLE
              <select
                value={this.state.style}
                onChange={e => this.setState({ style: e.target.value })}
                className="product-style"
                name="bikini-style"
                required
              >
                <option value="one-piece">One piece swimsuit</option>
                <option value="two-piece">Two piece swimsuit</option>
              </select>
            </label>
            <button type="submit" className="submit-button">
              ADD PRODUCT
            </button>
            <button type="button" className="cancel-button">
              <Link className="cancel-button" to="/admin">
                Cancel
              </Link>
            </button>
          </fieldset>
        </form>
      </React.Fragment>
    );
  }
}

export default requiresLogin()(connect()(NewInventoryEntry));
