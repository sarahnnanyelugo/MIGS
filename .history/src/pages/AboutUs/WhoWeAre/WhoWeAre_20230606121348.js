import React from "react";
import { Breadcrum } from "../../../components/BreadCrumb/BreadCrumb";
import PageMenu from "../../../components/PageMenu/PageMenu";
import Prefooter from "../../../components/Prefooter/Prefooter";
import Tour from "../../../components/Tour/Tour";
import LandingImg from "../../../assets/images/aboutLanding.png";
import Circle from "../../../assets/images/circle-img.png";

import "./about-us.scss";
function WhoWeAre() {
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
        url1={"about-us"}
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
        currentPage="Who we are"
        pageUrl={"/events"}
        nav="About us"
      />

      <div className="col-md-6 who-we-are">
        <center>
          <h1>Who we are</h1>
        </center>
        <div className="col-md-10 offset-md-1 flexy">
          <div className="col-md-8"></div>
          <div className="col-md-4"> <img
          className="tech-logo"
          src={LandingImg}
          alt="Scholar"
          width="100%"
        />
        </div>
      </div>

      <Tour />
      <Prefooter />
    </>
  );
}

export default WhoWeAre;
