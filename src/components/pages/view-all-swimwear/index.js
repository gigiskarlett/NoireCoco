import React from "react";

import { NavBar } from "../../reusable/navBar";
import { EmailCapture } from "../../reusable/email-capture";
import { Filter } from "../../reusable/filter";
import { Product } from "../../reusable/product";
import { Footer } from "../../reusable/footer";

import "./index.css";

export function ViewAllSwimwear() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="pink-banner">
        <EmailCapture />
      </div>
      <Filter />
      <section className="swimwear-products">
        <Product />
      </section>
      <Footer />
    </React.Fragment>
  );
}
