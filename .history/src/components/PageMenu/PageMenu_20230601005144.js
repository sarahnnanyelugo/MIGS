import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./page-menu.scss";
function PageMenu() {
  return (
    <div className="col-md-12 page-menu-div offset-md-1">
      <ul className="list-unstyled list-inline">
        <li className="list-inline-item">
          <NavLink
            className="menu-links"
            to={"/about-us"}
            activeClassName="active"
          >
            Who we are
          </NavLink>
        </li>{" "}
        <li className="list-inline-item">
          <NavLink
            className="menu-links"
            to={"/mision"}
            activeClassName="active"
          >
            Our Mission
          </NavLink>
        </li>{" "}
        <li className="list-inline-item">
          <NavLink
            className="menu-links"
            to={"/history"}
            activeClassName="active"
          >
            School History
          </NavLink>
        </li>{" "}
        <li className="list-inline-item">
          <NavLink
            className="menu-links"
            to={"/achievements"}
            activeClassName="active"
          >
            Our Achievements
          </NavLink>
        </li>{" "}
        <li className="list-inline-item">
          <NavLink
            className="menu-links"
            to={"/contact-us"}
            activeClassName="active"
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default PageMenu;
