import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./page-menu.scss";
function PageMenu(props) {
  return (
    <div className="col-md-12 page-menu-div ">
      <ul className="list-unstyled list-inline offset-md-1">
        <li className="list-inline-item">
          <NavLink
            className="menu-links"
            to={props.url1}
            activeClassName="active"
          >
            {props.page1}
          </NavLink>
        </li>{" "}
        <li className="list-inline-item">
          <NavLink
            className="menu-links"
            to={props.url2}
            activeClassName="active"
          >
            {props.page2}
          </NavLink>
        </li>{" "}
        <li className="list-inline-item">
          <NavLink
            className="menu-links"
            to={props.url3}
            activeClassName="active"
          >
            {props.page3}
          </NavLink>
        </li>{" "}
        <li className="list-inline-item">
          <NavLink
            className="menu-links"
            to={props.url4}
            activeClassName="active"
          >
            {props.page4}
          </NavLink>
        </li>{" "}
        {props.page5 ? (
          <li className="list-inline-item">
            <NavLink
              to={`${props.Url5}`}
              activeClassName="active"
              className="menu-links"
            >
              {props.page5}
            </NavLink>
          </li>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
}

export default PageMenu;
