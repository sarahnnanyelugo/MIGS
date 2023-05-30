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
          <p> font-size: 60px;</p>
        </div>
      </center>
      <div>
        <AppModal />
      </div>
    </>
  );
}

export default Home;
