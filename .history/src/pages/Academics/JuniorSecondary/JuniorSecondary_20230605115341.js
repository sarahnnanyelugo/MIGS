import React from "react";
import LandingImg from "../../../assets/images/suited.png";
import Art from "../../../assets/images/art.png";
import Science from "../../../assets/images/lab.png";
import { Breadcrum } from "../../../components/BreadCrumb/BreadCrumb";
import PageMenu from "../../../components/PageMenu/PageMenu";
import Prefooter from "../../../components/Prefooter/Prefooter";
import Tour from "../../../components/Tour/Tour";
import "./junior.scss";
import { Link } from "react-router-dom";

function JuniorSecondary() {
  return (
    <>
      <div className="col-md-12 ">
        <img className="" src={LandingImg} alt="Scholar" width="100%" />{" "}
        <div className="centered col-md-5 offset-md-1">
          <h1>Academics</h1>
        </div>
      </div>
      <div className="col-md-12  junior-edu">
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
          currentPage="Junior Secondary"
          pageUrl={"/events"}
          nav="Academics"
        />
        <br />
        <br />
        <br />{" "}
        <center>
          <div className="col-md-8">
            <h1 className="grey-heading">Junior Secondary</h1>
            <br />
            <p>
              <strong>Welcome to our Junior Secondary Day School!</strong>
            </p>
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
        <div className="col-md-10 flexy  offset-md-1">
          <div className="col-md-6">
            <div className="col-md-11">
              <img className="" src={Science} alt="Scholar" width="100%" />{" "}
              <p>
                Behold the distinguished features that make our Junior Secondary
                section truly exceptional:
              </p>
              <ol className="list-unstyled">
                <li>
                  1. <strong> Harmonious Melodies: </strong>Immerse yourself in
                  the symphony of our multi-instrumental orchestra. Witness the
                  harmonious convergence of talent as students explore the
                  realms of music, mastering various instruments and embracing
                  the power of collaboration, discipline, and artistic
                  expression.
                </li>
                <li>
                  2.<strong> Rigorous Academic Pursuits: </strong>In the
                  hallowed halls of our Junior Secondary section, we embark on
                  an unwavering quest for academic excellence. Through a
                  meticulously designed curriculum, our students engage in
                  thought-provoking and intellectually stimulating lessons,
                  nurturing their critical thinking, problem-solving, and
                  analytical skills.
                </li>
                <li>
                  3. <strong>Moral Education: </strong>At our school, we
                  recognize the vital role of moral education in shaping
                  well-rounded individuals. We foster an environment that
                  nurtures strong values, ethical principles, and a deep sense
                  of integrity, equipping our students with the moral compass
                  necessary to navigate the complexities of life with grace and
                  wisdom.
                </li>
                <li>
                  4.<strong> Practical Wisdom Unveiled:</strong> Embrace the
                  power of experiential learning as our Junior Secondary section
                  immerses students in practical lessons that bridge theory and
                  application. From scientific experiments to hands-on
                  vocational and entrepreneurial projects, we empower students
                  to think beyond the confines of textbooks and unleash
                  innovation.
                </li>
              </ol>
            </div>
          </div>
          <div className="col-md-6">
            <div className="col-md-11">
              <img className="" src={Art} alt="Scholar" width="100%" />{" "}
              <ol className="mt7 list-unstyled">
                <li>
                  5. <strong>Engaging Extracurricular: </strong>Our commitment
                  to holistic development shines through our expansive array of
                  extracurricular activities. From sports to debate clubs, drama
                  to agricultural and entrepreneurship initiatives, we provide
                  students with opportunities to explore their passions, foster
                  leadership skills, and cultivate a well-rounded personality.
                </li>
                <li>
                  {" "}
                  6.<strong> Intellectual Discourse: </strong>Our classrooms
                  become vibrant hubs of intellectual discourse, where students
                  engage in stimulating discussions, debates, and collaborative
                  learning experiences. We encourage critical thinking, embrace
                  diversity of thought, and foster a culture of curiosity,
                  ensuring that students develop into insightful and articulate
                  individuals.
                </li>
                <li>
                  7. <strong>Coaching and Guidance: </strong>GJHS students are
                  guided by a team of dedicated teachers and a dedicated and
                  compassionate guidance counselor who provide unwavering
                  support and nurture their individual growth. We believe in the
                  power of personalized attention, fostering strong
                  student-teacher relationships that inspire intellectual
                  curiosity and foster a love for lifelong learning.
                </li>
              </ol>
            </div>
          </div>
        </div>
        <center>
          <div className="col-md-8 mt8">
            <center>
              <p style={{ fontSize: "16px" }}>
                Join us in this extraordinary expedition of learning and growth.
                Enroll your child in our esteemed Junior Secondary section,
                where they will discover their true potential, forge lifelong
                friendships, and lay the foundation for a future adorned with
                success and intellectual brilliance.
              </p>
              <br />
              <br />
              <h3>Together, let’s shape the minds of tomorrow’s leaders!</h3>
            </center>
          </div>
        </center>
        {/* <center>
          <div className="apply-div col-md-7">
            {" "}
            <p>Admission into the EYFS is open for September 2023</p>
            <Link className="apply-link">Apply now</Link>
          </div>
        </center>
        <br /> */}
      </div>

      {/* <Tour /> */}
      <Prefooter />
    </>
  );
}

export default JuniorSecondary;
