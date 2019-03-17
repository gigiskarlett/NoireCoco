import React from "react";

import { connect } from "react-redux";
import { deleteInventoryItem } from "../../../actions/products";
import "./item.css";

//Renders items in the database
class InventoryItem extends React.Component {
  deleteItem(itemId) {
    this.props.dispatch(deleteInventoryItem(itemId))
  }
  render() {
    const products = this.props.products.map((product, i) => {
      return (
        <section className="product" key={i} id={product.id}>
          <section className="name">
            <h4 className="field-header">NAME</h4>
            <p className="inventory-list">{product.name}</p>
          </section>
          <section className="url">
            <h4 className="field-header">URL</h4>
            <p className="inventory-list">{product.url}</p>
          </section>
          <section className="image-url">
            <h4 className="field-header">IMAGE URL</h4>
            <p className="inventory-list">{product.imageUrl}</p>
          </section>
          <section className="second-image-url">
            <h4 className="field-header">SECOND IMAGE URL</h4>
            <p className="inventory-list">{product.secondImage}</p>
          </section>
          <section className="third-image-url">
            <h4 className="field-header">THIRD IMAGE URL</h4>
            <p className="inventory-list">{product.thirdImage}</p>
          </section>
          <section className="item-short-description">
            <h4 className="field-header">SHORT DESCRIPTION</h4>
            <p className="inventory-list">{product.shortDescription}</p>
          </section>
          <section className="item-details">
            <h4 className="field-header">DETAILS</h4>
            <p className="inventory-list">{product.details}</p>
          </section>
          <section className="item-price">
            <h4 className="field-header">PRICE</h4>
            <p className="inventory-list">${product.price}</p>
          </section>
          <section className="style">
            <h4 className="field-header">STYLE</h4>
            <p className="inventory-list">{product.style}</p>
          </section>
          <button
            id={product.id}
            type="button"
            className="delete-icon"
            alt="delete icon"
            onClick={e => {
              e.preventDefault();
              this.deleteItem(`${product.id}`);
            }}
          >X</button>
        </section>
      );
    });

    return (
      <section className="list-of-products">
        <ul className="inventory-items">{products}</ul>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.products
});

export default connect(mapStateToProps)(InventoryItem);
