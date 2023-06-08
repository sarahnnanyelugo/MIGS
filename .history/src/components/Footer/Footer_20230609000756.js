import React from "react";
import Tel from "../../assets/images/tel.png";
import Message from "../../assets/images/message.png";
import "./footer.scss";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo2.png";
import Logo2 from "../../assets/images/edu-logo.png";
import FB from "../../assets/images/fb.svg";
import YT from "../../assets/images/yt.svg";
import IS from "../../assets/images/is.svg";

function Footer() {
  return (
    <>
      <div className="col-md-10 offset-md-1  flexy footer-container">
        <div className="col-md-2 footer-contact">
          <h5>GET IN TOUCH</h5>
          <ul className="list-unstyled">
            <li>
              {" "}
              <img className="" src={Tel} alt="Scholar" width="10%" />
              (+234) 802 508 2340
            </li>{" "}
            <li>
              {" "}
              <img className="" src={Tel} alt="Scholar" width="10%" />
              (+234) 813 850 6540
            </li>{" "}
            <br />
            <li className="flexy flexyM">
              {" "}
              <img className="" src={Message} alt="Scholar" width="10%" />{" "}
              <Link to={"/"} className="footer-link">
                misgroupofschools@gmail.com
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-3 offset-md-2 logo-div">
          <center>
            {" "}
            <img className="f-logo" src={Logo} alt="Scholar" width="100%" />
            <p className="col-md-9">
              64 King Perekule Street, G.R.A Phase 2, Port Harcourt, Rivers
              State, Nigeria. P.O.BOX 11565
            </p>
            <h5>FOLLOW US ON</h5>
            <ul className="list-unstyled liist-inline">
              <li className="list-inline-item">
                <a
                  href="https://www.instagram.com/mislearningcenter/"
                  target="_blank"
                  className=""
                >
                  {" "}
                  <img className="" src={IS} alt="Scholar" width="100%" />
                </a>
              </li>{" "}
              <li className="list-inline-item">
                <a href="#" target="_blank" className="">
                  {" "}
                  <img className="" src={YT} alt="Scholar" width="100%" />
                </a>
              </li>{" "}
              <li className="list-inline-item">
                <a
                  href=" https://www.facebook.com/mislearningcenter/"
                  target="_blank"
                  className=""
                >
                  {" "}
                  <img className="" src={FB} alt="Scholar" width="100%" />
                </a>
              </li>
            </ul>
          </center>
        </div>
        <div className="col-md-4 offset-md-2 link-div">
          <h5>USEFUL LINKS</h5>
          <div className="col-md-12 flexy flexyM">
            <ul className="list-unstyled col-md-4 col-6">
              <li>
                <Link className="app-link" to={"/about-us"}>
                  About
                </Link>
              </li>
              <li>
                <Link className="app-link" to={"/admission"}>
                  Admission
                </Link>
              </li>
              <li>
                <Link className="app-link" to={"/eyfs"}>
                  Academics
                </Link>
              </li>
              <li>
                <Link className="app-link" to={"/e-shop"}>
                  e-shop
                </Link>
              </li>{" "}
              <li>
                <Link className="app-link" to={"/gallery"}>
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
                <Link className="app-link" to={"/eyfs"}>
                  Curriculum
                </Link>
              </li>{" "}
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-10  offset-md-1 footer-credits flexy ">
        <p className="first-para">
          2023 Montessori International Group of schools. All rights reserved
        </p>
        <div className="flexy flexyM ">
          <p className="mt1" style={{ marginRight: "5px" }}>
            Powered by:
          </p>
          <a href={"http://educare.school/"} target="_blank">
            {" "}
            <img className="" src={Logo2} alt="Scholar" width="60%" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
