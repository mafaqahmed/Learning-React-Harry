import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar({
  title = "AfaqAhmed",
  mode,
  toggling,
  handleColor,
  color,
}) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${mode} bg-${color} text-${color}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {title}
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>

            <div className="d-flex">
              <input
                type="color"
                className="form-control form-control-color"
                id="exampleColorInput"
                value="white"
                title="Choose your color"
                onChange={handleColor}
              />
              <label
                htmlFor="exampleColorInput"
                className="form-check-label mx-2"
                style={{ color: mode === "dark" ? "white" : "black" }}
              >
                Color Picker
              </label>
            </div>
            <div
              className={`form-check form-switch text-${
                mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                onClick={toggling}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Enable Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
};

// Navbar.defaultProps = {
//     title : "AfaqAhmed"
// }
