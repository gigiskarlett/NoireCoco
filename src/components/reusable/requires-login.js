import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

//Handles unauthenticated users by redirecting back to login page if user tries to access admin pages
export default () => Component => {
  function RequiresLogin(props) {
    const { authenticating, loggedIn, error, ...passThroughProps } = props;
    if (authenticating) {
      return <div>Logging in...</div>;
    } else if (!loggedIn || error) {
      return <Redirect to="/login" />;
    }

    return <Component {...passThroughProps} />;
  }
  const displayName = Component.displayName || Component.name || "Component";
  RequiresLogin.displayName = `RequiresLogin(${displayName})`;

  const mapStateToProps = (state, props) => ({
    authenticating: state.auth.loading,
    loggedIn: state.auth.currentUser !== null,
    error: state.auth.error
  });
  return connect(mapStateToProps)(RequiresLogin);
};
