import React from "react";

import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { NavBar } from "../../reusable/navBar";
import { ReusableBanner } from "../../reusable/banner";
import { Footer } from "../../reusable/footer";
import { PostProduct } from "../../../actions/products";
import "./index.css";

class NewInventoryEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "one-piece bikini" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(PostProduct());
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {

    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [secondImage, setSecondImage] = useState("");
    const [thirdImage, setThirdImage] = useState("");
    const [details, setDetails] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [price, setPrice] = useState("");
    const [style, setStyle] = useState("");
    const [url, setUrl] = useState("");
    return (
      <React.Fragment>
        <NavBar />
        <ReusableBanner />
        <form className="inventory-form " aria-live="polite">
          <legend>ADD INVENTORY</legend>
          <fieldset>
            <label for="name">
              NAME
              <input
                value={name}
                onChange={e => setName(e.target.value)}
                aria-label={name}
                aria-required="true"
                className="inventory-input "
                type="text"
                name="product-name"
                id="name"
                required
              />
            </label>
            <label for="url">
              URL
              <input
                value={url}
                onChange={e => setUrl(e.target.value)}
                aria-label={url}
                aria-required="true"
                className="inventory-input "
                type="text"
                name="product-image-url"
                id="url"
                required
              />
            </label>
            <label for="imageUrl">
              IMAGE URL
              <input
                value={imageUrl}
                onChange={e => setImageUrl(e.target.value)}
                aria-label={imageUrl}
                className="inventory-input "
                type="text"
                name="product-image-url"
                id="imageUrl"
                required
              />
            </label>
            <label for="secondImage">
              SECOND IMAGE URL
              <input
                value={secondImage}
                onChange={e => setSecondImage(e.target.value)}
                aria-label={secondImage}
                className="inventory-input"
                type="text"
                name="product-image-url"
                id="secondImage"
                required
              />
            </label>
            <label for="thirdImage">
              THIRD IMAGE URL
              <input
                value={thirdImage}
                onChange={e => setThirdImage(e.target.value)}
                aria-label={thirdImage}
                className="inventory-input "
                type="text"
                name="product-image-url"
                id="thirdImage"
                required
              />
            </label>
            <label for="shortDescription">
              SHORT DESCRIPTION
              <textarea
                value={shortDescription}
                onChange={e => setShortDescription(e.target.value)}
                aria-label={shortDescription}
                className="inventory-input"
                name="short-description"
                id="shortDescription"
                rows="2"
                required
              />
            </label>
            <label for="details">
              DETAILS
              <textarea
                value={details}
                onChange={e => setDetails(e.target.value)}
                aria-label={details}
                className="inventory-input"
                name="product-details"
                rows="4"
                id="details"
                required
              />
            </label>
            <label for="price">
              PRICE
              <input
                value={price}
                onChange={e => setPrice(e.target.value)}
                aria-label={price}
                className="inventory-input"
                type="text"
                name="product-price"
                id="price"
                required
              />
            </label>
            <label for="style">
              STYLE
              <select
                value={this.state.value}
                onChange={this.handleChange}
                className="product-style"
                id="style"
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
