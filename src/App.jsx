import React from 'react';
import logo from './logo.png';
import './style.scss';

export default () => (
  <div className="app">
    <div className="content">
      <h1 className="message">Hello Egypt<span className="js">JS</span></h1>
      <img src={logo} className="logo" alt="tagawl logo" />
    </div>
  </div>
);
