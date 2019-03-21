import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { NavBar } from "../../reusable/navBar";
import { Footer } from "../../reusable/footer";
import { Field, reduxForm, focus } from "redux-form";
import Input from "../../reusable/input";
import { Redirect } from "react-router-dom";
import { login } from "../../../actions/auth";
import { required, nonEmpty } from "../../../validators";
import "./login-form.css";
import LoginForm from "./login-form";

class LoginPage extends React.Component {
  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/admin" />;
    }
    return (
      <div className="login-page">
        <NavBar />
        <h2 className="login-page-title">ADMINISTRATIVE PAGE FOR NOIRE COCO</h2>
        <div className="login-form-container">
          <LoginForm />
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);
