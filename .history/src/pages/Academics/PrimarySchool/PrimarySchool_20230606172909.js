import React from "react";
import LandingImg from "../../../assets/images/playground.png";
import Speaker from "../../../assets/images/speaking.png";
import Cooking from "../../../assets/images/cooking.png";
import Cheering from "../../../assets/images/cheer.png";
import Speakers from "../../../assets/images/speakers.png";
import { Breadcrum } from "../../../components/BreadCrumb/BreadCrumb";
import PageMenu from "../../../components/PageMenu/PageMenu";
import Tour from "../../../components/Tour/Tour";
import Prefooter from "../../../components/Prefooter/Prefooter";

function PrimarySchool() {
  return (
    <>
      <div className="col-md-12 ">
        <img className="" src={LandingImg} alt="Scholar" width="100%" />{" "}
        <div className="centered2 col-md-5 offset-md-1">
          <h1>Academics</h1>
        </div>
      </div>
      <PageMenu
        page1="Early Years"
        url1={"/eyfs"}
        page2="Primary School"
        url2={"/primary"}
        page3="Junior Seconday"
        url3={"/junior-sec"}
        // page4="Junior Seconday"
        // url4={"/junior-sec"}
      />
      <Breadcrum
        page1="About"
        currentPage="Primary School"
        pageUrl={"/events"}
        nav="Academics"
      />
      <br />
      <br />
      <br />
      <center>
        <h1 className="grey-heading2">Primary School</h1>
      </center>
      <div className="col-md-10 offset-md-1 flexy">
        <div className="col-md-8">
          <p>
            {" "}
            At our school, the primary section is where the big things happens!
            From Primary 1 to Primary 6, we create a vibrant and engaging
            learning environment that sparks curiosity, nurtures creativity, and
            helps young minds blossom.{" "}
          </p>
          <p> Here’s what makes our primary section truly extraordinary:</p>
          <p>
            1. <strong>Fantastic Classes: </strong>Step into our classrooms, and
            you’ll find a world of excitement and learning. Our dedicated
            teachers bring lessons to life, making every day an adventure filled
            with exploration, laughter, and “aha” moments.
          </p>
          <p>
            {" "}
            2. <strong>Extracurricular: </strong>We believe that education goes
            beyond textbooks. That’s why we have a robust extracurricular
            department that offers a wide range of activities to cater to every
            interest. From sports to arts, music to STEM, there’s something for
            everyone to discover their passion and unleash their hidden talents.{" "}
          </p>
          <p>
            {" "}
            3. <strong>Bible Club:</strong> As a school rooted in the Christian
            faith, we offer a free Bible club where children can deepen their
            spiritual understanding, build strong moral foundations, and
            experience the power of faith in a welcoming and supportive
            environment.
          </p>
          <p>
            {" "}
            4. <strong>Eloquent Eloquence:</strong> We believe in the power of
            effective communication. Our elocution classes help students develop
            excellent public speaking skills, express themselves confidently,
            and become eloquent storytellers who captivate audiences with their
            words.
          </p>
        </div>
        <div className="col-md-3 offset-md-1">
          {" "}
          <img className="" src={Speaker} alt="Scholar" width="100%" />{" "}
        </div>
      </div>
      <div className="col-md-10 offset-md-1 flexy mt5 other-imgs">
        <div className="col-md-4">
          <div className="col-md-11">
            {" "}
            <img className="" src={Cooking} alt="Scholar" width="100%" />{" "}
          </div>
        </div>
        <div className="col-md-4">
          <div className="col-md-11">
            {" "}
            <img className="" src={Cheering} alt="Scholar" width="100%" />{" "}
          </div>
        </div>
        <div className="col-md-4">
          <div className="col-md-11">
            {" "}
            <img className="" src={Speakers} alt="Scholar" width="100%" />{" "}
          </div>
        </div>
      </div>
      <div className="col-md-6 offset-md-1 mt5">
        <p>
          5.<strong> Best of Both Worlds: </strong>Our curriculum is a magical
          blend of the Pearson International Primary Curriculum (IPC) and the
          rich Nigerian curriculum. This unique combination ensures that our
          students receive a well-rounded education that combines global
          perspectives with a deep understanding of their own culture and
          heritage.
        </p>
        <p>
          6. <strong>Enriching Experiences: </strong>Excursions, guest speakers,
          and hands-on projects are just a few of the exciting experiences we
          offer to enrich learning beyond the classroom walls. We believe that
          real-world connections make learning more meaningful and
          unforgettable.
        </p>
        <p>
          7. <strong>Supportive Community:</strong> Our school is more than just
          a place of learning; it’s a warm and inclusive community. We foster
          strong partnerships with parents, ensuring open lines of communication
          and collaborative efforts to support each child’s growth and success.
        </p>
        <p>
          So, come join us in our Primary Section, where education is an
          adventure, friendships are forged, dreams take flight, and every
          child’s potential is celebrated. Together, let’s create unforgettable
          memories and lay the foundation for a bright future!
        </p>
      </div>
      <br />
      <br />
      <br />
      {/* <Tour /> */}
      <Prefooter />
    </>
  );
}

export default PrimarySchool;
