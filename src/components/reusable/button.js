import React from "react";

import "./button.css";

//Renders button
export function Button(props) {
  return <button className="button">{props.text}</button>;
}
