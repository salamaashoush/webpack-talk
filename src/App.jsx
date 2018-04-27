import React from "react";
import { hot } from "react-hot-loader";
import logo from "./logo.png";
import "./style.scss";

const App = () => (
  <div className="app">
    <div className="content">
      <h1 className="message">
        Hello Egypt<span className="js">JS</span>
      </h1>
      <img src={logo} className="logo" alt="tagawl logo" />
    </div>
  </div>
);

export default hot(module)(App);
