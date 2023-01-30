import React from "react";
import horse from "../Assets/horse.jpg";
import { Link } from "react-router-dom";
import "../Styles/Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={horse} />
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/main"> Main </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
      </div>
    </div>
  );
}

export default Navbar;
