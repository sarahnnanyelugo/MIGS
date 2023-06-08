import React from "react";
import BG from "../../assets/images/suited2.png";

import "./prefooter.scss";
function Prefooter() {
  return (
    <div className="col-md-12 prefooter-container">
      <img className="tech-logo" src={BG} alt="Scholar" width="100%" />{" "}
      <div className="col-md-12 prefooter-innner">
        {" "}
        <center>
          <h1>
            We are waiting for <span style={{ fontSize: "80px" }}>YOU</span>
          </h1>
        </center>
        <div className=" offset-md-1">
          <div className="col-md-10 flexy flexyM">
            <div className="col-md-3 prefooter-btn col-3">
              {" "}
              <button className="app-btn prefooter-btn">Visit</button>
            </div>
            <div className="col-md-3 prefooter-btn col-3">
              {" "}
              <button className="app-btn   prefooter-btn">Apply</button>
            </div>
            <div className="col-md-3  prefooter-btn col-3">
              {" "}
              <button className="app-btn prefooter-btn">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prefooter;
