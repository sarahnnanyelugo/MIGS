import React from "react";
import Tel from "../../assets/images/tel.png";
import Message from "../../assets/images/message.png";
import "./footer.scss";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo2.png";

function Footer() {
  return (
    <>
      <div className="col-md-10 offset-md-1  flexy footer-container">
        <div className="col-md-2 footer-contact">
          <h5>GET IN TOUCH</h5>
          <ul className="list-unstyled">
            <li>
              {" "}
              <img
                className="tech-logo"
                src={Tel}
                alt="Scholar"
                width="10%"
              />{" "}
              (+234) 802 508 2340
              <br /> (+234) 813 850 6540
            </li>
            <li className="flexy flexyM">
              {" "}
              <img
                className="tech-logo"
                src={Message}
                alt="Scholar"
                width="10%"
              />{" "}
              <Link to={"/"}>misgroupofschools@gmail.com</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-3 offset-md-2">
          <center>
            {" "}
            <img className="tech-logo" src={Logo} alt="Scholar" width="100%" />
            <p>
              64 King Perekule Street, G.R.A Phase 2, Port Harcourt, Rivers
              State, Nigeria. P.O.BOX 11565
            </p>
            <h2>FOLLOW US ON</h2>
          </center>
        </div>
      </div>
    </>
  );
}

export default Footer;
