/* eslint-disable react/jsx-no-undef */
import React from "react";
import { Breadcrum } from "../../../components/BreadCrumb/BreadCrumb";
import PageMenu from "../../../components/PageMenu/PageMenu";
import Prefooter from "../../../components/Prefooter/Prefooter";
import Tour from "../../../components/Tour/Tour";
import LandingImg from "../../../assets/images/helmet-bg.png";
import Icon1 from "../../../assets/images/tel.png";
import Icon2 from "../../../assets/images/message.png";

import "./contact.scss";
import { EnqiryForm } from "./EnqiryForm";
function ContactUs() {
  return (
    <>
      <div className="col-md-12">
        <img
          className="tech-logo"
          src={LandingImg}
          alt="Scholar"
          width="100%"
        />{" "}
        <div className="centered2 col-md-5 offset-md-1">
          <h1>About Us</h1>
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
        currentPage="Contact Us"
        pageUrl={"/events"}
        nav="About us"
      />
      <br />
      <br />
      <br />
      <center>
        <div className="col-md-6 contact">
          <h1 className="grey-heading">Contact Us</h1>
          <p>We’re so delighted to hear from you!</p>
        </div>
      </center>
      <div className="col-md-10 offset-md-1 flexy contact-map">
        <div className="col-md-6">
          <div className="col-md-11">
            <h6>Montessori International Group of Schools</h6>
            <ul className="col-md-6 list-unstyled">
              <li>
                <img className="" src={Icon1} alt="Scholar" width="7%" /> (+234)
                802 508 2340 <br />
                <span style={{ marginLeft: "35px" }}> (+234) 813 850 6540</span>
              </li>{" "}
              <br />
              <li>
                <img className="" src={Icon2} alt="Scholar" width="7%" />{" "}
                <a href="">Misgroupofschools@gmail.com</a>
              </li>{" "}
            </ul>
            <div className="col-md-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d253640.8741805335!2d3.2975506578951204!3d6.6296947299687545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smontessori%20international%20group%20of%20schools!5e0!3m2!1sen!2sng!4v1685968589154!5m2!1sen!2sng"
                style={{ border: "0", height: "600px", width: "100%" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>{" "}
        <div className="col-md-6">
          <div className="col-md-11">
            <EnqiryForm />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Tour />
      <Prefooter />
    </>
  );
}

export default ContactUs;
