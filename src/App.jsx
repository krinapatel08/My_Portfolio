import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/AboutSection";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/projects/Projects";
import Footer  from "./components/Footer";
import ScrollToTop from "./helper/ScrollToTop";
import 'react-toastify/dist/ReactToastify.css';
import ContactSection from "./components/ContactSection";

import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div className="bg-[#0d1224] text-white min-h-screen px-4 md:px-12 lg:px-24">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Projects />
      <ContactSection />
      <Footer />
      <ScrollToTop />
      <ToastContainer />
    </div>
  );
}

export default App;
