// import React, { useRef } from "react";
// import classes from "./header2.module.css";
// import image1 from "../../images/laptop.jpg"; // Your background image
// import Header from "./header";

// const Header2 = ({ scrollToSection, contactRef }) => {
//   return (
//     <div className={classes.container}>
//       <header className={classes.header}>
//         <h1>Hi, I'm Usman Alebe</h1>
//         <h2>Full Stack Web Developer</h2>
//         <h2>I'm a Freelance</h2>
//         <p>Based in Addis Ababa, Ethiopia</p>
//         <Header contactRef={contactRef} />
//         <li>
//           <button
//             className={classes.hire_me}
//             onClick={() => scrollToSection(contactRef)}
//           >
//             Hire Me
//           </button>
//         </li>
//       </header>
//       <div className={classes.image_container}>
//         <img
//           src={image1}
//           alt="Background"
//           className={classes.backgroundImage}
//         />
//       </div>
//     </div>
//   );
// };

// export default Header2;
import React from "react";
import classes from "./header2.module.css";
import image1 from "../../images/laptop.jpg"; // Your background image
import Header from "./header";

const Header2 = ({ scrollToSection, contactRef }) => {
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <h1>Hi, I'm Usman Alebe</h1>
        <h2>Full Stack Web Developer</h2>
        <h2>I'm a Freelance</h2>
        <p>Based in Addis Ababa, Ethiopia</p>
        <Header contactRef={contactRef} />
        <li>
          <button
            className={classes.hire_me}
            onClick={() => scrollToSection(contactRef)}
          >
            Hire Me
          </button>
        </li>
      </header>
      <div className={classes.image_container}>
        <img
          src={image1}
          alt="Background"
          className={classes.backgroundImage}
        />
      </div>
    </div>
  );
};

export default Header2;
