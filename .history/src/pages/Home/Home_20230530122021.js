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
        <div className="col-md-12 welcome-div">
          <div className="col-md-7 welcome-header mtt">
            <h1>Welcome to Montessori International Group of Schools</h1>
          </div>
          <div className="col-md-5 mt3 welcome-paragraph">
            <p>
              {" "}
              On behalf of the Management and Staff of Montessori International
              School, we welcome you to our website. We are grateful for another
              opportunity to offer you our best and are dedicated to ensuring
              that your child grows up balanced in all environs of life and not
              just academically{" "}
            </p>
          </div>
        </div>
      </center>

      <div className="col-md-10 offset-md-1 section-div">
        <center>
          <h1>Our School Sections</h1>
        </center>
        <div className="col-md-12 flexy">
          <div className="col-md-4">
            <div className="col-md-11 sections-container ">
              {/* <img
          className="tech-logo"
          src={LandingImg}
          alt="Scholar"
          width="100%"
        />{" "} */}
              <div class="bottom-left">Bottom Left</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <AppModal />
      </div>
    </>
  );
}

export default Home;
