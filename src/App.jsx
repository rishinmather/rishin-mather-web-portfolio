import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import { About } from "./Components/About";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Footer />
    </>
  );
}
