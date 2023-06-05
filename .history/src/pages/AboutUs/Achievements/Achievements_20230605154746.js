import React from "react";
import { Breadcrum } from "../../../components/BreadCrumb/BreadCrumb";
import PageMenu from "../../../components/PageMenu/PageMenu";
import Prefooter from "../../../components/Prefooter/Prefooter";
import Tour from "../../../components/Tour/Tour";
import LandingImg from "../../../assets/images/achievementLanding.png";
import Pic1 from "../../assets/images/pic1.png";
import Pic2 from "../../assets/images/pic2.png";
import Pic3 from "../../assets/images/pic3.png";
import Pic4 from "../../assets/images/pic4.png";
import Pic5 from "../../assets/images/pic5.png";
import Pic6 from "../../assets/images/pic6.png";
import Pic7 from "../../assets/images/pic7.png";
import Pic8 from "../../assets/images/pic8.png";
import Pic9 from "../../assets/images/pic9.png";
import Pic10 from "../../assets/images/pic10.png";
import Pic11 from "../../assets/images/pic11.png";
import Pic12 from "../../assets/images/pic12.png";
import Pic13 from "../../assets/images/pic13.png";
import Pic14 from "../../assets/images/pic14.png";
import Pic15 from "../../assets/images/pic15.png";
import Pic16 from "../../assets/images/pic16.png";
import Pic17 from "../../assets/images/pic17.png";
import Pic18 from "../../assets/images/pic18.png";
import Pic19 from "../../assets/images/pic19.png";
import Pic20 from "../../assets/images/pic20.png";
import "./achievements.scss";

const images = [
  Pic1,
  Pic2,
  Pic3,
  Pic4,
  Pic5,
  Pic6,
  Pic7,
  Pic8,
  Pic9,
  Pic10,
  Pic12,
  Pic13,
  Pic8,
  Pic14,
  Pic15,
  Pic16,
  Pic17,
  Pic18,
  Pic19,
  Pic20,
];
function Achievements() {
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
        currentPage="Our achievements"
        pageUrl={"/events"}
        nav="About us"
      />
      <br />
      <br />
      <br />
      <center>
        <div className="col-md-7 achievement">
          <h1 className="grey-heading">Our achievements</h1>
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

export default Achievements;
