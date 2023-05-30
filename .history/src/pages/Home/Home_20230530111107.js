import React from "react";
import { AppModal } from "../../components/AppModal/AppModal";
import LandingImg from "../../assets/images/table.jpeg";

function Home() {
  return (
    <>
      <div className="col-md-12 landing-img"></div>
      <div>
        <AppModal />
      </div>
    </>
  );
}

export default Home;
