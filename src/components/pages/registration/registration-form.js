import React from "react";

import { Link } from "react-router-dom";
import { Field, reduxForm, focus } from "redux-form";
import { registerUser } from "../../../actions/users";
import { login } from "../../../actions/auth";
import Input from "../../reusable/input";
import "./registration-form.css";
import { required, nonEmpty, matches, length, isTrimmed } from "./validators";
const passwordLength = length({ min: 6, max: 72 });
const matchesPassword = matches("password");

class RegistrationForm extends React.Component {
  onSubmit(values) {
    const { username, password, firstName, lastName, signupcode } = values;
    const user = { username, password, firstName, lastName, signupcode };
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)));
  }

  render() {
    return (
      <div className="registration-form-container">
        <form
          className="registration-form"
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
        >
          <h2 className="register-form-title">REGISTER</h2>
          <label className="registration-label" htmlFor="firstName">
            First name
          </label>
          <Field component={Input} type="text" name="firstName" />
          <label className="registration-label" htmlFor="lastName">
            Last name
          </label>
          <Field component={Input} type="text" name="lastName" />
          <label className="registration-label" htmlFor="username">
            Username
          </label>
          <Field
            component={Input}
            type="text"
            name="username"
            validate={[required, nonEmpty, isTrimmed]}
          />
          <label className="registration-label" htmlFor="password">
            Password
          </label>
          <Field
            component={Input}
            type="password"
            name="password"
            validate={[required, passwordLength, isTrimmed]}
          />
          <label className="registration-label" htmlFor="passwordConfirm">
            Confirm password
          </label>
          <Field
            component={Input}
            type="password"
            name="passwordConfirm"
            validate={[required, nonEmpty, matchesPassword]}
          />

          <label className="registration-label" htmlFor="signupcode">
            signup code
          </label>
          <Field
            component={Input}
            type="signupcode"
            name="passwordConfirm"
            validate={[required, nonEmpty, matchesPassword]}
          />

          <div className="registration-button-container">
            <button
              className="registration-button"
              type="submit"
              disabled={this.props.pristine || this.props.submitting}
            >
              Register
            </button>
          </div>
          <div className="login-link-container">
            <Link className="login-link" to="/admin/login">
              Login
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "registration",
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus("registration", Object.keys(errors)[0]))
})(RegistrationForm);
