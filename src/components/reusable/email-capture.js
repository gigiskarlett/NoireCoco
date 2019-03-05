import React from "react";

import "./email-capture.css";

//Renders email capture to subscribe for updates
export function EmailCapture() {
  return (
    <div className="email-container">
      <div className="email-box-container">
        <p className="call-to-action">Lets keep in touch</p>
        <section>
          <form className="email-capture" action="#">
            <legend align="center" hidden>
              Lets keep in touch? Subscribe
            </legend>
            <input
              type="text"
              placeholder="Enter your email address"
              name="email-address-input"
              className="email-address-input"
              required
            />
            <input type="submit" className="join-button" value="Join" />
          </form>
        </section>
      </div>
    </div>
  );
}
