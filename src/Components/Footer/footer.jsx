import React from "react";
import { FaFacebook, FaLinkedin, FaYoutube, FaTelegram } from "react-icons/fa"; // Importing icons
import classes from "./footer.module.css"; // Assuming you have a CSS file for styles

const Footer = () => {
  return (
    <footer className={classes.footer_container}>
      <div className={classes.social_icons}>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={15} />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={15} />
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube size={15} />
        </a>
        <a href="https://t.me" target="_blank" rel="noopener noreferrer">
          <FaTelegram size={15} />
        </a>
      </div>
      <p>© 2025 Usman. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
