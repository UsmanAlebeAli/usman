import About from "../About/about";
import Header2 from "../Header/header2";
import ResumeDownload from "../Resume/resume";
import RecentWorks from "../Works/recentWorks";
import ContactForm from "../contactUs/contactus";
import Servics from "../services/services";

function All() {
  return (
    <div className="App">
      <Header2 />
      <About />
      <ResumeDownload />
      <Servics />
      <RecentWorks />
      <ContactForm />
    </div>
  );
}

export default All;
