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
          <h1>About Us</h1>
        </div>
      </div>
      <PageMenu
        page1="About us"
        hrl1={"about-us"}
        page2="Our Mission"
        url2={"our-mission"}
        page3="School History"
        url3={"history"}
        page4="Our Achievements"
        url4={"achievements"}
        page5="Contact us"
        url5={"contact-us"}
      />
      <Breadcrum
        page1="About"
        currentPage="Who we are"
        pageUrl={"/events"}
        nav="About us"
      />
    </>
  );
}

export default OurMission;
