import React from "react";
import PropTypes from "prop-types";

export default function Navbar({ title = "AfaqAhmed", mode, toggling, handleColor, color }) {

  const flexStyle = {
    display: "flex",
    justifyContent:"center",
    alignItems: "center"
  }
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${color} text-${color}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {title}
          </a>
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
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
            <div style = {flexStyle}>
              <input
                type="color"
                className="form-control form-control-color"
                id="exampleColorInput"
                value="white"
                title="Choose your color"
                onChange={handleColor}
              />
              <label htmlFor="exampleColorInput" className="form-label mx-2">
                Color picker
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
