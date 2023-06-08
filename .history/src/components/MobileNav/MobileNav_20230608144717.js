import React, { useState, useRef, useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

function MobileNav({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const [click, setClick] = useState(false);

  function OpenNav() {
    const handleClick = () => setClick(!click);
    const handleShow = () => setShow(true);
  }
  return (
    <>
      {/* <button variant="" onClick={handleShow}>
        Projects
      </button> */}
      <div className="menu-icon" onClick={OpenNav}>
        <i className={click ? "icofont-ui-close" : "icofont-navigation-menu"} />
      </div>
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