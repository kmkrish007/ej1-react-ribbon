import React, { Component } from "react";
import ReactDOM from "react-dom";
import createClass from "create-react-class";
import App from "./sample.jsx";

window.React = React;
window.ReactDOM = ReactDOM;
window.createReactClass = createClass;

ReactDOM.render(<App />, document.getElementById("root"));
