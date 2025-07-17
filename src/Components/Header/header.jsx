import React from "react";
import classes from "./header.module.css";
import { Link } from "react-router-dom";
import uaa from "../../images/uaa.png";
function Header({
  scrollToSection,
  headRef,
  aboutRef,
  portRef,
  resumeRef,
  servicesRef,
  contactRef,
}) {
  return (
    <div className={classes.portfolio}>
      <nav className={classes.headerNav}>
        <div className={classes.logo}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <img src={uaa} alt=""/> <b>Usman </b>
          </Link>
        </div>
        <ul className={classes.navLinks}>
          <li onClick={() => scrollToSection(headRef)}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={() => scrollToSection(aboutRef)}>
            <Link to="/about">About</Link>
          </li>
          <li onClick={() => scrollToSection(portRef)}>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li onClick={() => scrollToSection(servicesRef)}>
            <Link to="/services">Services</Link>
          </li>
          <li onClick={() => scrollToSection(resumeRef)}>
            <Link to="/resume">Resume</Link>
          </li>
          <li onClick={() => scrollToSection(contactRef)}>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
