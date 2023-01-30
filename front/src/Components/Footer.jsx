import React from "react";
import "../Styles/Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "../Styles/Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faInstagram} />
      </div>
      <p> &copy; 2023 incitatus.com</p>
    </div>
  );
}

export default Footer;
