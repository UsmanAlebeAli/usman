import "./App.css";
import Footer from "./Components/Footer/footer";
import Header from "./Components/Header/header";
import Body from "./Components/body/body";
import Header2 from "./Components/Header/header2";
import About from "./Components/About/about";

function App() {
  return (
    <div className="App">
      <Header />
      <Header2 />
      <About />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
