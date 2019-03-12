import React from "react";

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { NavBar } from "../../reusable/navBar";
import { ReusableBanner } from "../../reusable/banner";
import { Footer } from "../../reusable/footer";
import "./index.css";

export default function NewInventoryEntry(props) {
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
                  className="inventory-input "
                  type="text"
                  name="product-image-url"
                  id="secondImage"
                  required
                />
              </label>
              <label for="thirdImage">
                THIRD IMAGE URL
                <input
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
                  className="inventory-input"
                  name="short-description"
                  id="shortDescription"
                  rows="2"
                  required
                />
              </label>
              <label for="product-details">
                DETAILS
                <textarea
                  className="inventory-input"
                  name="product-details"
                  rows="4"
                  id="product-details"
                  required
                />
              </label>
              <label for="price">
                PRICE
                <input
                  className="inventory-input"
                  type="text"
                  name="product-price"
                  id="price"
                  required
                />
              </label>
              <label for="product-style">
                STYLE
                <select className="product-style" id="product-style" required>
                  <option value="one-piece bikini">One piece</option>
                  <option value="two-piece bikini">Two piece bikini</option>
                </select>
              </label>
              <button type="submit" className="submit-button">
                ADD Product
              </button>
              <button type="button" className="cancel-button">
                <Link className="cancel-button" to="/admin">Cancel</Link>
              </button>
            </fieldset>
          </form>
          <Footer />
    </React.Fragment>
  );
}

