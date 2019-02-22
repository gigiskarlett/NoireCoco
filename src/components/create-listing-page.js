import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

export function CreateListingPage(props) {
  return (
    <div className="home">
      <h2>Do GOOD</h2>
      <p>Create listings here</p>
    </div>
  );
}

export default CreateListingPage;
