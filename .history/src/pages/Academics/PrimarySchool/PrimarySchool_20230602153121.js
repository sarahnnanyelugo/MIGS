import React from "react";
import LandingImg from "../../../assets/images/playground.png";
import Speaker from "../../../assets/images/speaking.png";
import Cooking from "../../../assets/images/cook.png";
import Cheering from "../../../assets/images/cheer.png";
import Speakers from "../../../assets/images/speakers.png";
import { Breadcrum } from "../../../components/BreadCrumb/BreadCrumb";
import PageMenu from "../../../components/PageMenu/PageMenu";

function PrimarySchool() {
  return (
    <>
      <div className="col-md-12 ">
        <img className="" src={LandingImg} alt="Scholar" width="100%" />{" "}
        <div className="centered col-md-5 offset-md-1">
          <h1>Academics</h1>
        </div>
      </div>
      <PageMenu
        page1="Early Years"
        url1={"/eyfs"}
        page2="Primary School"
        url2={"/primary"}
        page3="Special Education"
        url3={"/special-edu"}
        page4="Junior Seconday"
        url4={"/junior-sec"}
      />
      <Breadcrum
        page1="About"
        currentPage="Primary School"
        pageUrl={"/events"}
        nav="Academics"
      />
      <br />
      <br />
      <br />
      <center>
        <h1>Primary School</h1>
      </center>
      <div className="col-md-10 offset-md-1 flexy">
        <div className="col-md-8">
          <p>
            Our school works to meet the educational needs of students with a
            wide range of skills while ensuring that each family member’s child
            receives a suitable education. We seek to develop each student as a
            full person as we get them ready for junior high. It is enjoyable to
            observe the students become more capable of applying themselves to a
            range of projects and activities in the hectic environment of
            school.Every one of our students can follow their passions and
            skills, making the most of every day at our incredibly well-equipped
            school.
          </p>
          <br />
          <p>
            The MIS is committed to providing high quality teaching and
            assessment to enable all pupils to achieve their full potentials.
            This will be achieved through high quality teaching and learning
            opportunities, rigorous assessment training programme that allows
            for the delivery of high quality teaching, learning and assessments.
          </p>
        </div>
        <div className="col-md-3 offset-md-1">
          {" "}
          <img className="" src={Speaker} alt="Scholar" width="100%" />{" "}
        </div>
      </div>
    </>
  );
}

export default PrimarySchool;
