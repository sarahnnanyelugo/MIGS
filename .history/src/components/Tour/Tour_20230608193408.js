import React from "react";
import "./tour.scss";
import TourImg from "../../assets/images/tour_bg.png";

function Tour() {
  return (
    <div className="col-md-11 offset-md-1 flexy tour-container">
      <div className="col-md-2 mtt">
        <div className="col-md-12">
          {" "}
          <h1>
            Take a <span>Virtual Tour</span>
          </h1>
          <p>
            Take a virtual tour of Montessori International Group of Schools.
            Visit our classrooms, pupils, facilities and learn more about us.
          </p>
        </div>
      </div>
      <div className="col-md-8 offset-md-2 vidieo-div">
        <div className="col-md-10 video-inner offset-md-1 col-12">
          {" "}
          <img className="col-md-12" src={TourImg} alt="Scholar" width="" />
        </div>
      </div>
    </div>
  );
}

export default Tour;
