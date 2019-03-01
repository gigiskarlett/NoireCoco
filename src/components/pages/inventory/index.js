import React from "react";

import "./index.css";
import { NavBar } from "../../reusable/navBar";
import { ReusableBanner } from "../../reusable/reusable-banner";
import { Footer } from "../../reusable/footer";

export class Inventory extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ReusableBanner />
        <div className="add-button-container">
        <button className="add-button"><img className="plus-icon" src="https://i.ibb.co/wYrwDgM/icons8-plus-math-60.png" alt="plus-icon"/>ADD NEW</button>
        </div>
        <section className="list-of-products">
          <section className="product">
            <section className="name">
              <h4>NAME</h4>
              <p className="inventory-list"> BLABLABLA BIKINI</p>
            </section>
            <section className="image-url">
              <h4>IMAGE URL</h4>
              <p className="inventory-list"> SOME URLS</p>
            </section>
            <section className="description">
              <h4>DESCRIPTION</h4>
              <p className="inventory-list">
                High Rise Thong Bikini Bottoms...
              </p>
            </section>
            <section className="price">
              <h4>PRICE</h4>
              <p className="inventory-list">$30.00</p>
            </section>
            <p>delete</p>
          </section>
          <section className="product">
            <section className="name">
              <h4>NAME</h4>
              <p className="inventory-list"> BLABLABLA BIKINI</p>
            </section>
            <section className="image-url">
              <h4>IMAGE URL</h4>
              <p className="inventory-list"> SOME URLS</p>
            </section>
            <section className="description">
              <h4>DESCRIPTION</h4>
              <p className="inventory-list">
                High Rise Thong Bikini Bottoms...
              </p>
            </section>
            <section className="price">
              <h4>PRICE</h4>
              <p className="inventory-list">$30.00</p>
            </section>
            <p>delete</p>
          </section>
        </section>
        <div className="empty-space"></div>
        <Footer />
      </React.Fragment>
    );
  }
}
