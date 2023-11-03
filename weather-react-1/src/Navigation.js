import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

export default class Navigation extends Component {
  render() {
    return (
      <header>
        <ul className="navigation-items">
          <li className="navigation-item">
            <Link to="/">Pretoria</Link>
          </li>
          <li className="navigation-item">
            <Link to="/Johannesburg">Johannesburg</Link>
          </li>
          <li className="navigation-item">
            <Link to="/Cape Town">Cape Town</Link>
          </li>
          <li className="navigation-item">
            <Link to="/East London">East London</Link>
          </li>
        </ul>
      </header>
    );
  }
}
