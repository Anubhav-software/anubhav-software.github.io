import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import CursorTrail from './components/CursorTrail';
import Hero from './sections/Hero';
import About from './sections/About';
import Stats from './sections/Stats';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

/**
 * App — top-level layout.
 * Single-page site with smooth-scroll anchored sections, sticky navbar,
 * and floating scroll-to-top button.
 */
export default function App() {
  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent-600 focus:px-3 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
      <CursorTrail />
    </>
  );
}
