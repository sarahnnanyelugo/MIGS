import React, { useState, useRef, useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

function MobileNav() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Offcanvas
        show={show}
        onHide={handleClose}
        {...props}
        placement="end"
        restoreFocus={true}
        scroll={true}
        className="backdropClassName"
      >
        {/* <Offcanvas.Header closeButton className="mt7"></Offcanvas.Header> */}

        <Offcanvas.Body></Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default MobileNav;
