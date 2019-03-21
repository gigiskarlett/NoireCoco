import React from "react";
import { connect } from "react-redux";
import { NavBar } from "../../reusable/navBar";
import { Redirect } from "react-router-dom";
import "./login-form.css";
import LoginForm from "./login-form";

class LoginPage extends React.Component {
  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/admin" />;
    }
    return (
      <React.Fragment>
        <NavBar />
        <div className="login-page">
          <h2 className="login-page-title">
            ADMINISTRATIVE PAGE FOR NOIRE COCO
          </h2>
          <div className="login-form-container">
            <LoginForm />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);
