import React from "react";
import classes from "./resume.module.css"; // Assuming you have a CSS file for styles

const ResumeDownload = () => {
  const handleDownload = () => {
    // Logic to download the resume
    const link = document.createElement("a");
    link.href = "../../files/CV.pdf"; // Correct path
    link.download = "CV.pdf"; // Name of the downloaded file  // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={classes.resume_container}>
      <h1>View my resume</h1>
      <p>Detailed resume can be downloaded right below.</p>
      <button className={classes.download_button} onClick={handleDownload}>
        DOWNLOAD RESUME
      </button>
    </div>
  );
};

export default ResumeDownload;
