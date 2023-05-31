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
      <div className="flexy offset-md-4">
        <div className="col-md-2 ">
          {" "}
          <button className="app-btn prefooter-btn">Visit</button>
        </div>
        <div className="col-md-2  prefooter-btn">
          {" "}
          <button className="app-btn   prefooter-btn">Visit</button>
        </div>
        <div className="col-md-2  prefooter-btn">
          {" "}
          <button className="app-btn ">Visit</button>
        </div>
      </div>
    </div>
  );
}

export default Prefooter;
