import React from "react";
import { AppModal } from "../../components/AppModal/AppModal";
import LandingImg from "../../assets/images/table.jpeg";
import Helmet from "../../assets/images/helmet.png";
import Junior from "../../assets/images/junior.png";
import Art from "../../assets/images/art.png";
import Senior from "../../assets/images/senior.png";
import Primary from "../../assets/images/primary.png";
import Academics from "../../assets/images/academics.png";
import Artistic from "../../assets/images/artistics.png";
import Career from "../../assets/images/career.png";
import Learning from "../../assets/images/learning.png";
import Grad from "../../assets/images/grad.png";
import Event1 from "../../assets/images/events1.png";
import Event2 from "../../assets/images/garden.png";
import "./home.scss";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import Events from "./Events";
import Prefooter from "../../components/Prefooter/Prefooter";
import Tour from "../../components/Tour/Tour";
import LandingImages from "./LandingImages/LandingImages";
import Play from "../../assets/images/play.png";
import Art2 from "../../assets/images/art4.png";
import Plate from "../../assets/images/plate.png";
import Dancer from "../../assets/images/g-dancers.png";
import Native from "../../assets/images/native3.png";
import Circle1 from "../../assets/images/rs-d.png";
import Circle2 from "../../assets/images/rs-t.png";
import Cap from "../../assets/images/cap-icon.png";
import House from "../../assets/images/school.png";
import Enroll from "../../assets/images/enroll.png";

