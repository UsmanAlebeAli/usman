import React, { useRef } from "react";
import About from "../About/about";
import ResumeDownload from "../Resume/resume";
import RecentWorks from "../Works/recentWorks";
import ContactForm from "../contactUs/contactus";
import Servics from "../services/services";
import Header from "../Header/header";
import Port from "../port/port";
import Header2 from "../Header/header2";
import classes from "./all.module.css";
function All() {
  const aboutRef = useRef(null);
  const headRef = useRef(null);
  const portRef = useRef(null);
  const resumeRef = useRef(null);
  const servicesRef = useRef(null);
  const worksRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={classes.all_container}>
      <Header
        scrollToSection={scrollToSection}
        headRef={headRef}
        aboutRef={aboutRef}
        portRef={portRef}
        resumeRef={resumeRef}
        servicesRef={servicesRef}
        contactRef={contactRef}
      />
      <div ref={headRef}>
        <Header2 scrollToSection={scrollToSection} contactRef={contactRef} />
      </div>
      <div ref={portRef}>
        <Port />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>

      <div ref={resumeRef}>
        <ResumeDownload />
      </div>
      <div ref={servicesRef}>
        <Servics />
      </div>
      <div ref={worksRef}>
        <RecentWorks />
      </div>
      <div ref={contactRef}>
        <ContactForm />
      </div>
    </div>
  );
}

export default All;
