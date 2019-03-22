import React from "react";

import { connect } from "react-redux";
import { clearAuth } from "../../actions/auth";
import { Link } from "react-router-dom";
import "./admin-page-nav-bar.css";

//Renders navigation bar for admin pages
class AdminPagesNavBar extends React.Component {
  logout() {
    this.props.dispatch(clearAuth());
  }
  render() {
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
            <p
              className="logout-link"
              aria-label="Logout"
              onClick={e => {
                e.preventDefault();
                this.logout();
              }}
            >
              Logout
            </p>
          </li>
        </ul>
      </nav>
    );
  }
}

export default connect()(AdminPagesNavBar);
