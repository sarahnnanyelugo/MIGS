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
        <h1>Inspire Education Consult</h1>
        <p>
          We are a team of teachers and trainers committed to sharing best
          practices in education. We carry out research, observations, and
          investigations and facilitate the education of teachers within and
          outside our organization to improve teaching and learning in the
          sector. We are committed to our vision to change the education sector
          one classroom at a time.
        </p>
        <h3></h3>
      </center>
    </>
  );
}

export default IEC;
