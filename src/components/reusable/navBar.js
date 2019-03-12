import React from "react";

import "./navBar.css";

//Renders navigation bar component
export function NavBar(props) {
  return (
    <nav>
      <img
        className="logo"
        src="https://i.ibb.co/VNZVnvr/imageedit-35-5868682626.png"
        alt="Noire Coco logo"
      />
      <ul className="nav-links">
        <a href="#" className="link" aria-label="Shop">
          Shop
        </a>
        <a href="#" className="link" aria-label="New">
          New
        </a>
        <a href="#" className="link" aria-label="About">
          About
        </a>
      </ul>
    </nav>
  );
}

//change from a to Link
