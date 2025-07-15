import "./App.css";
import Footer from "./Components/Footer/footer";
import Header from "./Components/Header/header";
import ResumeDownload from "./Components/Resume/resume";
import Header2 from "./Components/Header/header2";
import About from "./Components/About/about";
import Servics from "./Components/services/services";
import RecentWorks from "./Components/Works/recentWorks";
import ContactForm from "./Components/contactUs/contactus";

function App() {
  return (
    <div className="App">
      <Header />
      <Header2 />
      <About />
      <ResumeDownload />
      <Servics />
      <RecentWorks />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
