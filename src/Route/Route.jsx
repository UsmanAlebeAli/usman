import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../Components/Header/header";
import About from "../Components/About/about";
import ResumeDownload from "../Components/Resume/resume";
import Servics from "../Components/services/services";
import ContactForm from "../Components/contactUs/contactus";
import Footer from "../Components/Footer/footer";
import All from "../Components/All/all";
import Port from "../Components/port/port";
import classes from "./route.module.css";
function AppRoute() {
  return (
    <div className={classes.route_container}>
      <Header />

      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Port />} />
        <Route path="/services" element={<Servics />} />
        <Route path="/resume" element={<ResumeDownload />} />
        <Route path="/contacts" element={<ContactForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default AppRoute;
