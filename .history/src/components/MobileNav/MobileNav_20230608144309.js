import React, { useState, useRef, useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

function MobileNav({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button variant="" onClick={handleShow}>
        Projects
      </button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        {...props}
        placement="start"
        restoreFocus={true}
        scroll={true}
        className="backdropClassName"
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
