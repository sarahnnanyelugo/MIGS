import React from "react";
import { Breadcrum } from "../../components/BreadCrumb/BreadCrumb";

function Admission() {
  return (
    <>
      <Breadcrum
        page1="About"
        currentPage="School History"
        pageUrl={"/events"}
        nav="About us"
      />
      <center>
        <div className="col-md-6 who-we-are">
          <h1>Admission Process</h1>
          <p>
            Please read all the admission instructions carefully before starting
            your registration. Thank you.
          </p>
        </div>
      </center>
    </>
  );
}

export default Admission;
