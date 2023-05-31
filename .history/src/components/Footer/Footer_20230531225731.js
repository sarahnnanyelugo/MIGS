import React from "react";
import Tel from "../../assets/images/tel.png";

function Footer() {
  return (
    <>
      <div className="col-md-10 offset-md-1  flexy">
        <div className="col-md-2">
          <h5>GET IN TOUCH</h5>
          <ul className="list-unstyled">
            <img className="tech-logo" src={Tel} alt="Scholar" width="10%" />{" "}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
