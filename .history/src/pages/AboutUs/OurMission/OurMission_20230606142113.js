import React from "react";
import { Breadcrum } from "../../../components/BreadCrumb/BreadCrumb";
import PageMenu from "../../../components/PageMenu/PageMenu";
import Prefooter from "../../../components/Prefooter/Prefooter";
import Tour from "../../../components/Tour/Tour";
import LandingImg from "../../../assets/images/missionLanding.png";
import Lab from "../../../assets/images/lab_girl.png";

import "./our-mission.scss";
function OurMission() {
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
          <h1>Our Mission</h1>
        </div>
      </div>
      <PageMenu
        page1="Who we are"
        url1={"/about-us"}
        page2="Our Mission"
        url2={"/our-mission"}
        page3="School History"
        url3={"/Facility"}
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
      <br />
      <br />
      <br />
      <center>
        <h1 className="grey-heading">Our Mission</h1>
      </center>
      <br />
      <div className="col-md-10 offset-md-1 flexy statements">
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
            <li>
              To foster a community that prioritizes love, hard work and moral
              excellence.
            </li>
            <li>
              To deliver a rigorous and up to date academic curriculum through
              student-centered teaching and learning.
            </li>
            <li>
              To prioritize character development through extra-curricular and
              co-curricular activities
            </li>
            <li>
              To practice walking in love, kindness, humility and compassion in
              building strong and lasting relationships.
            </li>
            <li>
              To inspire every child to live out their purpose in God and make
              global impact
            </li>
          </ol>
        </div>
        <div className="offset-md-2 col-md-4 ">
          {" "}
          <img
            className="tech-logo"
            src={Lab}
            alt="Scholar"
            width="100%"
          />{" "}
        </div>
      </div>
      <center>
        <div className="col-md-9 vision">
          <h1 className="grey-heading">Our Vision</h1>
          <br />
          <br />
          <p>
            We believe that excellence is not only a birthright, but a gift from
            God
          </p>
          <p>
            We recognize that our students are created in the image of God, and
            we are committed to nurturing their minds in a way that honors God.
            Our vision is rooted in the teachings of Jesus Christ, who modeled
            excellence in all areas of His life while here on earth. We strive
            to follow his example by creating an environment that is guided by
            love, compassion and championing righteousness. Through our
            teachings, conscious actions and extracurricular activities, we
            believe we can inspire our students to become responsible leaders
          </p>
          <p>
            In addition to providing a rigorous and well researched academic
            curriculum, we also prioritize growth, social and emotional
            development from early years and beyond. We offer daily assemblies,
            a free Bible club, a character counts blog for the older students,
            and opportunities for daily prayer and reflection. We believe that
            these spiritual practices help students develop a deeper
            understanding of God’s love and purpose for their lives. Our
            students are encouraged to practice the values of forgiveness,
            kindness, and humility. We believe that these virtues are essential
            for building strong relationships and creating a culture of
            compassion and respect. We strive to create a community where every
            student feels valued and supported, and where they are inspired to
            reach their full potential in all areas of their lives.{" "}
          </p>
          <p>
            In summary, our school’s vision is to empower students to achieve
            excellence in a way that honors God and reflects the teachings of
            Jesus Christ. We are committed to providing a rigorous academic
            curriculum, nurturing spiritual growth, and fostering a community of
            love, compassion, and all-round character development
          </p>
        </div>
      </center>
      <center>
        <h1 className="grey-heading">Our Core values</h1>
      </center>
      <div className="col-md-12 flexy core-values">
        <div className="col-md-1">&nbsp;</div>
        <div className="col-md-2">
          <center>
            <div className="col-md-9 values value1">
              <h5>1</h5>
              <p>Christian Culture</p>
            </div>
          </center>
        </div>{" "}
        <div className="col-md-2">
          <center>
            <div className="col-md-9 values value2">
              <h5>2</h5>
              <p>Excellence</p>
            </div>
          </center>
        </div>{" "}
        <div className="col-md-2">
          <center>
            <div className="col-md-9 values value3">
              <h5>3</h5>
              <p>Family</p>
            </div>
          </center>
        </div>{" "}
        <div className="col-md-2">
          <center>
            <div className="col-md-9 values value4">
              <h5>4</h5>
              <p>Integrity</p>
            </div>
          </center>
        </div>{" "}
        <div className="col-md-2">
          <center>
            <div className="col-md-9 values value5">
              <h5>5</h5>
              <p>Lifelong Learning</p>
            </div>
          </center>
        </div>
      </div>
      <Tour />
      <Prefooter />
    </>
  );
}

export default OurMission;
