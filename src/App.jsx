import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import ParticlesBG from "./components/ParticlesBG";
import Cursor from "./components/Cursor";
import Timeline from "./components/Timeline";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden
                    bg-slate-50 dark:bg-black
                    transition-colors duration-500">

      {/* 🌌 Background Particles */}
      <ParticlesBG />

      {/* ✨ Custom Cursor */}
      <Cursor />

      {/* 🧭 Navbar (ThemeToggle is inside Navbar) */}
      <Navbar />

      {/* 🎥 Cinematic Page Load */}
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <Hero />
          <About />
          <Education />
          <Timeline />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </motion.main>
      </AnimatePresence>
    </div>
  );
}
