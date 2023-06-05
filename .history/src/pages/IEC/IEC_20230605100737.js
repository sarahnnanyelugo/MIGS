import React from "react";
import LandingImg from "../../assets/images/slide.png";
import { Breadcrum } from "../../components/BreadCrumb/BreadCrumb";
function IEC() {
  return (
    <>
      {" "}
      <div className="col-md-12 ">
        <img className="" src={LandingImg} alt="Scholar" width="100%" />{" "}
        <div className="centered2 col-md-5 offset-md-1">
          <h1>Gallery</h1>
        </div>
      </div>
      <Breadcrum currentPage="Gallery" pageUrl={"/events"} />
      <br />
      <br />
      <br />{" "}
      <center>
        <h1></h1>
      </center>
    </>
  );
}

export default IEC;
