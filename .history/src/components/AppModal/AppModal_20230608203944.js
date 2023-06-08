import "./_app-modal.scss";
import { Link, NavLink } from "react-router-dom";

import Pic1 from "../../assets/images/modal.png";

import React, { useEffect, useRef, useState } from "react";

export const AppModal = () => {
  const [showActive, setShowActive] = useState(false);
  const modalContainer = useRef(null);
  const bodyTag = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setShowActive(true);
    }, 2000);
  }, []);
  const setThisShowActive = () => {
    setShowActive(!showActive);
  };
  return (
    <>
      <div
        className={`col-md-2 my-app-modal-container ${
          showActive ? "modal-active" : ""
        }`}
      >
        <div
          ref={modalContainer}
          className={`col-md-12 ${showActive ? "two" : ""}`}
          id="modal-container"
        >
          <div className="modal-background col-md-12">
            <button onClick={setThisShowActive} className="close-btn">
              {/* <i class="icofont-close">x</i> */}X
            </button>

            <div className="modal col-md-10">
              <div className="col-md-12 ">
                <div className="">
                  <img className="" src={Pic1} alt="Scholar" width="100%" />
                </div>
                <h2>Admission in progress</h2>
                <p>
                  Admission is currently on into Creche, Pre-school, Primary and
                  Secondary classes.
                </p>
                <Link to={"/admission"} style={{ textDecoration: "none" }}>
                  {" "}
                  <buttton className="app-btn col-md-12">Apply Now</buttton>
                </Link>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
