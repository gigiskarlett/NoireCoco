import React from "react";

import { Link } from "react-router-dom";
import "./admin-page-nav-bar.css";

//Renders navigation bar for admin pages
export function AdminPagesNavBar() {
  return (
    <nav>
      <Link to="/">
        <img
          className="logo"
          src="https://i.ibb.co/VNZVnvr/imageedit-35-5868682626.png"
          alt="Noire Coco logo"
        />
      </Link>
      <ul className="admin-nav-links">
        <li className="logout-link">
          <Link className="link" aria-label="Logout" to="/">
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
}
