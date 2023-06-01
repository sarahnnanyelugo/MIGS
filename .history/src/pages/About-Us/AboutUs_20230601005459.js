import React from "react";
import { Breadcrum } from "../../components/BreadCrumb/BreadCrumb";
import PageMenu from "../../components/PageMenu/PageMenu";
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
        <div className="centered col-md-5 offset-md-1">
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
        <div className="col-md-6">
          <h1>Who we are</h1>
          <p></p>
        </div>
      </center>
    </>
  );
}

export default AboutUs;
