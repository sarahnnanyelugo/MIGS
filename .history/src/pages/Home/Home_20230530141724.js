import React from "react";
import { AppModal } from "../../components/AppModal/AppModal";
import LandingImg from "../../assets/images/table.jpeg";
import Grad from "../../assets/images/grad.png";
import "./home.scss";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import Events from "./Events";

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
              On behalf of the Management and staff of Montessori International
              School, we welcome you to our website. We are grateful for another
              opportunity to offer you our best and are dedicated to ensuring
              that your child grows up balanced in all endeavours of life and
              not just academically.
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
            <div className="col-md-11 sections-container early-years">
              {/* <img
          className="tech-logo"
          src={LandingImg}
          alt="Scholar"
          width="100%"
        />{" "} */}
              <div class="bottom-left col-md-1">
                <h2>Early Years</h2>
              </div>
            </div>
          </div>{" "}
          <div className="col-md-4">
            <div className="col-md-11 sections-container primary">
              {/* <img
          className="tech-logo"
          src={LandingImg}
          alt="Scholar"
          width="100%"
        />{" "} */}
              <div class="bottom-left col-md-1">
                {" "}
                <h2>Primary School</h2>
              </div>
            </div>
          </div>{" "}
          <div className="col-md-4">
            <div className="col-md-11 sections-container special ">
              {/* <img
          className="tech-logo"
          src={LandingImg}
          alt="Scholar"
          width="100%"
        />{" "} */}
              <div class="bottom-left col-md-1">
                {" "}
                <h2>Special Education</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-8 offset-md-3 flexy">
        <div className="col-md-5">
          <div className="col-md-11 sections-container junior ">
            {/* <img
          className="tech-logo"
          src={LandingImg}
          alt="Scholar"
          width="100%"
        />{" "} */}
            <div class="bottom-left col-md-1">
              {" "}
              <h2>Special Education</h2>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="col-md-11 sections-container senior ">
            {/* <img
          className="tech-logo"
          src={LandingImg}
          alt="Scholar"
          width="100%"
        />{" "} */}
            <div class="bottom-left col-md-1">
              {" "}
              <h2>Special Education</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 birthright-div">
        <center>
          <div className="col-md-6">
            <h1>
              Excellence is our<span>BIRTHRIGHT</span>
            </h1>
            <p>
              On behalf of the Management and staff of Montessori International
              School, we welcome you to our website. We are grateful for another
              opportunity to offer you our best and are dedicated to ensuring
              that your child grows up balanced in all endeavours of life and
              not just academically.
            </p>
          </div>
        </center>
        <div className="col-md-10 offset-md-1 flexy">
          <div className="col-md-8 ">
            <div className="col-md-11 img-div">
              {" "}
              {/* <img
          className="tech-logo"
          src={LandingImg}
          alt="Scholar"
          width="100%"
        />{" "} */}
            </div>
          </div>{" "}
          <div className="col-md-4 ">
            <div className="col-md-11 img-div">
              {" "}
              {/* <img
          className="tech-logo"
          src={LandingImg}
          alt="Scholar"
          width="100%"
        />{" "} */}
            </div>
          </div>
        </div>{" "}
        <div className="col-md-10 offset-md-1 flexy mt2">
          {" "}
          <div className="col-md-4 ">
            <div className="col-md-11 img-div">
              {" "}
              {/* <img
          className="tech-logo"
          src={LandingImg}
          alt="Scholar"
          width="100%"
        />{" "} */}
            </div>
          </div>
          <div className="col-md-8 ">
            <div className="col-md-11 img-div">
              {" "}
              {/* <img
          className="tech-logo"
          src={LandingImg}
          alt="Scholar"
          width="100%"
        />{" "} */}
            </div>
          </div>{" "}
        </div>
      </div>
      <div className="col-md-12 stats-div">
        <center>
          <h1>The journey towards excellence</h1>
        </center>
        <div className="col-md-10 offset-md-1 flexy">
          {" "}
          <div className="col-md-4 mtt stats">
            <center>
              {" "}
              <h1>
                {" "}
                <CountUp
                  start={0}
                  end={2}
                  duration={3}
                  decimal=""
                  prefix=" "
                  suffix=""
                  enableScrollSpy={true}
                />
              </h1>
              <p>Certified Schools</p>
            </center>
          </div>{" "}
          <div className="col-md-4 mt5 stats">
            <center>
              <img className="tech-logo" src={Grad} alt="Scholar" width="20%" />{" "}
              <h1>
                {" "}
                <CountUp
                  start={0}
                  end={95}
                  duration={3}
                  decimal=""
                  prefix=" "
                  suffix="%"
                  enableScrollSpy={true}
                />
              </h1>
              <p>Pass Rate</p>
            </center>
          </div>{" "}
          <div className="col-md-4 mtt stats">
            <center>
              {" "}
              <h1>
                {" "}
                <CountUp
                  start={0}
                  end={3500}
                  duration={3}
                  decimal=""
                  prefix=" "
                  suffix=""
                  enableScrollSpy={true}
                />
              </h1>
              <p>Life Enrollment since Inception</p>
            </center>
          </div>
        </div>
      </div>
      <div className="col-md-10 offset-md-1 news-div mtt">
        <center>
          <h1>Happenings within MIS</h1>
        </center>
        <div className="flexy mt3">
          <div className="col-md-6 flexy">
            <div className="col-md-6 img-div2"></div>
            <div className="col-md-6 news-details">
              <button className="holidays">Holidays</button>
              <h4>Holiday Information</h4>
              <Link className="normal-link" to={"/"}>
                <p>
                  Closing and resumption information should be followed by….
                </p>
              </Link>
              <p>Monday, May 3rd, 2023</p>
              <small>9:57am</small>
            </div>
          </div>
          <div className="col-md-6 flexy mt23">
            <div className="col-md-6 img-div2"></div>
            <div className="col-md-6 news-details">
              <button className="events">Holidays</button>
              <h4>Holiday Information</h4>
              <Link className="normal-link" to={"/"}>
                <p>
                  Closing and resumption information should be followed by….
                </p>
              </Link>
              <p>Monday, May 3rd, 2023</p>
              <small>9:57am</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-10 offset-md-1 mtt upcoming-div">
        <center>
          <h1>Our upcoming events</h1>
        </center>
        <div className="flexy mt5">
          <div className="col-md-4">
            <center>
              <Events year="2023" month="March" day="18th" />
              <p>
                Upper Nursery Occupation/
                <br />
                Variety Day
              </p>
            </center>
          </div>
          <div className="col-md-4">
            <center>
              <Events year="2023" month="March" day="18th" />
              <p>
                GJHS Year 7 Entrance
                <br /> Examination
              </p>
            </center>
          </div>
          <div className="col-md-4">
            <center>
              <Events year="2023" month="March" day="18th" />
              <p>
                Upper Nursery Occupation/
                <br />
                Variety Day
              </p>
            </center>
          </div>
        </div>
      </div>
      <div clasName="col-md-10 offset-md-1 mtt">
        <center>
          <h1>
            Our School <span>Pictures</span>
          </h1>
        </center>
      </div>
      <div>
        <AppModal />
      </div>
    </>
  );
}

export default Home;
