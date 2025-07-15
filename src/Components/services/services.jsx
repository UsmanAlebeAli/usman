import React from "react";
import classes from "./services.module.css"; // Assuming you have a CSS file for styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDesktop,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FaClock, FaRegThumbsUp, FaWifi } from "react-icons/fa";

const Servics = () => {
  return (
    <div className={classes.offer_container}>
      <h1>What I Offer</h1>
      <p>
        I’m a great team player, and I enjoy working with others. Some of my
        work qualities are listed below.
      </p>
      <div className={classes.services}>
        <div className={classes.service}>
          <FontAwesomeIcon
            icon={faDesktop}
            size="3x"
            className={classes.icons}
          />
          <h2>Web Development</h2>
          <p>
            I do some research before starting my development to choose the
            right way for the job.
          </p>
        </div>
        <div className={classes.service}>
          <FontAwesomeIcon
            icon={faMobileAlt}
            size="3x"
            className={classes.icons}
          />
          <h2>Fully Responsive</h2>
          <p>
            I design my websites for every screen size available and make sure
            it looks great on every device.
          </p>
        </div>
        <div className={classes.service}>
          <FontAwesomeIcon icon={faCode} size="3x" className={classes.icons} />
          <h2>Beautiful Code</h2>
          <p>
            Working on projects, I write beautiful and clean codes to make them
            readable for any partner or client.
          </p>
        </div>

        <div className={classes.service}>
          <FaClock size={60} className={classes.icons} />
          <h2>On Time</h2>
          <p>Always responsible to complete any given project on time.</p>
        </div>

        <div className={classes.service}>
          <FaRegThumbsUp size={60} className={classes.icons} />
          <h2>Quick Learner</h2>
          <p>
            I like to learn new things and I have the ability to learn it
            quickly.
          </p>
        </div>

        <div className={classes.service}>
          <FaWifi size={60} className={classes.icons} />
          <h2>Online</h2>
          <p>Easy to reach and happy to help.</p>
        </div>
      </div>
    </div>
  );
};

export default Servics;
