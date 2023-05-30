import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "./_navbar.scss";
import { useLocation } from "react-router-dom";
// import Icofont from "react-icofont";
import Logo from "../../assets/images/logo2.png";

function NavBar() {
  useEffect(() => {
    const handleClick = () => {
      // eslint-disable-next-line no-restricted-globals
      const nav = event.target.parentElement.parentElement;
      const _class = "open";

      nav.classList.contains(_class)
        ? nav.classList.remove(_class)
        : nav.classList.add(_class);
    };

    if (document.readyState === "complete") {
      setTimeout(handleClick);
    } else if (window.addEventListener) {
      window.addEventListener("load", handleClick, false);
    } else if (window.attachEvent) {
      window.attachEvent("onload", handleClick);
    }

    return () => {
      // Clean up event listeners if needed
      if (window.addEventListener) {
        window.removeEventListener("load", handleClick);
      } else if (window.attachEvent) {
        window.detachEvent("onload", handleClick);
      }
    };
  }, []);
  return (
    <>
      <div className="nav-container col-md-10 offset-md-1">
        {" "}
        <div className=" col-md-1 tech-logo-div">
          {" "}
          <img className="tech-logo" src={Logo} alt="Scholar" width="60%" />
        </div>
        <ul className="list-inline list-unstyled ">
          <li className="list-inline-item">
            <NavLink className="tech-links cool-link" to={"/"}>
              About
            </NavLink>
          </li>
          <li className="list-inline-item">
            <NavLink className="tech-links cool-link">Admission</NavLink>
          </li>
          <li className="list-inline-item">
            <NavLink className="tech-links cool-link">Academics</NavLink>
          </li>
          <li className="list-inline-item">
            <NavLink className="tech-links cool-link">IEC</NavLink>
          </li>{" "}
          <li className="list-inline-item">
            <NavLink className="tech-links cool-link">E-shop</NavLink>
          </li>
          <li className="list-inline-item">
            <NavLink className="tech-links cool-link">Gallery</NavLink>
          </li>
          <li className="list-inline-item">
            <button className="nav-btn">e-portal</button>
          </li>
          <li>
            <div class="mobile-container ">
              <input id="toggle" type="checkbox" />

              <label class="toggle-container" for="toggle">
                <span class="button button-toggle"></span>
              </label>

              <nav class="nav">
                <a class="nav-item" href="">
                  Dashboard
                </a>
                <a class="nav-item" href="">
                  History
                </a>
                <a class="nav-item" href="">
                  Statistics
                </a>
                <a class="nav-item" href="">
                  Settings
                </a>
              </nav>

              <section class="dummy-content">
                <div class="circle"></div>
                <div class="text">
                  <span></span>
                  <span></span>
                </div>
                <div class="square-top"></div>
                <div class="square-behind"></div>
              </section>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
