import React from "react";
import { Breadcrum } from "../../../components/BreadCrumb/BreadCrumb";
import PageMenu from "../../../components/PageMenu/PageMenu";
import Prefooter from "../../../components/Prefooter/Prefooter";
import Tour from "../../../components/Tour/Tour";
import LandingImg from "../../../assets/images/historyLanding.png";
import Img1 from "../../../assets/images/swim2.png";
import Img2 from "../../../assets/images/lab-guys.png";
import Img3 from "../../../assets/images/playground2.png";

import "./history.scss";
function Facility() {
  return (
    <>
      <div className="col-md-12">
        <img className="" src={LandingImg} alt="Scholar" width="100%" />{" "}
        <div className="centered2 col-md-5 offset-md-1">
          <h1>Facilities</h1>
        </div>
      </div>
      <PageMenu
        page1="Who we are"
        url1={"/about-us"}
        page2="Our Mission"
        url2={"/our-mission"}
        page3="Facilities"
        url3={"/facility"}
        page4="Our Achievements"
        url4={"/achievements"}
        page5="Contact us"
        url5={"/contact-us"}
      />
      <Breadcrum
        page1="About"
        currentPage="Facilities"
        pageUrl={"/events"}
        nav="About us"
      />
      <br />
      <br />
      <br />
      <center>
        <div className="col-md-7 facility">
          <h1 className="grey-heading">Facilities</h1>
          <p>
            Recognizing the importance of well-equipped facilities, Each section
            is diligently overseen by a team of Sectional Leaders working in
            tandem with committed class teachers, assistants, subject teachers,
            and janitors. We take pride in offering state-of-the-art amenities
            to enhance the learning experience:
          </p>
        </div>
      </center>
      <ul className=" offset-md-1 facility-list">
        <li>
          <strong> Science Lab:</strong> A fully functional laboratory where
          students can validate empirical ideas and concepts.
        </li>
        <li>
          <strong> Home Economics Lab: </strong>Equipped to develop culinary and
          domestic skills, including cooking and baking.
        </li>
        <li>
          <strong> ICT Lab: </strong>A technologically advanced computer lab
          utilized during ICT classes to enhance digital literacy.{" "}
        </li>
        <li>
          <strong> Extra-Curricular Lab: </strong>A dedicated space for artistic
          pursuits, crafts, and our vibrant after-school clubs.
        </li>
      </ul>
      <div className="col-md-10 offset-md-1 flexy mt7">
        <div className="col-md-4">
          <div className="col-md-11">
            {" "}
            <img className="" src={Img1} alt="Scholar" width="100%" />{" "}
          </div>
        </div>{" "}
        <div className="col-md-4">
          <div className="col-md-11">
            {" "}
            <img className="" src={Img2} alt="Scholar" width="100%" />{" "}
          </div>
        </div>{" "}
        <div className="col-md-4">
          <div className="col-md-11">
            {" "}
            <img className="" src={Img3} alt="Scholar" width="100%" />{" "}
          </div>
        </div>
      </div>
      <ul className=" offset-md-1 facility-list col-md-10 mt7">
        <li>
          <strong> Library:</strong> Our extensive collection of books,
          predominantly authored by esteemed international scholars, is readily
          accessible to both staff and students for reading and borrowing. Our
          dedicated library staff provides invaluable assistance to users.
        </li>
        <li>
          <strong>
            {" "}
            Swimming Pool: A pristine pool for recreational and educational
            purposes, prom
          </strong>
          oting physical fitness and water-based activities.
        </li>
        <li>
          {" "}
          <strong> Play Spaces:</strong> Enchanting and safe indoor and outdoor
          areas designed to stimulate imaginative play and promote physical
          development.
        </li>
      </ul>
      <Tour />
      <Prefooter />
    </>
  );
}

export default Facility;
