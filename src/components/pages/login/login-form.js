import React from "react";

import { Link } from "react-router-dom";
import { Field, reduxForm, focus } from "redux-form";
import Input from "../../reusable/input";
import { login } from "../../../actions/auth";
import { required, nonEmpty } from "../../../validators";
import "./login-form.css";

//Renders login form
class LoginForm extends React.Component {
  //dispatches action for login, sends username and password
  onSubmit(values) {
    return this.props.dispatch(login(values.username, values.password));
  }

  render() {
    let error;
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      );
    }
    return (
      <form
        className="login-form"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
      >
        <h2 className="login-form-title">LOG IN</h2>
        <label className="login-form-label" htmlFor="username">
          Username
        </label>
        {error}
        <Field
          component={Input}
          type="text"
          name="username"
          id="username"
          validate={[required, nonEmpty]}
        />
        <label className="login-form-label" htmlFor="password">
          Password
        </label>
        <Field
          component={Input}
          type="password"
          name="password"
          id="password"
          validate={[required, nonEmpty]}
        />
        <div className="login-button-container">
          <button
            className="login-button"
            disabled={this.props.pristine || this.props.submitting}
          >
            Log in
          </button>
        </div>
        <div className="register-link-container">
          <Link className="register-link" to="/admin/register">
            Register
          </Link>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: "login",
  onSubmitFail: (errors, dispatch) => dispatch(focus("login", "username"))
})(LoginForm);
