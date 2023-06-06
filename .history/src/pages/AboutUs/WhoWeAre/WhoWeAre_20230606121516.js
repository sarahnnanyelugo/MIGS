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
          <div className="col-md-8">
            <p>
              Welcome to Montessori International School, where academic
              excellence, moral education, practical learning, and engaging
              extracurricular activities converge to shape the brilliant minds
              of every child. Established in 1987 and approved in 1988,
              Montessori International School reverently upholds its Christian
              foundation and embraces the grace of God as the guiding principles
              of our educational journey. Our academic year is divided into
              three terms, each with a refreshing midterm break at its midpoint.
            </p>
            <p>
              At Montessori International School, our Vision is to empower every
              child to achieve educational fulfillment through divine
              intervention. Guided by our Mission, we are steadfast in our
              commitment to providing an exceptional, holistic education that
              combines academic excellence, moral values, and practical
              learning, all at an affordable cost. With an esteemed
              Parent-Teacher Association (P.T.A.) and a dedicated team of
              professional staff, we have consistently delivered excellence in
              education since our inception.
            </p>
          </div>
          <div className="col-md-4">
            {" "}
            <img
              className="tech-logo"
              src={Circle}
              alt="Scholar"
              width="100%"
            />
          </div>
        </div>
      </div>

      <Tour />
      <Prefooter />
    </>
  );
}

export default WhoWeAre;
