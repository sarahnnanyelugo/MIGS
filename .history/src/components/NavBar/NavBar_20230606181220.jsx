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
              <input type="checkbox" id="dark-light" name="dark-light" />
              <label for="dark-light"></label>

              <div class="light-back"></div>

              <a href="https://front.codes/" class="logo" target="_blank">
                {/* <img src="https://assets.codepen.io/1462889/fcy.png" alt=""> */}
                img
              </a>

              <div class="sec-center">
                <input
                  class="dropdown"
                  type="checkbox"
                  id="dropdown"
                  name="dropdown"
                />
                <label class="for-dropdown" for="dropdown">
                  Dropdown Menu <i class="uil uil-arrow-down"></i>
                </label>
                <div class="section-dropdown">
                  <a href="#">
                    Dropdown Link <i class="uil uil-arrow-right"></i>
                  </a>
                  <input
                    class="dropdown-sub"
                    type="checkbox"
                    id="dropdown-sub"
                    name="dropdown-sub"
                  />
                  <label class="for-dropdown-sub" for="dropdown-sub">
                    Dropdown Sub <i class="uil uil-plus"></i>
                  </label>
                  <div class="section-dropdown-sub">
                    <a href="#">
                      Dropdown Link <i class="uil uil-arrow-right"></i>
                    </a>
                    <a href="#">
                      Dropdown Link <i class="uil uil-arrow-right"></i>
                    </a>
                  </div>
                  <a href="#">
                    Dropdown Link <i class="uil uil-arrow-right"></i>
                  </a>
                  <a href="#">
                    Dropdown Link <i class="uil uil-arrow-right"></i>
                  </a>
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
