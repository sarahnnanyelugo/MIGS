import React from "react";
import { Breadcrum } from "../../../components/BreadCrumb/BreadCrumb";
import PageMenu from "../../../components/PageMenu/PageMenu";
import Prefooter from "../../../components/Prefooter/Prefooter";
import Tour from "../../../components/Tour/Tour";
import LandingImg from "../../../assets/images/aboutLanding.png";
import Circle from "../../../assets/images/round-img.png";
import Curle from "../../../assets/images/curl.png";

import "./about-us.scss";
function WhoWeAre() {
  return (
    <>
      <div className="col-md-12">
        <img
          className="tech-logo"
          src={LandingImg}
          alt="Scholar"
          width="100%"
        />{" "}
        <div className="centered2 col-md-5 offset-md-1">
          <h1>About Us</h1>
        </div>
      </div>
      <PageMenu
        page1="Who we are"
        url1={"about-us"}
        page2="Our Mission"
        url2={"/our-mission"}
        page3="School History"
        url3={"/history"}
        page4="Our Achievements"
        url4={"/achievements"}
        page5="Contact us"
        url5={"/contact-us"}
      />
      <Breadcrum
        page1="About"
        currentPage="Who we are"
        pageUrl={"/events"}
        nav="About us"
      />

      <div className="col-md-12 who-we-are">
        <center>
          <h1 className="grey-heading">Who we are</h1>
        </center>
        <div className="col-md-10 offset-md-1 flexy">
          <div className="col-md-8">
            <p>
              Welcome to Montessori International School, where academic
              excellence, moral education, practical learning, and engaging
              extracurricular activities converge to shape the brilliant minds
              of every child. Established in 1987 and approved in 1988,
              Montessori International School reverently upholds its Christian
              foundation and embraces the grace of God as the guiding principles
              of our educational journey. Our academic year is divided into
              three terms, each with a refreshing midterm break at its midpoint.
            </p>
            <p>
              At Montessori International School, our Vision is to empower every
              child to achieve educational fulfillment through divine
              intervention. Guided by our Mission, we are steadfast in our
              commitment to providing an exceptional, holistic education that
              combines academic excellence, moral values, and practical
              learning, all at an affordable cost. With an esteemed
              Parent-Teacher Association (P.T.A.) and a dedicated team of
              professional staff, we have consistently delivered excellence in
              education since our inception.
            </p>
          </div>
          <div className="col-md-4">
            {" "}
            <img
              className="tech-logo"
              src={Circle}
              alt="Scholar"
              width="100%"
            />
          </div>
        </div>
        <br />
        <br />
        <img
          className="tech-logo"
          src={Curle}
          alt="Scholar"
          width="100%"
        />{" "}
        <center>
          <p>
            Montessori International Group of Schools consist of{" "}
            <strong>8 distinct units. </strong>Each catering to specific age
            group and educational needs
          </p>
        </center>
      </div>

      <div className="col-md-10 offset-md-1 flexy">
        <div className="col-md-6">
          <div className="col-md-11">
            {" "}
            <p>
              <strong> 1. The Early Learning Center:</strong> Providing
              comprehensive family day care services for children aged 3 months
              to 10 years, including crèche, day care, after-school care,
              weekend care, and holiday care packages.
            </p>
            <p>
              <strong> 2. Early Years Nursery Section:</strong> Divided into the
              Lower Nursery, which encompasses Ladybird (Preschool) and
              Bumblebee (Nursery 1), and the Upper Nursery, comprising Honey Bee
              (Nursery 2) and Busy Bee (Nursery 3).
            </p>
            <p>
              <strong> 3. Inclusion Unit: </strong>Does your child have mild
              special needs or are you concerned about missed milestones. We
              offer specialized occupational and behavioral therapy for young
              children with additional needs ages 5 years and below.
            </p>
            <p>
              <strong> 4. Lower Primary Section:</strong> Comprising Primary
              One, Primary Two, and Primary Three classes, providing a solid
              foundation for young learners.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="col-md-11">
            <p>
              <strong>5. Upper Primary Section: </strong>Offering classes for
              Primary Four, Primary Five, and Primary Six pupils.
            </p>
            <p>
              <strong> 6. Goldsprings Junior High Day School: </strong>Catering
              to the educational needs of Year 7, Year 8, and Year 9 students.
            </p>
            <p>
              <strong>7. Goldsprings Senior High Boarding School:</strong>{" "}
              Dedicated to Year 10, Year 11, and Year 12 students, providing a
              comprehensive boarding experience under the guidance of a
              Principal and a team of dedicated educators and support staff.{" "}
            </p>
            <p>
              <strong>8. Inspire Education Consult:</strong> the learning and
              development division of the MIS group of schools, provides a wide
              range of educational teacher training programs aimed at fostering
              world-class standards in teaching and professional growth. Our
              offerings include intensive one-day workshops, short courses, and
              ongoing development trainings meticulously designed to empower and
              inspire school teachers and staff.
            </p>
          </div>
        </div>
      </div>
      <Tour />
      <Prefooter />
    </>
  );
}

export default WhoWeAre;
