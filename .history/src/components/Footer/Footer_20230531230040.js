import React from "react";
import Tel from "../../assets/images/tel.png";
import Message from "../../assets/images/message.png";
import "./footer.scss";
function Footer() {
  return (
    <>
      <div className="col-md-10 offset-md-1  flexy footer-container">
        <div className="col-md-2">
          <h5>GET IN TOUCH</h5>
          <ul className="list-unstyled">
            <li>
              {" "}
              <img
                className="tech-logo"
                src={Tel}
                alt="Scholar"
                width="10%"
              />{" "}
              (+234) 802 508 2340 (+234) 813 850 6540
            </li>
            <li>
              {" "}
              <img
                className="tech-logo"
                src={Tel}
                alt="Scholar"
                width="10%"
              />{" "}
              (+234) 802 508 2340 (+234) 813 850 6540
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
