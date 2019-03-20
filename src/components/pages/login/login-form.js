import React from "react";

import { NavBar } from "../../reusable/navBar";
import { Footer } from "../../reusable/footer";
import { Field, reduxForm, focus } from "redux-form";
import Input from "../../reusable/input";
import { login } from "../../../actions/auth";
import { required, nonEmpty } from "../../../validators";

export class LoginForm extends React.Component {
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
      <React.Fragment>
        <NavBar />
        <div className="login-form-container">
          <form
            className="login-form"
            onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
          >
            {error}
            <label className="login-form-label" htmlFor="username">
              Username
            </label>
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
          </form>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default reduxForm({
  form: "login",
  onSubmitFail: (errors, dispatch) => dispatch(focus("login", "username"))
})(LoginForm);
