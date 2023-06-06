import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "./_navbar.scss";
import { useLocation } from "react-router-dom";
// import Icofont from "react-icofont";
import Logo from "../../assets/images/logo2.png";

function NavBar() {
  return (
    <>
      <div className="nav-container col-md-10 offset-md-1">
        {" "}
        <div className=" col-md-1 tech-logo-div">
          {" "}
          <NavLink to={"/"}>
            <img className="tech-logo" src={Logo} alt="Scholar" width="60%" />
          </NavLink>
        </div>
        <ul className=" list-inline list-unstyled">
          <li className="list-inline-item">
            <NavLink className="tech-links cool-link" to={"/about-us"}>
              About
            </NavLink>
          </li>
          <li className="list-inline-item">
            <NavLink className="tech-links cool-link" to={"/admission"}>
              Admission
            </NavLink>
          </li>
          <li className="list-inline-item">
            <NavLink className="tech-links cool-link" to={"/eyfs"}>
              Academics
            </NavLink>
          </li>
          <li className="list-inline-item">
            <NavLink className="tech-links cool-link" to={"/iec"}>
              IEC
            </NavLink>
          </li>{" "}
          <li className="list-inline-item">
            <NavLink className="tech-links cool-link">E-shop</NavLink>
          </li>
          <li className="list-inline-item">
            <NavLink className="tech-links cool-link" to={"/gallery"}>
              Gallery
            </NavLink>
          </li>
          <li className="list-inline-item">
            <button className="nav-btn">e-portal</button>
          </li>
          <li>
            <div className="mobile-menu">
              <div class="sec-center">
                <input
                  class="dropdown"
                  type="checkbox"
                  id="dropdown"
                  name="dropdown"
                />
                <label class="col-md-1" for="dropdown">
                  menu<i class="icofont-home"></i>
                </label>
                <div class="section-dropdown col-12 col-md-12">
                  <a href="#">About</a>
                  <input
                    class="dropdown-sub"
                    type="checkbox"
                    id="dropdown-sub"
                    name="dropdown-sub"
                  />
                  <label class="for-dropdown-sub" for="dropdown-sub">
                    Dropdown Sub
                  </label>
                  <div class="section-dropdown-sub">
                    <a href="#">Dropdown Link</a>
                    <a href="#">Dropdown Link</a>
                  </div>
                  <a href="#">Dropdown Link</a>
                  <a href="#">Dropdown Link</a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
