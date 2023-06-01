import React from "react";
import { Breadcrum } from "../../../components/BreadCrumb/BreadCrumb";
import PageMenu from "../../../components/PageMenu/PageMenu";
import Pic1 from "../../../assets/images/kids_game.png";
import Pic2 from "../../../assets/images/kids_mat.png";

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
      <center>
        <div className="col-md-8">
          <h1>Early Years</h1>
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
      <div className="col-md-10 offset-md-1 flexy">
        <div className="col-md-6">
          <img className="" src={Pic1} alt="Scholar" width="97%" />
        </div>
        <div className="col-md-6">
          <img className="" src={Pic2} alt="Scholar" width="97%" />
        </div>
      </div>
    </>
  );
}

export default EYFS;
