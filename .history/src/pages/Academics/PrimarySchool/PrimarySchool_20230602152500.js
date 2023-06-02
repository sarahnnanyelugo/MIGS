import React from "react";
import LandingImg from "../../../assets/images/playground.png";
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
        currentPage="Early Years"
        pageUrl={"/events"}
        nav="Academics"
      />
      <br />
      <br />
      <br />
    </>
  );
}

export default PrimarySchool;
