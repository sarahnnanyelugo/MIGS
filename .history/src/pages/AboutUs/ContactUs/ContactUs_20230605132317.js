import React from "react";
import { Breadcrum } from "../../../components/BreadCrumb/BreadCrumb";
import PageMenu from "../../../components/PageMenu/PageMenu";
import Prefooter from "../../../components/Prefooter/Prefooter";
import Tour from "../../../components/Tour/Tour";
import LandingImg from "../../../assets/images/contact-us_bg.png";
import Icon1 from "../../../assets/images/tel.png";
import Icon2 from "../../../assets/images/message.png";

import "./contact.scss";
function ContactUs() {
  return (
    <>
      <div className="col-md-12">
        <img
          className="tech-logo"
          src={LandingImg}
          alt="Scholar"
          width="100%"
        />{" "}
        <div className="centered2 col-md-5 offset-md-1">
          <h1>About Us</h1>
        </div>
      </div>
      <PageMenu
        page1="Who we are"
        url1={"/about-us"}
        page2="Our Mission"
        url2={"/our-mission"}
        page3="School History"
        url3={"/history"}
        page4="Our Achievements"
        url4={"/achievements"}
        page5="Contact us"
        url5={"/contact-us"}
      />
      <Breadcrum
        page1="About"
        currentPage="Contact Us"
        pageUrl={"/events"}
        nav="About us"
      />
      <br />
      <br />
      <br />
      <center>
        <div className="col-md-6 sch-history">
          <h1 className="grey-heading">Contact Us</h1>
          <p>We’re so delighted to hear from you!</p>
        </div>
      </center>
      <div className="col-md-10 offet-md-1 flexy">
        <div className="col-md-6">
          <div className="col-md-11">
            <h6>Montessori International Group of Schools</h6>
            <ul className="col-md-3 list-unstyled">
              <li>
                <img className="" src={Icon1} alt="Scholar" width="10%" />{" "}
                <a href="">Misgroupofschools@gmail.com</a>
              </li>{" "}
              <li>
                <img className="" src={Icon1} alt="Scholar" width="10%" />{" "}
                (+234) 802 508 2340 <br />
                (+234) 813 850 6540
              </li>
            </ul>
          </div>
        </div>{" "}
        <div className="col-md-6">
          <div className="col-md-11"></div>
        </div>
      </div>
      <Tour />
      <Prefooter />
    </>
  );
}

export default ContactUs;
