import React from "react";
import { AppModal } from "../../components/AppModal/AppModal";
import LandingImg from "../../assets/images/table.jpeg";

function Home() {
  return (
    <>
      <div className="col-md-12 landing-img">
        <img
          className="tech-logo"
          src={LandingImg}
          alt="Scholar"
          width="100%"
        />
      </div>
      <div>
        <AppModal />
      </div>
    </>
  );
}

export default Home;
