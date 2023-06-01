import React from "react";
import { Breadcrum } from "../../components/BreadCrumb/BreadCrumb";

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
      </div>
    </>
  );
}

export default Admission;