function Home() {
  return (
    <>
      <div className="col-md-12">
        <LandingImages />
      </div>
      <center>
        <div className="col-md-12 welcome-div">
          <div className="col-md-7 welcome-header2 mtt nm">
            <h1 className="grey-heading2">
              Welcome to Montessori International Group of Schools
            </h1>
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

      <div className="col-md-8 offset-md-2 section-div">
        <center>
          <h1 className="grey-heading2">Our School Sections</h1>
        </center>
        <div className="col-md-12 flexy mt5">
          <div className="col-md-6">
            <div className="col-md-11 sections-container early-years">
              <img
                className="tech-logo"
                src={Helmet}
                alt="Scholar"
                width="100%"
              />{" "}
              <div class="bottom-left col-md-5">
                <h2>Early Years</h2>
              </div>
            </div>
          </div>{" "}
          <div className="col-md-6">
            <div className="col-md-11 sections-container primary">
              <img
                className="tech-logo"
                src={Primary}
                alt="Scholar"
                width="100%"
              />{" "}
              <div class="bottom-left col-md-5">
                {" "}
                <h2>Primary School</h2>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
      <div className="col-md-8 offset-md-2 flexy mt1">
        <div className="col-md-6">
          <div className="col-md-11 sections-container junior ">
            <img
              className="tech-logo"
              src={Junior}
              alt="Scholar"
              width="100%"
            />{" "}
            <div class="bottom-left col-md-5">
              {" "}
              <h2>Junior School</h2>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="col-md-11 sections-container senior ">
            <img
              className="tech-logo"
              src={Senior}
              alt="Scholar"
              width="100%"
            />{" "}
            <div class="bottom-left col-md-5">
              {" "}
              <h2>Senior School</h2>
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
          <div className="col-md-8 wins">
            <div className="col-md-11 img-div">
              {" "}
              <img
                className="tech-logo"
                src={Academics}
                alt="Scholar"
                width="100%"
              />
            </div>
            <div class="bottom-left2 col-md-6">
              {" "}
              <h3>Academic Excellence</h3>
            </div>
          </div>{" "}
          <div className="col-md-4 wins">
            <div className="col-md-11 img-div">
              {" "}
              <img
                className="tech-logo"
                src={Artistic}
                alt="Scholar"
                width="100%"
              />{" "}
            </div>
            <div class="bottom-left2 col-md-6">
              {" "}
              <h3>Artistic Minds</h3>
            </div>
          </div>
        </div>{" "}
        <div className="col-md-10 offset-md-1 flexy mt2 wins">
          {" "}
          <div className="col-md-4 ">
            <div className="col-md-11 img-div">
              {" "}
              <img
                className="tech-logo"
                src={Career}
                alt="Scholar"
                width="100%"
              />{" "}
            </div>
            <div class="bottom-left2 col-md-6">
              {" "}
              <h3>Career exploration</h3>
            </div>
          </div>
          <div className="col-md-8 wins">
            <div className="col-md-12 img-div">
              {" "}
              <img
                className="tech-logo"
                src={Learning}
                alt="Scholar"
                width="100%"
              />{" "}
            </div>
            <div class="bottom-left2 col-md-6">
              {" "}
              <h3>Continuous Learning</h3>
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
              <img
                className="tech-logo"
                src={House}
                alt="Scholar"
                width="20%"
              />
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
          <div className="col-md-4 mtt stats">
            <center>
              <img className="tech-logo" src={Grad} alt="Scholar" width="20%" />
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
              <img
                className="tech-logo"
                src={Enroll}
                alt="Scholar"
                width="20%"
              />
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
      <center>
        <h1 className="grey-heading2 mb5 mt8">Happenings within MIS</h1>
      </center>
      <div className="col-md-1 offset-md-11 col-2 offset-10">
        {" "}
        <img className="" src={Cap} alt="Scholar" width="40%" />{" "}
      </div>
      <div className="col-md-10 offset-md-1 news-div mtt nm">
        <div className="flexy mt3">
          <div className="col-md-6 flexy flexyM">
            <div className="col-md-6">
              {" "}
              <img
                className="tech-logo"
                src={Event1}
                alt="Scholar"
                width="100%"
              />{" "}
            </div>
            <div className="col-md-6 news-details">
              <button className="holidays">Holidays</button>
              <h4>Holiday Information</h4>
              <Link className="normal-link" to={"/"}>
                <p>
                  Closing and resumption information should be followed by….
                </p>
              </Link>
              <br />
              <br />
              <p>Monday, May 3rd, 2023</p>
              <small>9:57am</small>
            </div>
          </div>
          <div className="col-md-6 flexy  flexyM">
            <div className="col-md-6">
              {" "}
              <img
                className="tech-logo"
                src={Event2}
                alt="Scholar"
                width="100%"
              />{" "}
            </div>
            <div className="col-md-6 news-details">
              <button className="events">Events</button>
              <h4>Holiday Information</h4>
              <Link className="normal-link" to={"/"}>
                <p>
                  Closing and resumption information should be followed by….
                </p>
              </Link>
              <br />
              <br />
              <p>Monday, May 3rd, 2023</p>
              <small>9:57am</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-10 offset-md-1  upcoming-div">
        <center>
          <h1 className="grey-heading2 ">Our upcoming events</h1>
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
      <div className="col-md-12  mtt pictures-container">
        <center>
          <h1>
            Our School <span>Pictures</span>
          </h1>
        </center>
        <div className="col-md-12  flexy">
          <div className="col-md-1 circle2">
            {" "}
            <img className="" src={Circle1} alt="Scholar" width="180%" />
          </div>
          <div className="col-md-7 ">
            <div className="col-md-12 flexy">
              <div className="col-md-6">
                <div className=" col-md-11">
                  <img
                    className="tech-logo"
                    src={Play}
                    alt="Scholar"
                    width="100%"
                  />{" "}
                </div>
              </div>{" "}
              <div className="col-md-6 other-imgs">
                <div className=" col-md-11">
                  {" "}
                  <img
                    className="tech-logo"
                    src={Art2}
                    alt="Scholar"
                    width="100%"
                    height="100%"
                  />{" "}
                </div>
              </div>
            </div>
            <div className="col-md-12 flexy mt3 other-imgs">
              <div className="col-md-7 ">
                <div className="col-md-11 ">
                  {" "}
                  <img
                    className="tech-logo"
                    src={Plate}
                    alt="Scholar"
                    width="100%"
                    height="100%"
                  />{" "}
                </div>
              </div>{" "}
              <div className="col-md-5">
                <div className=" col-md-11">
                  {" "}
                  <img
                    className="tech-logo"
                    src={Dancer}
                    alt="Scholar"
                    width="100%"
                    // height="60%"
                    style={{ height: "367px" }}
                  />{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 other-imgs ">
            <div className="col-md-12">
              <img
                className="native"
                src={Native}
                alt="Scholar"
                width="100%"
                height="100%"
              />{" "}
            </div>
          </div>
          <div className="col-md-2 circle1">
            {" "}
            <img src={Circle2} alt="Scholar" width="80%" />
          </div>
        </div>

        <center>
          <div className="col-md-2 mt6">
            {" "}
            <Link to={"/gallery"}>
              {" "}
              <button className="app-btn">View all pictures</button>
            </Link>
          </div>
        </center>
      </div>
      <Tour />
      <Prefooter />

      <div>
        <AppModal />
      </div>
    </>
  );
}

export default Home;
