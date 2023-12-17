import React from "react";
import { Link } from "react-router-dom";
import './Navi.css'
function NavigationBar() {
  return (
    <div className="navbar navbar-expand-md navbar-light bg-info  p-1">
      <Link className="navbar-brand" to="">
        Amazon
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-end "
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav  pr-5  ">
          <li className="nav-item ">
            <Link className="nav-link" to="" >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="Register">
              Register
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="cart">
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavigationBar;
