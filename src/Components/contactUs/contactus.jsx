import React, { useState } from "react";
import classes from "./cantactus.module.css";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com"; // Import EmailJS

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .send(
        "service_14xxgvw",
        "template_pv7golf",
        formData,
        "Zu8Nt85g-u8hmPry2"
      )
      .then((response) => {
        alert("Email sent successfully!", response.status, response.text);
        // Optionally reset the form
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
      });
  };

  return (
    <div className={classes.contact_container}>
      <h1>Contact Me,</h1>
      <h2>LET'S BUILD SOMETHING GREAT TOGETHER</h2>
      <div className={classes.contact_form_container}>
        <form onSubmit={handleSubmit}>
          <div className={classes.form_group}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder=" Name *"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder=" Email *"
              required
            />
            <div className={classes.form_group_message}>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder=" Message"
              />
            </div>
          </div>
          <button type="submit">SEND</button>
        </form>
        <div className={classes.contact_info}>
          <div className={classes.contactItem}>
            <FaPhone className={classes.callIcon} size={40} color="#4A90E2" />
            <p>Phone: +251989333841</p>
          </div>
          <div className={classes.contactItem}>
            <FaMapMarkerAlt size={40} color="#4A90E2" />
            <p>Address: Addis Ababa, Ethiopia</p>
          </div>
          <div className={classes.contactItem}>
            <FaEnvelope size={40} color="#4A90E2" />
            <p>Email: usmanalebe@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
