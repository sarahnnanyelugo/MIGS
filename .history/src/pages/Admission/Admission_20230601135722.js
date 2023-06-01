import React from "react";
import { Breadcrum } from "../../components/BreadCrumb/BreadCrumb";
import AdmissionProcess from "./AdmissionProcess/AdmissionProcess";

function Admission() {
  return (
    <>
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
          <div className="col-md-6">
            <div className="col-md-11">
              <AdmissionProcess />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admission;
