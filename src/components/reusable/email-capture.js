import React from "react";

import { postEmail } from "../../actions/email-capture";
import { connect } from "react-redux";
import "./email-capture.css";

//Renders email capture to subscribe for updates
class EmailCapture extends React.Component {
  //captures state of email input
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
  }

  //handles submission of form and dispatches action to post email to database
  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(postEmail(this.state)).then(() => this.clearFields());
  }
  //clears field after submission
  clearFields() {
    this.setState({
      email: ""
    });
  }

  render() {
    return (
      <div className="email-container">
        <div className="email-box-container">
          <p className="call-to-action">Lets keep in touch</p>
          <section>
            <form
              className="email-capture"
              aria-live="polite"
              onSubmit={e => this.handleSubmit(e)}
            >
              <legend align="center" hidden>
                Lets keep in touch? Subscribe
              </legend>
              <input
                type="text"
                placeholder="Enter your email address"
                name="email-address-input"
                className="email-address-input"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
                required
              />
              <input type="submit" className="join-button" value="Join" />
            </form>
          </section>
        </div>
      </div>
    );
  }
}

export default connect()(EmailCapture);
