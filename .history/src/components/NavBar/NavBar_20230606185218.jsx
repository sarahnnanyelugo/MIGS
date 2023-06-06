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
          <li></li>
        </ul>
      </div>
      <div className="mobile-menu">
        <div class="dots" onclick="this.classList.toggle('active');">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="shadow cut"></div>
          <div class="container cut">
            <div class="drop cut2"></div>
          </div>
          <div class="list">
            <ul>
              <li>Mark as read</li>
              <li>Flag as important</li>
              <li>Save for later</li>
              <li>Move to trash</li>
              <li>Mark as spam</li>
            </ul>
          </div>
          <div class="dot"></div>
        </div>
        <div
          class="cursor"
          onclick="document.querySelector('.dots').classList.toggle('active');"
        ></div>
      </div>
    </>
  );
}

export default NavBar;
