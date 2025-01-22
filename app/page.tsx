import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div>
      <Header />
      <Skills />
      <AboutMe />
      <Experience />
      <Projects />
    </div>
  );
}
