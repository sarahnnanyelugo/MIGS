import React from "react";
import { Breadcrum } from "../../../components/BreadCrumb/BreadCrumb";
import PageMenu from "../../../components/PageMenu/PageMenu";
// import LandingImg from "../../assets/images/table.jpeg";

function EYFS() {
  return (
    <>
      <div className="col-md-12 landing-img">
        {/* <img className="" src={LandingImg} alt="Scholar" width="100%" />{" "} */}
        <div className="centered2 col-md-5 offset-md-1">
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
        currentPage="Contact Us"
        pageUrl={"/events"}
        nav="About us"
      />
      <br />
      <br />
      <br />
    </>
  );
}

export default EYFS;
