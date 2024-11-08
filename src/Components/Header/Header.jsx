import React from "react";
import logo from "../../assets/swiggy-logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="container-fluid header-container">
      <div className="row justify-content-between">
        <div className="col-4">
          <img className="logo" src={logo} alt="Logo" />
        </div>
        <div className="col-4">
          <form className="d-flex ms-auto search-container" role="search">
            <input
              className="form-control"
              type="search"
              placeholder="Search for restaurant and food"
              aria-label="Search"
            />
            <i className="fas fa-search search-icon"></i> {/* Search icon */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
