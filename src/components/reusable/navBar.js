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
        <Link href="/shop" className="link" aria-label="Shop">
          Shop
        </Link>
        <Link href="/new" className="link" aria-label="New">
          New
        </Link>
        <Link href="/about" className="link" aria-label="About">
          About
        </Link>
      </ul>
    </nav>
  );
}
