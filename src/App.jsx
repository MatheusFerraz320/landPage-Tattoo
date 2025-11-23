import NavBar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Orcament from "./components/Orcament";

function App() {
  return (
    <div className="bg-[#fdfdf9] text-gray-800 scroll-smooth">
      <NavBar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="Orcament">
        <Orcament />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
