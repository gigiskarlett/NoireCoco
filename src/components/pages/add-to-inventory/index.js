import React from "react";

import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { NavBar } from "../../reusable/navBar";
import { ReusableBanner } from "../../reusable/banner";
import { Footer } from "../../reusable/footer";
import { postItem } from "../../../actions/products";
import "./index.css";

class NewInventoryEntry extends React.Component {
  // onSubmit(event) {
  //   event.preventDefault();

  //     const value = this.input.value;
  //     this.props.dispatch(postProduct());

  //   this.input.value = "";
  //   this.input.focus();
  // }

  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(postItem(this.state.item));
  }

  newEntry(e) {
    this.setState({
      item: {
        name: this.refs.name.value,
        url: this.refs.url.value,
        imageUrl: this.refs.imageUrl.value,
        secondImage: this.refs.secondImage.value,
        thirdImage: this.refs.thirdImage.value,
        shortDescription: this.refs.shortDescription.value,
        details: this.refs.details.value,
        price: this.refs.price.value,
        style: this.refs.style.value
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ReusableBanner />
        <form
          className="inventory-form "
          aria-live="polite"
          onSubmit={e => this.handleSubmit(e)}
        >
          <legend>ADD INVENTORY</legend>
          <fieldset>
            <label htmlFor="name">
              NAME
              <input
                ref={name => (this.name = name)}
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
                ref={url => (this.url = url)}
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
                ref={imageUrl => (this.imageUrl = imageUrl)}
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
                ref={secondImage => (this.secondImage = secondImage)}
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
                ref={thirdImage => (this.thirdImage = thirdImage)}
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
                ref={shortDescription =>
                  (this.shortDescription = shortDescription)
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
                ref={details => (this.details = details)}
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
                ref={price => (this.price = price)}
                aria-label="price"
                className="inventory-input"
                type="text"
                name="product-price"
                id="price"
                required
              />
            </label>
            <label htmlFor="style">
              STYLE
              <select
                ref={select => (this.style = select)}
                className="product-style"
                name="bikini-style"
                required
              >
                <option value="one-piece bikini">One piece bikini</option>
                <option value="two-piece bikini">Two piece bikini</option>
              </select>
            </label>
            <button type="submit" className="submit-button">
              ADD Product
            </button>
            <button type="button" className="cancel-button">
              <Link className="cancel-button" to="/admin">
                Cancel
              </Link>
            </button>
          </fieldset>
        </form>
        <Footer />
      </React.Fragment>
    );
  }
}

export default connect()(NewInventoryEntry);
