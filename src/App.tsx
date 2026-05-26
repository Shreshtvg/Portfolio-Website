import { useState } from "react";
import { AnimatePresence } from "motion/react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import ParticleGlow from "./components/ParticleGlow";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-[#0B1220] text-white selection:bg-[#FF6B4A]/30 selection:text-white">
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader onComplete={() => setLoading(false)} />
        ) : (
          <div className="relative min-h-screen flex flex-col justify-between">
            {/* Structural Background Particle Glows */}
            <ParticleGlow />

            {/* Header / Nav Layout */}
            <Navbar />

            {/* Core Narrative / Layout Contents */}
            <main className="flex-grow">
              <Hero />
              <div className="relative">
                {/* Decorative section boundary shadows */}
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#0B1220] to-transparent pointer-events-none z-10" />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
              </div>
            </main>

            {/* Footer Wrapper */}
            <Footer />

            {/* Floating Operations Indicators */}
            <BackToTop />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
