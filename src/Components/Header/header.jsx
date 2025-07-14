import React from "react";
import classes from "./header.module.css";
import { Link } from "react-router-dom";
import uaa from "../../images/uaa.png";
function Header() {
  return (
    <div className={classes.portfolio}>
      <nav className={classes.headerNav}>
        <div className={classes.logo}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <img src={uaa} /> <b>Usman </b>
          </Link>
        </div>
        <ul className={classes.navLinks}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Portfolio</Link>
          </li>
          <li>
            <Link to="/">Services </Link>
          </li>
          <li>
            <Link to="/">Resume</Link>
          </li>
          <li>
            <Link to="/">Contacts</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
