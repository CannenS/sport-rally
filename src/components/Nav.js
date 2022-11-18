import React from "react";
import { Link } from "react-router-dom";
import logo from "../pages/tradeMark.png";

function Nav() {
  return (
    <div className="nav">
      <img src={logo} alt="" className="logo" />
      <Link to="/" style={{ textDecoration: "none" }}>
        <p>Home</p>
      </Link>
      <Link to="/About" style={{ textDecoration: "none" }}>
        <p>About</p>
      </Link>
      <Link to="/About" style={{ textDecoration: "none" }}>
        <p>Pages</p>
      </Link>
      <Link to="/About" style={{ textDecoration: "none" }}>
        <p>Players</p>
      </Link>
    </div>
  );
}

export default Nav;
