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
        <ul className="list-inline list-unstyled ">
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
          <div className="wrapper">
            <ul className="mainMenu">
              <li className="item" id="account">
                <a href="#account" className="btn">
                  About
                </a>
                <div className="subMenu">
                  <NavLink
                    to={"/principal"}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Administrator's Message
                  </NavLink>{" "}
                  <NavLink
                    to={"/message"}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Proprietor's Message
                  </NavLink>
                  <NavLink
                    to={"/history"}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    History
                  </NavLink>
                  <NavLink
                    to={"/contact"}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Contact Us
                  </NavLink>
                  <NavLink
                    to={"/Conduct"}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Parents Code-of-Conduct
                  </NavLink>
                </div>
              </li>

              <li className="item" id="academics">
                <a href="#academics" class="btn">
                  Admission
                </a>
                <div className="subMenu">
                  <NavLink
                    to={"/apply"}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    How to Apply
                  </NavLink>{" "}
                  <NavLink
                    to={"/fees"}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    School Fees
                  </NavLink>{" "}
                  <NavLink
                    to={"/transfer"}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Transfer
                  </NavLink>{" "}
                </div>
              </li>

              <li className="item" id="admission">
                <a href="#admission" class="btn">
                  Academics
                </a>
                <div className="subMenu">
                  <NavLink
                    to={"/senior"}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Creche
                  </NavLink>{" "}
                  <NavLink
                    to={"/junior"}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Higher Primary
                  </NavLink>{" "}
                  <NavLink
                    to={"/Primary"}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Junior Primary
                  </NavLink>{" "}
                  <NavLink
                    to={"/secondary"}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Secondary
                  </NavLink>{" "}
                </div>
              </li>

              <li className="item" id="support">
                <a href={"/school"} class="btn">
                  School Life
                </a>
              </li>

              <li className="item" id="support">
                <a href="/Gallery" class="btn">
                  Gallery
                </a>
              </li>

              <li className="item" id="support">
                <a href="/News" class="btn">
                  News & Events
                </a>
              </li>
              <li class="item">
                <a
                  className="portal btn btn-sm"
                  href="https://evergreen.educare.school/"
                  target="_blank"
                >
                  PORTAL
                </a>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
