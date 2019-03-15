import React from "react";

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import "./navBar.css";

//Renders navigation bar component
export function NavBar(props) {
  return (
    <nav>
    <Link to="/">
      <img
        className="logo"
        src="https://i.ibb.co/VNZVnvr/imageedit-35-5868682626.png"
        alt="Noire Coco logo"
      />
      </Link>
      <ul className="nav-links">
        <li className="link"><Link className="link" aria-label="Shop" to="/shop">Shop</Link></li>
        <li className="link"><Link className="link" aria-label="New"to="/new">New</Link></li>
        <li className="link"><Link className="link"aria-label="About"to="/about">About</Link></li>
      </ul>
    </nav>
  );
}

//change from a to Link
