import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="container">

      <Sidebar />

      <div className="main">

        <Hero />

        <About />

        <Skills />

        <Projects />

        <Certifications />

        <Contact />

        <Footer />

      </div>

    </div>
  );
}

export default App;