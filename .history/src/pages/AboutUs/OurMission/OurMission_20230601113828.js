import React from "react";
import { Breadcrum } from "../../../components/BreadCrumb/BreadCrumb";
import PageMenu from "../../../components/PageMenu/PageMenu";

function OurMission() {
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
          <h1>Our Mission</h1>
        </div>
      </div>
      <PageMenu
        page1="About us"
        hrl1={"/about-us"}
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
        currentPage="Our Mission"
        pageUrl={"/events"}
        nav="About us"
      />
      <center>
        <h1>Our Mission</h1>
      </center>
      <div className="col-md-10 offset-md-1 flexy">
        <div className="col-md-6">
          <ol>
            <li>
              To honor our commitment to provide affordable world- class
              education to every child.
            </li>
            <li>
              To provide a nurturing environment to empower the total child for
              excellence in academics and Christ mindedness
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default OurMission;
