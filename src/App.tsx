import { useState, useEffect } from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";
import AnimatedSection from "./components/AnimatedSection";

const App = () => {
  const [darkMode, setDarkMode] = useState<boolean>(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.style.backgroundColor = "#222";
      document.body.style.color = "#f4f4f4";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.style.backgroundColor = "#f4f4f4";
      document.body.style.color = "#222";
    }
  }, [darkMode]);

  return (
    <div className="app">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <section id="about">
        <h2>About Me</h2>
        <p>
          Hello, I'm Augustinas. At the moment dedicating my time towards
          learning and getting comfortable with React eco-system.
        </p>
      </section>
      <AnimatedSection>
        <Projects />
      </AnimatedSection>

      <AnimatedSection>
        <Certifications />
      </AnimatedSection>

      <AnimatedSection>
        <Contact />
      </AnimatedSection>

      <footer>
        <p>© 2025 Augustinas Ličys. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
