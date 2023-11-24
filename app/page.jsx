import Home from "./components/home/page";
import About from "./components/about/page";
import Projects from "./components/projects/page";
import Contact from "./components/contact/page";
import ProjectsOverlay from "./components/overlays/ProjectsOverlay";
import AboutOverlay from "./components/overlays/AboutOverlay";

const App = () => {
  return (
    <>
      <section id="home">
        <Home />
      </section>
      <AboutOverlay />
      <section id="about">
        <About />
      </section>
      <div>
        <ProjectsOverlay />
      </div>
      <section id="projects">
        <Projects />
      </section>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

export default App;
