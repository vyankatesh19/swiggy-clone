import React from "react";
import logo from "../../assets/swiggy-logo.png";
import "./Header.css"; // Import your CSS file

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

    // <nav className="navbar bg-body-tertiary sticky-top">
    //     <div className="container-fluid d-flex align-items-center">
    //         <a className="navbar-brand" href="#">
    //             <img
    //                 src={logo}
    //                 alt="Logo"
    //                 className="logo"
    //             />
    //         </a>
    //         <form className="d-flex ms-auto" role="search">
    //             <div className="search-container">
    //                 <input
    //                     className="form-control"
    //                     type="search"
    //                     placeholder="Search for restaurant and food"
    //                     aria-label="Search"
    //                 />
    //                 <i className="fas fa-search search-icon"></i> {/* Search icon */}
    //             </div>
    //         </form>
    //     </div>
    // </nav>
  );
};

export default Header;
