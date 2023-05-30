import React from "react";
import { AppModal } from "../../components/AppModal/AppModal";
import LandingImg from "../../assets/images/table.jpeg";
import "./home.scss";
function Home() {
  return (
    <>
      <div className="col-md-12 landing-img">
        {/* <img
          className="tech-logo"
          src={LandingImg}
          alt="Scholar"
          width="100%"
        />{" "} */}
        <div className="centered col-md-5 offset-md-1">
          <h1>Excellence is our birthright</h1>
        </div>
      </div>
      <center>
        <div className="col-md-7 welcome-header mtt">
          <h1>Welcome to Montessori International Group of Schools</h1>
        </div>
      </center>
      <center>
        <div className="col-md-5">
          <p>
            {" "}
            On behalf of the Management and Staff of Montessori International
            School, we welcome you to our website. We are grateful for another
            opportunity to offer you our best and are dedicated to ensuring that
            your child grows up balanced in all environs of life and not just
            academically{" "}
          </p>
        </div>
      </center>
      <div>
        <AppModal />
      </div>
    </>
  );
}

export default Home;