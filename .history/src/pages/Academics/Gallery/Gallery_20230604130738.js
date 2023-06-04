import React, { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import LandingImg from "../../../assets/images/dancers.png";
import Pic1 from "../../../assets/images/native1.png";
import Pic2 from "../../../assets/images/party.png";
import Pic3 from "../../../assets/images/sports.png";
import Pic4 from "../../../assets/images/lab2.png";
import Pic5 from "../../../assets/images/play.png";
import Pic6 from "../../../assets/images/native2.png";
import Pic7 from "../../../assets/images/art2.png";
import Pic8 from "../../../assets/images/art3.png";
import Pic9 from "../../../assets/images/sports3.png";
import Pic10 from "../../../assets/images/play3.png";
import Pic11 from "../../../assets/images/dancers.png";
import Pic12 from "../../../assets/images/grad2.png";
import Pic13 from "../../../assets/images/cultural.png";
import Pic14 from "../../../assets/images/meeting.png";
import Pic15 from "../../../assets/images/kids.png";
import Pic16 from "../../../assets/images/swim.png";
import { Breadcrum } from "../../../components/BreadCrumb/BreadCrumb";
const galleryImages = [Pic1, Pic2, Pic3, Pic4];
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
      <div className="col-md-12 flexy" style={{ display: "flex" }}>
        <div className="col-md-12">
          {galleryImages.map((image, index) => (
            <img src={image} alt={`Image ${index}`} key={index} width="25%" />
          ))}
        </div>
      </div>
    </>
  );
}
