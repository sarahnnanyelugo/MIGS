import React from "react";
import LandingImg from "../../../assets/images/SE.png";
import { Breadcrum } from "../../../components/BreadCrumb/BreadCrumb";
import PageMenu from "../../../components/PageMenu/PageMenu";
import Prefooter from "../../../components/Prefooter/Prefooter";
import Tour from "../../../components/Tour/Tour";
import "./special-edu.scss";
function SpecialEducation() {
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
        currentPage="Special Education"
        pageUrl={"/events"}
        nav="Academics"
      />
      <br />
      <br />
      <br />
      <center>
        <div className="col-md-8">
          <h1>Special Education</h1>
          <p>
            Technology and science are evolving, we are moving from the era
            where we understand that genetics and the environment alone are
            crucial for development to a better understanding that exposing your
            child to learning experiences tailored to brain development, is key
            to helping your child reach his or her full potential! Brain studies
            show that the highest sensitivity to learning new skills occurs
            during the first four years. Early exposure to specific activities
            will postively affect the architecture of your child’s brain and
            boost their academic outcomes.
          </p>
        </div>
      </center>
      <div className="col-md-10 flexy special-edu offset-md-1">
        <div className="col-md-6">
          <div className="col-md-11 img-div"></div>
        </div>
        <div className="col-md-6">
          <div className="col-md-11 img-div"></div>
        </div>
      </div>
      <center>
        <div className="col-md-7">
          <center>
            <p>
              The MIS EYFS was created and designed to guide your child through
              those crucial early years. We aid your child’s development through
              activities that boost their linguistic, cognitive,social and
              emotional development areas.
            </p>
            <br />
            <br />
            <p>
              In the early years of your baby’s life your baby is competent,
              active and insightful. Numerous studies have shown that babies are
              constantly using their observations to build theories and
              knowledge that will help them relate with the world around them.
              Meaning they are not passive and neither should we be when caring
              for them.
            </p>
            <div className="apply-div">
              {" "}
              <p>Admission into the EYFS is open for September 2023</p>
              <Link className="apply-link">Apply now</Link>
            </div>
          </center>
        </div>
      </center>
      <Tour />
      <Prefooter />
    </>
  );
}

export default SpecialEducation;
