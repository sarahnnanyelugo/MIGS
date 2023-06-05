import React from "react";
import { Breadcrum } from "../../../components/BreadCrumb/BreadCrumb";
import PageMenu from "../../../components/PageMenu/PageMenu";
import Prefooter from "../../../components/Prefooter/Prefooter";
import Tour from "../../../components/Tour/Tour";
import LandingImg from "../../../assets/images/historyLanding.png";

import "./history.scss";
function History() {
  return (
    <>
      <div className="col-md-12">
        <img className="" src={LandingImg} alt="Scholar" width="100%" />{" "}
        <div className="centered2 col-md-5 offset-md-1">
          <h1>School History</h1>
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
        currentPage="School History"
        pageUrl={"/events"}
        nav="About us"
      />
      <br />
      <br />
      <br />
      <center>
        <div className="col-md-7 sch-history">
          <h1 className="grey-heading">School History</h1>
          <p>
            On behalf of the Management and staff of Montessori International
            School, we welcome you to our website. We are grateful for another
            opportunity to offer you our best and are dedicated to ensuring that
            your child grows up balanced in all endeavours of life and not just
            academically.
          </p>
        </div>
      </center>
      <div className="col-md-12 birthright-div2">
        <div className="col-md-12 flitered">
          {" "}
          <div className="col-md-10 offset-md-1 flexy">
            <div className="col-md-8 ">
              <div className="col-md-11 img-div">
                {" "}
                {/* <img
          className="tech-logo"
          src={LandingImg}
          alt="Scholar"
          width="100%"
        />{" "} */}
              </div>
            </div>{" "}
            <div className="col-md-4 ">
              <div className="col-md-11 img-div">
                {" "}
                {/* <img
          className="tech-logo"
          src={LandingImg}
          alt="Scholar"
          width="100%"
        />{" "} */}
              </div>
            </div>
          </div>{" "}
          <div className="col-md-10 offset-md-1 flexy mt2">
            {" "}
            <div className="col-md-4 ">
              <div className="col-md-11 img-div">
                {" "}
                {/* <img
          className="tech-logo"
          src={LandingImg}
          alt="Scholar"
          width="100%"
        />{" "} */}
              </div>
            </div>
            <div className="col-md-8 ">
              <div className="col-md-11 img-div">
                {" "}
                {/* <img
          className="tech-logo"
          src={LandingImg}
          alt="Scholar"
          width="100%"
        />{" "} */}
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
      <Tour />
      <Prefooter />
    </>
  );
}

export default History;
