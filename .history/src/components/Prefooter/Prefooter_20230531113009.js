import React from "react";
import "./prefooter.scss";
function Prefooter() {
  return (
    <div className="col-md-12 prefooter-container">
      <center>
        <h1>
          We are waiting for <span>YOU</span>
        </h1>
      </center>
      <div className=" offset-md-1">
        <div className="col-md-10 flexy"<div className="col-md-3 prefooter-btn">
          {" "}
          <button className="app-btn prefooter-btn">Visit</button>
        </div>
        <div className="col-md-3 prefooter-btn">
          {" "}
          <button className="app-btn   prefooter-btn">Visit</button>
        </div>
        <div className="col-md-3  prefooter-btn">
          {" "}
          <button className="app-btn prefooter-btn">Visit</button>
        </div>></div>
      </div>
    </div>
  );
}

export default Prefooter;
