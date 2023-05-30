import React, { useEffect, useState, useRef } from "react";
// import Arrow from "../../assets/images/arrowdown.svg";
import { Link, NavLink } from "react-router-dom";
import "./_navbar.scss";
import { useLocation } from "react-router-dom";
// import Icofont from "react-icofont";
import Logo from "../../assets/images/logo2.png";

function NavBar() {
  const prevUrlRef = useRef(null);
  const [themeSet, setTheme] = useState("");
  const location = useLocation();
  function SwitchTheme(theme) {
    switch (location.pathname) {
      case "/":
        setTheme("transparent");

        break;
      default:
      case "/team-hire":
        setTheme("#2F99DA");
    }
  }
  useEffect(() => {
    SwitchTheme("#2f99da");
  }, []);
  useEffect(() => {
    SwitchTheme("#2f99da");
  }, [location.pathname]);
  return (
    <>
      <div className="col-md-12" style={{ background: themeSet }}>
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
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
