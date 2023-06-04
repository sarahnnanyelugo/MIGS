import React, { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import LandingImg from "../../../assets/images/dancers.png";
import Pic1 from "../../../assets/images/native1.png";
import Pic2 from "../../../assets/images/party.png";
import Pic3 from "../../../assets/images/sports.png";
import Pic4 from "../../../assets/images/lab2.png";
import Pic5 from "../../../assets/images/play.png";
import Pic6 from "../../../assets/images/dancers.png";
import Pic7 from "../../../assets/images/dancers.png";
import Pic8 from "../../../assets/images/dancers.png";
import Pic9 from "../../../assets/images/dancers.png";
import Pic10 from "../../../assets/images/dancers.png";
import Pic11 from "../../../assets/images/dancers.png";
import Pic12 from "../../../assets/images/dancers.png";
import Pic13 from "../../../assets/images/dancers.png";
import Pic14 from "../../../assets/images/dancers.png";
import Pic15 from "../../../assets/images/dancers.png";
import { Breadcrum } from "../../../components/BreadCrumb/BreadCrumb";

export default function Gallery(props) {
  return (
    <>
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
        <h1>Our School Pictures</h1>
      </center>
    </>
  );
}
