import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";

function MobileNav({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      {/* <button variant="" onClick={handleShow}>
        Projects
      </button> */}
      <div className="menu-icon" onClick={handleClick}>
        <i
          className={click ? "icofont-ui-close" : "icofont-navigation-menu"}
          onClick={handleShow}
        />
      </div>
      <Offcanvas
        show={show}
        onHide={handleClose}
        {...props}
        placement="start"
        restoreFocus={true}
        scroll={false}
        className="backdropClassName"
        {...props}
        style={{ marginTop: "100px" }}
      >
        {/* <Offcanvas.Header closeButton className="mt7"></Offcanvas.Header> */}

        <Offcanvas.Body>
          <div class="list-group options">
            <NavLink to={"/about-us"} className="menu-navs">
              {" "}
              <button
                type="button"
                class="list-group-item list-group-item-action "
                aria-current="true"
                style={{}}
                onClick={handleClose}
              >
                <span style={{}}>
                  <i class="icofont-help-robot"></i>
                </span>
                About
              </button>
            </NavLink>
            <NavLink to={"/admission"} className="menu-navs">
              {" "}
              <button
                type="button"
                class="list-group-item list-group-item-action"
                style={{}}
                onClick={handleClose}
              >
                <span style={{}}>
                  <i class="icofont-apply"></i>
                </span>
                Admission
              </button>{" "}
            </NavLink>
            <NavLink to={"/academics"} className="menu-navs">
              {" "}
              <button
                type="button"
                class="list-group-item list-group-item-action"
                style={{}}
                onClick={handleClose}
              >
                <span style={{}}>
                  <i class="icofont-graduate-alt"></i>
                </span>
                Academics
              </button>
            </NavLink>
            <NavLink to={"/iec"} className="menu-navs">
              {" "}
              <button
                type="button"
                class="list-group-item list-group-item-action"
                style={{}}
                onClick={handleClose}
              >
                <span style={{}}>
                  <i class="icofont-dashboard-web"></i>
                </span>
                IEC
              </button>
            </NavLink>
            <NavLink to={"/e-shop"} className="menu-navs">
              {" "}
              <button
                type="button"
                class="list-group-item list-group-item-action"
                style={{}}
                onClick={handleClose}
              >
                <span style={{}}>
                  <i class="icofont-shopping-cart"></i>
                </span>
                E-shop
              </button>
            </NavLink>{" "}
            <NavLink to={"/gallery"} className="menu-navs">
              {" "}
              <button
                type="button"
                class="list-group-item list-group-item-action"
                style={{}}
                onClick={handleClose}
              >
                <span style={{}}>
                  <i class="icofont-picture"></i>
                </span>
                Gallery
              </button>
            </NavLink>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default MobileNav;
