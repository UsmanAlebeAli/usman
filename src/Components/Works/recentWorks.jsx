import React from "react";
import classes from "./recent.module.css";
import amazon from "../../images/amaazon.png";
import netflix from "../../images/netflix.png";
import apple from "../../images/aapple.png";

const RecentWorks = () => {
  return (
    <div className={classes.recent_works_container}>
      <h1>Recent Works</h1>
      <div className={classes.recent_works}>
        <div className={classes.work}>
          <img src={amazon} alt="Amazon" />
          <div className={classes.info}>
            <p>Amazon_clone</p>
            <a
              href="https://github.com/your-repo/amazon-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code on Github
            </a>
          </div>
        </div>
        <div className={classes.work}>
          <img src={apple} alt="Apple" />
          <div className={classes.info}>
            <p>Apple_clone </p>
            <a
              href="https://github.com/your-repo/apple-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code on Github
            </a>
          </div>
        </div>
        <div className={classes.work}>
          <img src={netflix} alt="Netflix" />
          <div className={classes.info}>
            <p>Netflix_clone </p>
            <a
              href="https://github.com/your-repo/netflix-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code on Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentWorks;
