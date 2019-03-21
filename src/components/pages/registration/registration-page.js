import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import RegistrationForm from "./registration-form";
import { NavBar } from "../../reusable/navBar";
import { Footer } from "../../reusable/footer";
import "./registration-page.css";

export function RegistrationPage(props) {
  // If we are logged in (which happens automatically when registration
  // is successful) redirect to the inventory
  if (props.loggedIn) {
    return <Redirect to="/admin" />;
  }
  return (
    <div className="admin-home">
      <h2 className="registration-title">ADMINISTRATIVE PAGE FOR NOIRE COCO</h2>
      <RegistrationForm />
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
