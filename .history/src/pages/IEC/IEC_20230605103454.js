import React from "react";
import LandingImg from "../../assets/images/slide.png";
import IconOne from "../../assets/images/coachingOne.png";
import IconTwo from "../../assets/images/coachingGroup.png";
import IconThree from "../../assets/images/cs.png";
import IconFour from "../../assets/images/manual.png";
import IconFive from "../../assets/images/message.png";
import IconSix from "../../assets/images/tel.png";
import { Breadcrum } from "../../components/BreadCrumb/BreadCrumb";
import Prefooter from "../../components/Prefooter/Prefooter";
import "./iec.scss";
function IEC() {
  return (
    <>
      <div className="iec-container">
        <div className="col-md-12 ">
          <img className="" src={LandingImg} alt="Scholar" width="100%" />{" "}
          <div className="centered2 col-md-5 offset-md-1">
            <h1>IEC</h1>
          </div>
        </div>
        <Breadcrum currentPage="IEC" pageUrl={"/events"} />
        <br />
        <br />
        <br />{" "}
        <center>
          <div className="col-md-8">
            <h1>Inspire Education Consult</h1>
            <p>
              We are a team of teachers and trainers committed to sharing best
              practices in education. We carry out research, observations, and
              investigations and facilitate the education of teachers within and
              outside our organization to improve teaching and learning in the
              sector. We are committed to our vision to change the education
              sector one classroom at a time.
            </p>
            <h3>What we do</h3>
            <div className="flexy what-we-do">
              <div className="col-md-3">
                <center>
                  <div className="col-md-10">
                    <img className="" src={IconOne} alt="Scholar" width="30%" />{" "}
                    <p>Group coaching sessions</p>
                  </div>
                </center>
              </div>
              <div className="col-md-3">
                <center>
                  <div className="col-md-10">
                    <img className="" src={IconTwo} alt="Scholar" width="30%" />{" "}
                    <p>One on One Coaching Sessions</p>
                  </div>
                </center>
              </div>
              <div className="col-md-3">
                <center>
                  <div className="col-md-10">
                    <img
                      className=""
                      src={IconThree}
                      alt="Scholar"
                      width="30%"
                    />{" "}
                    <p>
                      Customer service and administrative training for school
                      staff
                    </p>
                  </div>
                </center>
              </div>
              <div className="col-md-3">
                <center>
                  <div className="col-md-10">
                    <img
                      className=""
                      src={IconFour}
                      alt="Scholar"
                      width="20%"
                    />{" "}
                    <p>School Operations Manual</p>
                  </div>
                </center>
              </div>
            </div>
            <p>
              Are you a teacher looking for continuous professional development?
            </p>
            <p>
              Is your school ready to take teaching and learning to the next
              level?
            </p>
            <p>
              Are you a teacher committed to lifelong learning and teacher
              development?
            </p>
            <div className="col-md-2">
              {" "}
              <button className="app-btn">Contact Us today!</button>
            </div>
          </div>
        </center>
        <div className="offset-md-1">
          <p>Contact us on</p>
          <ul>
            <li>
              <img className="" src={IconFive} alt="Scholar" width="10%" />{" "}
              <a href="#" target="_blank">
                inspire@misph.com
              </a>
              <a href="#" target="_blank">
                contactinspireduc@gmail.com
              </a>
            </li>{" "}
            <li>
              <img className="" src={IconSix} alt="Scholar" width="10%" />{" "}
              <a href="#" target="_blank">
                +2347019408633
              </a>
              <a href="#" target="_blank">
                *Our phone lines are open 9:00 am -3:00 pm on weekdays.*{" "}
              </a>
            </li>{" "}
            <li>
              <img className="" src={IconSix} alt="Scholar" width="10%" />{" "}
              <a href="#" target="_blank">
                https://www.instagram.com/inspire.edng/
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Prefooter />
    </>
  );
}

export default IEC;
