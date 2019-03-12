import React from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";

import NewInventoryEntry from "../components/pages/add-to-inventory"
import LandingPage from "../../src/components/pages/landing";
import { AboutUs } from "../../src/components/pages/about-us";
import ViewAllSwimwear from "../../src/components/pages/view-all-swimwear";
import { ShowOneProduct } from "../../src/components/pages/view-one-product";
import Inventory from "../../src/components/pages/inventory";

import { refreshAuthToken } from "../actions/auth";

export class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 // One hour
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }

    clearInterval(this.refreshInterval);
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/shop" component={ViewAllSwimwear} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/shop/:product" component={ShowOneProduct} />
        <Route exact path="/admin" component={Inventory} />
        <Route exact path="/admin/new-entry" component = {NewInventoryEntry}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));
