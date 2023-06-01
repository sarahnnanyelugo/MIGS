import React from "react";
import { Breadcrum } from "../../components/BreadCrumb/BreadCrumb";
import PageMenu from "../../components/PageMenu/PageMenu";
import Prefooter from "../../components/Prefooter/Prefooter";
import Tour from "../../components/Tour/Tour";
import "./about-us.scss";
function AboutUs() {
  return (
    <>
      <div className="col-md-12 landing-img">
        {/* <img
          className="tech-logo"
          src={LandingImg}
          alt="Scholar"
          width="100%"
        />{" "} */}
        <div className="centered2 col-md-5 offset-md-1">
          <h1>About Us</h1>
        </div>
      </div>
      <PageMenu />
      <Breadcrum
        page1="About"
        currentPage="Who we are"
        pageUrl={"/events"}
        nav="About us"
      />
      <center>
        <div className="col-md-6 who-we-are">
          <h1>Who we are</h1>
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

export default AboutUs;
