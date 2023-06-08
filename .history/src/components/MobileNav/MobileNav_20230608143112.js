import React, { useState, useRef, useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

function MobileNav() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return <div>MobileNav</div>;
}

export default MobileNav;
