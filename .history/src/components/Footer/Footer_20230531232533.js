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
              <img className="" src={Tel} alt="Scholar" width="10%" /> (+234)
              802 508 2340
              <br /> (+234) 813 850 6540
            </li>
            <li className="flexy flexyM">
              {" "}
              <img className="" src={Message} alt="Scholar" width="10%" />{" "}
              <Link to={"/"}>misgroupofschools@gmail.com</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-3 offset-md-2 logo-div">
          <center>
            {" "}
            <img className="" src={Logo} alt="Scholar" width="100%" />
            <p className="col-md-9">
              64 King Perekule Street, G.R.A Phase 2, Port Harcourt, Rivers
              State, Nigeria. P.O.BOX 11565
            </p>
            <h5>FOLLOW US ON</h5>
          </center>
        </div>
        <div className="col-md-4 offset-md-2 link-div">
          <h5>USEFUL LINKS</h5>
          <div className="col-md-12 flexy flexyM">
            <ul className="list-unstyled col-md-4">
              <li>
                <Link className="app-link" to={""}>
                  About
                </Link>
              </li>
              <li>
                <Link className="app-link" to={""}>
                  Admission
                </Link>
              </li>
              <li>
                <Link className="app-link" to={""}>
                  Academics
                </Link>
              </li>
              <li>
                <Link className="app-link" to={""}>
                  e-shop
                </Link>
              </li>{" "}
              <li>
                <Link className="app-link" to={""}>
                  Gallery
                </Link>
              </li>
            </ul>{" "}
            <ul className="list-unstyled col-md-6">
              <li>
                <Link className="app-link" to={""}>
                  Download Prospectus
                </Link>
              </li>
              <li>
                <Link className="app-link" to={""}>
                  Careers
                </Link>
              </li>
              <li>
                <Link className="app-link" to={""}>
                  Webmail
                </Link>
              </li>
              <li>
                <Link className="app-link" to={""}>
                  Curriculum
                </Link>
              </li>{" "}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
