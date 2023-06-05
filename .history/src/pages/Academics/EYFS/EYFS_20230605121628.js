import React from "react";
import { Breadcrum } from "../../../components/BreadCrumb/BreadCrumb";
import PageMenu from "../../../components/PageMenu/PageMenu";
import Pic1 from "../../../assets/images/kids_game.png";
import Pic2 from "../../../assets/images/kids_mat.png";
import { Link } from "react-router-dom";
import "./eyfs.scss";
import LandingImg from "../../../assets/images/EYSLanding.png";

import Tour from "../../../components/Tour/Tour";
import Prefooter from "../../../components/Prefooter/Prefooter";
function EYFS() {
  return (
    <>
      <div className="col-md-12 eyfs-body">
        {" "}
        <div className="col-md-12 ">
          <img className="" src={LandingImg} alt="Scholar" width="100%" />{" "}
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
          currentPage="Early Years"
          pageUrl={"/events"}
          nav="Academics"
        />
        <br />
        <br />
        <br />
        <center>
          <div className="col-md-8 eyfs-div">
            <h1>Early Years</h1>
            <p>
              Technology and science are evolving, we are moving from the era
              where we understand that genetics and the environment alone are
              crucial for development to a better understanding that exposing
              your child to learning experiences tailored to brain development,
              is key to helping your child reach his or her full potential!
              Brain studies show that the highest sensitivity to learning new
              skills occurs during the first four years. Early exposure to
              specific activities will postively affect the architecture of your
              child’s brain and boost their academic outcomes.
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
        <center>
          <div className="col-md-8 eyfs-div">
            <p>
              The MIS EYFS was created and designed to guide your child through
              those crucial early years. We aid your child’s development through
              activities that boost their linguistic, cognitive,social and
              emotional development areas.{" "}
            </p>
            <p>
              In the early years of your baby’s life your baby is competent,
              active and insightful. Numerous studies have shown that babies are
              constantly using their observations to build theories and
              knowledge that will help them relate with the world around them.
              Meaning they are not passive and neither should we be when caring
              for them.
            </p>
            <div className="apply-div">
              {" "}
              <p>Admission into the EYFS is open for September 2023</p>
              <Link className="apply-link">Apply now</Link>
            </div>
          </div>
        </center>
        <center>
          <div className="col-md-6">
            <h1 className="">Our Curriculum</h1>
            <p>
              Our center curriculum is a blend of the British EYFS Curriculum
              and Montessori Philosophy offered as an enriched daycare
              experience for our Infants, Toddlers and Pre schoolers.
            </p>
          </div>
        </center>
      </div>
      <div className="col-md-12  flexy curriculum-div">
        <div className="col-md-1 ">&nbsp;</div>
        <div className="col-md-3 ">
          <center>
            <div className="col-md-11 curriculum creche">
              <ul>
                <h6>Gymboree/Creche (6 months - 11 months)</h6>
                <li>Loving DayCare </li>
                <li> Story Time</li>
                <li>Songs & Rhymes </li>
                <li>Sensory Play</li>
              </ul>
            </div>
          </center>
        </div>
        <div className="col-md-3 ">
          <center>
            {" "}
            <div className="col-md-11 curriculum ladybird flexy flexyM">
              <ul>
                <h6>LadyBird (12months+)</h6>
                <li>Phonics</li>
                <li>Numbers</li>
                <li> Story Time</li>
                <li>TV Time</li>
                <li>Art Time </li>
                <li> Music & Dance</li>
              </ul>{" "}
              <ul className="mt3">
                <li>Songs & Rhymes</li>
                <li>Outdoor Play</li>
                <li> Sensory Play</li>
                <li>Scriptures,</li>
                <li>Praise & </li>
                <li> Prayers lots more.</li>
              </ul>
            </div>
          </center>
        </div>
        <div className="col-md-4 ">
          <center>
            {" "}
            <div className="col-md-11 curriculum bumble flexy flexyM">
              <ul>
                <h6>Bumble Bee(2years+)</h6>
                <li>Practical Life</li>
                <li>Numeracy </li>
                <li>Phonics </li>
                <li>Communication &</li>
                <li>Language </li>
                <li> PSED</li>
                <li> Expressive Art &</li>
                <li> Design</li>
              </ul>
              <ul className="mt3">
                <li>Physical Development .</li>
                <li>Outdoor Play</li>
                <li>Scriptures</li>
                <li> Praise & Prayers</li>
                <li>Music & Dance</li>
                <li>Story Time </li>
                <li> Songs & Rhymes</li>
                <li>Outdoor Play and lots more.</li>
              </ul>
            </div>
          </center>
        </div>
      </div>
      <div className="col-md-8  offset-md-2 flexy curriculum-div mt4">
        <div className="col-md-6">
          <center>
            {" "}
            <div className="col-md-11 curriculum honey flexy flexyM">
              <ul>
                <h6>Honey Bee(3years+)</h6>
                <li>Practical Life </li>
                <li> Numeracy</li>
                <li>Phonics</li>
                <li>Communication & </li>
                <li> Language</li>
                <li> PSED </li>
                <li>Expressive Art &</li>
                <li>Design</li>
              </ul>{" "}
              <ul className="mt3">
                <li>Physical Development </li>
                <li>Outdoor Play</li>
                <li> Scriptures</li>
                <li>Praise & Prayers</li>
                <li>Music & Dance</li>
                <li>Story Time</li>
                <li>Songs & Rhymes</li>
                <li>Outdoor Play and lots more..</li>
              </ul>
            </div>
          </center>
        </div>
        <div className="col-md-6">
          <center>
            {" "}
            <div className="col-md-11 curriculum busy flexy flexyM">
              <ul>
                <h6>Busy Bee(4years+)</h6>
                <li>Practical Life</li>
                <li>Numeracy</li>
                <li> Phonics </li>
                <li>Communication & </li>
                <li>Language</li>
                <li>PSED</li>
                <li>Expressive Art & </li>
                <li> Design</li>
              </ul>
              <ul className="mt3">
                <li>Physical Development </li>
                <li>Outdoor Play</li>
                <li> Scriptures</li>
                <li>Praise & Prayers</li>
                <li>Music & Dance</li>
                <li>Story Time</li>
                <li>Songs & Rhymes</li>
                <li>Outdoor Play and lots more..</li>
              </ul>
            </div>
          </center>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <Tour /> */}
      <Prefooter />
    </>
  );
}

export default EYFS;
