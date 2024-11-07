import React from "react";
import "./Banner.css"; // Import a CSS file for custom styling

const Banner = () => {
  return (
    <div className="container-fluid banner-container justify-content-center width-">
      <div className="row pt-5">
        <h1 className="display-4 fw-bold my-3 w-64">
          What are your favorite cuisines?
        </h1>
        <p className=" my-3 fs-4 text-white">
          Personalize your experience with swiggy...
        </p>
      </div>
    </div>

    
    // <div className="d-flex align-items-center justify-content-center text-center banner-container">
    //   <h1 className="text-white display-4 fw-bold mb-3">
    //     What are your favorite cuisines?
    //   </h1>
    //   <p className="text-uppercase text-white my-3 fs-5">
    //     Personalize your experience
    //   </p>
    // </div>
  );
};

export default Banner;
