import React from "react";
import { Breadcrum } from "../../components/BreadCrumb/BreadCrumb";
import AdmissionProcess from "./AdmissionProcess/AdmissionProcess";
import "./admission.scss";
import AdmissionForm from "./AdmissionForm/AdmissionForm";
import Tour from "../../components/Tour/Tour";
import Prefooter from "../../components/Prefooter/Prefooter";
import LandingImg from "../../assets/images/admissionLanding.png";

function Admission() {
  return (
    <>
      <div className="col-md-12 landing-img">
        <img
          className="tech-logo"
          src={LandingImg}
          alt="Scholar"
          width="100%"
        />{" "}
        <div className="centered2 col-md-5 offset-md-1">
          <h1>Admission</h1>
        </div>
      </div>
      <Breadcrum currentPage="Admission" pageUrl={"/events"} />
      <div className="col-md-12 admission-div">
        <center>
          <div className="col-md-6 who-we-are">
            <h1>Admission Process</h1>
            <p>
              Please read all the admission instructions carefully before
              starting your registration. Thank you.
            </p>
          </div>
        </center>
        <div className="col-md-10 offset-md-1 flexy">
          <div className="col-md-7">
            <div className="col-md-11">
              <AdmissionProcess />
            </div>
          </div>
          <div className="col-md-5">
            <AdmissionForm />
          </div>
        </div>
      </div>
      <Tour />
      <Prefooter />
    </>
  );
}

export default Admission;
