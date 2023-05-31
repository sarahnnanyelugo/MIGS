import React from "react";
import "./prefooter.scss";
function Prefooter() {
  return (
    <div className="col-md-12 prefooter-container">
      <center>
        <h2>
          We are waiting for <span>YOU</span>
        </h2>
      </center>
      <div className="flexy"></div>
      <div className="col-md-2">
        {" "}
        <button className="app-btn ">Visit</button>
      </div>
      <button className="app-btn">Visit</button>
      <button className="app-btn">Visit</button>
    </div>
  );
}

export default Prefooter;
