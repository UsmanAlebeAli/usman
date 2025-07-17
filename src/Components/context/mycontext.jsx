function Contex({
  scrollToSection,
  aboutRef,
  resumeRef,
  servicesRef,
  worksRef,
  contactRef,
}) {
  return (
    <nav>
      <ul>
        <li>About</li>
        <li>Resume</li>
        <li onClick={() => scrollToSection(servicesRef)}>Services</li>
        <li onClick={() => scrollToSection(worksRef)}>Recent Works</li>
        <li onClick={() => scrollToSection(contactRef)}>Contact</li>
      </ul>
    </nav>
  );
}

export default Contex;
