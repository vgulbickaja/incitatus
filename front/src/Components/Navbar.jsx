import React from "react";
import horse from "../Assets/horse.jpg";
import { Link } from "react-router-dom";
import "../Styles/Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { ShoppingCart } from "phosphor-react";
import { useState } from "react";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={horse} />
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/shop"> Shop </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
          <Link to="/cart"> Cart </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/shop"> Shop </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
        <button onClick={toggleNavbar}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
