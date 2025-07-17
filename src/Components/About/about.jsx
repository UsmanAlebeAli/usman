import React from "react";
import usman from "../../images/usman1.jpg";
import classes from "../About/about.module.css";
function About() {
  const skills = [
    "HTML",
    "CSS",
    "Bootstrap",
    "JavaScript",
    "React",
    "JSX",
    "REST API",
    "WordPress",
    "JQuery",
    "Node",
    "Express",
    "PHP",
    "API",
    "MySQL",
    "Firebase",
    "JSON",
    "Java",
    "C++",
    "Python",
    "Github",
    "Video",
    "Editing",
    "Graphics",
    "Design",
  ];
  return (
    <div className={classes.about}>
      <div className={classes.profile}>
        <img src={usman} alt="" />
      </div>
      <div className={classes.aboutMe}>
        <h1>About Me </h1>
        <p>
          I am a passionate web developer, video editor, and graphic designer
          with a love for creating visually compelling and user-friendly digital
          experiences. With a background in both design and technology, I thrive
          at the intersection of creativity and functionality
        </p>
        <p>
          I am always eager to learn new skills and stay updated with the latest
          industry trends. My goal is to continuously improve my skill and
          deliver exceptional results that exceed client expectations. Whether
          working on web projects, editing videos, or designing graphics, I
          approach each task with creativity, dedication, and a strong attention
          to detail.
        </p>
        <h1>Skill </h1>
        <div className={classes.aboutMySkills}>
          {skills.map((skill, index) => (
            <div key={index} className={classes.skill_item}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
