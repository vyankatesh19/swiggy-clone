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
  );
};

export default Banner;
