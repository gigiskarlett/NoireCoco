import React from "react";

import "./inventory-modal.css";

export function InventoryModal(props) {
  return (
    <React.Fragment>
      <div class="modal-container">
        <form class="inventory-modal " aria-live="polite">
          <legend>ADD INVENTORY</legend>
          <fieldset>
            <label for="product-name">
              Product name
              <input
                className="inventory-input "
                type="text"
                name="product-name"
                id="product-name"
                required
              />
            </label>
            <label for="product-image-url">
              Image URL
              <input
                className="inventory-input "
                type="text"
                name="product-image-url"
                id="product-image-url"
                required
              />
            </label>

            <label for="short-description">Short description of product
            <textarea
              className="inventory-input"
              name="short-description"
              id="short-description"
              rows="2"
              required
            />
            </label>
            <label for="product-price">
              Price
              <input
                className="inventory-input"
                type="text"
                name="product-price"
                id="product-price"
                required
              />
            </label>
            <label for="product-details">
              Product details
              <textarea
                className="inventory-input"
                name="product-details"
                rows="4"
                id="product-details"
                required
              />
            </label>
            <label for="product-style">
            Style
            <select className="product-style" id="product-style" required>
            <option value="one-piece">One piece</option>
            <option value="two-piece-bikini">Two piece bikini</option>
          </select>
            </label>
            <button type="submit" className="submit-button">
              ADD Product
            </button>
            <button type="submit" class="cancel-button">
              Cancel
            </button>
          </fieldset>
        </form>
      </div>
    </React.Fragment>
  );
}

//change to class
