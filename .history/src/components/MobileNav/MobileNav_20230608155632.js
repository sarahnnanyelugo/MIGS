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
            <NavLink to={""} className="menu-navs">
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
                Solutions
              </button>
            </NavLink>
            <NavLink to={""} className="menu-navs">
              {" "}
              <button
                type="button"
                class="list-group-item list-group-item-action"
                style={{}}
                onClick={handleClose}
              >
                <span style={{}}>
                  <i class="icofont-package"></i>
                </span>
                Resources
              </button>{" "}
            </NavLink>
            <NavLink to={""} className="menu-navs">
              {" "}
              <button
                type="button"
                class="list-group-item list-group-item-action"
                style={{}}
                onClick={handleClose}
              >
                <span style={{}}>
                  <i class="icofont-support"></i>
                </span>
                Support
              </button>
            </NavLink>
            <NavLink to={"/contact-us"} className="menu-navs">
              {" "}
              <button
                type="button"
                class="list-group-item list-group-item-action"
                style={{}}
                onClick={handleClose}
              >
                <span style={{}}>
                  <i class="icofont-phone"></i>
                </span>
                Contact us
              </button>
            </NavLink>
            <NavLink to={"/login"} className="menu-navs">
              {" "}
              <button
                type="button"
                class="list-group-item list-group-item-action"
                style={{}}
                onClick={handleClose}
              >
                <span style={{}}>
                  <i class="icofont-sign-in"></i>
                </span>
                Login
              </button>
            </NavLink>{" "}
            <NavLink to={"/sign-up"} className="menu-navs">
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
                Get started
              </button>
            </NavLink>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default MobileNav;
