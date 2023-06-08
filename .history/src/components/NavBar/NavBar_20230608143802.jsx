import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "./_navbar.scss";
import { useLocation } from "react-router-dom";
import Icofont from "react-icofont";
import Logo from "../../assets/images/logo2.png";
import MobileNav from "../MobileNav/MobileNav";

function NavBar() {
  // const [mNav, setMNav] = useState(false);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navContainer col-md-12 col-12">
        {" "}
        <div className="nav-container col-md-10 offset-md-1 ">
          {" "}
          <div className=" col-md-1 tech-logo-div">
            {" "}
            <NavLink to={"/"}>
              <img className="tech-logo" src={Logo} alt="Scholar" width="60%" />
            </NavLink>
          </div>
          <div className="menu-icon" onClick={handleClick}>
            <i
              className={click ? "icofont-ui-close" : "icofont-navigation-menu"}
            />
            {/* <h6 style={{ color: "red" }}>open</h6> */}
          </div>
          <ul
            className={
              click ? "list-inline list-unstyled nav-list active" : "nav-list"
            }
          >
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
          </ul>
        </div>
      </nav>
      <MobileNav />
    </>
  );
}

export default NavBar;
