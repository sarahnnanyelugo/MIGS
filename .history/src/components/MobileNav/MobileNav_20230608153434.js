import React, { useState, useRef, useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

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
        <Offcanvas.Header closeButton className="mt7"></Offcanvas.Header>

        <Offcanvas.Body>
          <h1>this is the mobile manu</h1>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default MobileNav;
