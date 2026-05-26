import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, Linkedin, Mail, ExternalLink, Code2, ArrowDown } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Hero() {
  const { personal } = portfolioData;
  const [titleIdx, setTitleIdx] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("shreshtvg@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Rotating Titles loop
  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIdx((prev) => (prev + 1) % personal.rotatingTitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [personal.rotatingTitles]);

  const triggerScroll = () => {
    const element = document.getElementById("projects");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden md:px-12"
    >
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side Info */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#FF6B4A]/20 bg-[#FF6B4A]/5 mb-6"
          >
            <span className="text-sm">Hello 👋</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B4A] animate-ping" />
            <span className="font-mono text-xs text-[#FF8C69] tracking-wider uppercase font-medium">SHRESHT_PORTFOLIO_INIT</span>
          </motion.div>

          {/* Name Display */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-heading text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-none"
          >
            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B4A] via-[#FF8C69] to-[#FFA07A] font-extrabold">{personal.name}</span>
          </motion.h1>

          {/* Rotating Titles */}
          <div className="h-14 md:h-16 flex items-center overflow-hidden mt-3 mb-4">
            <AnimatePresence mode="wait">
              <motion.span
                key={titleIdx}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="font-heading text-xl md:text-3xl font-semibold text-[#94A3B8] inline-flex items-center gap-3"
              >
                <Code2 className="text-[#FF6B4A]" size={24} />
                <span>{personal.rotatingTitles[titleIdx]}</span>
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Short Narrative Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base md:text-lg text-[#94A3B8] max-w-xl leading-relaxed mb-8"
          >
            {personal.subTagline}
          </motion.p>

          {/* Core Action triggers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4 mb-8"
          >
            <button
              onClick={triggerScroll}
              className="px-6 py-3 rounded-xl bg-[#FF6B4A] text-[#0B1220] font-heading font-semibold text-sm tracking-wide shadow-lg shadow-[#FF6B4A]/25 hover:bg-[#FF8C69] hover:shadow-[#FF8C69]/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              View Projects
            </button>
            <a
              href={personal.socials.resume}
              target="_blank"
              rel="noreferrer"
              referrerPolicy="no-referrer"
              className="px-6 py-3 rounded-xl border border-white/15 bg-[#111827]/60 hover:border-[#FF6B4A]/30 text-white font-heading font-semibold text-sm tracking-wide hover:bg-[#FF6B4A]/5 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              <span>View Resume</span>
              <ExternalLink size={14} className="text-[#94A3B8]" />
            </a>
          </motion.div>

          {/* Social connections */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex items-center gap-4 bg-[#111827]/50 border border-white/5 px-4 py-3 rounded-2xl backdrop-blur-sm"
          >
            <span className="font-mono text-[10px] tracking-wider text-[#94A3B8] uppercase mr-2">Connectivity:</span>
            
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noreferrer"
              referrerPolicy="no-referrer"
              className="w-9 h-9 rounded-lg bg-[#0B1220] border border-white/5 flex items-center justify-center text-[#94A3B8] hover:text-[#FF6B4A] hover:border-[#FF6B4A]/30 transition-all duration-300 hover:scale-105"
              title="GitHub Profile"
            >
              <Github size={16} />
            </a>
            
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              referrerPolicy="no-referrer"
              className="w-9 h-9 rounded-lg bg-[#0B1220] border border-white/5 flex items-center justify-center text-[#94A3B8] hover:text-[#FF6B4A] hover:border-[#FF6B4A]/30 transition-all duration-300 hover:scale-105"
              title="LinkedIn Profile"
            >
              <Linkedin size={16} />
            </a>

            <button
              onClick={handleCopyEmail}
              className="w-9 h-9 rounded-lg bg-[#0B1220] border border-white/5 flex items-center justify-center text-[#94A3B8] hover:text-[#FF6B4A] hover:border-[#FF6B4A]/30 transition-all duration-300 hover:scale-105 cursor-pointer relative"
              title={copied ? "Copied!" : "Click to copy email"}
            >
              <Mail size={16} />
              {copied && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#FF6B4A] text-[9px] text-[#0B1220] px-1.5 py-0.5 rounded font-mono font-bold whitespace-nowrap shadow-md">
                  COPIED!
                </span>
              )}
            </button>
          </motion.div>
        </div>

        {/* Right Side Avatar container */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative w-72 h-72 md:w-96 md:h-96"
          >
            {/* Ambient orange orbit loop */}
            <motion.div
              className="absolute -inset-4 rounded-full border border-dashed border-[#FF6B4A]/15"
              animate={{ rotate: 360 }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Accent colored solid rings */}
            <motion.div
              className="absolute -inset-8 rounded-full border border-[#FF8C69]/5"
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            />

            {/* Behind halo glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B4A]/20 via-transparent to-[#FF8C69]/10 rounded-full blur-2xl animate-draw" />

            {/* Glowing container frame */}
            <div className="absolute inset-2 bg-[#111827] rounded-3xl border border-white/5 overflow-hidden shadow-2xl flex items-center justify-center group">
              <img
                src={personal.avatar}
                alt={personal.name}
                className="w-full h-full object-cover rounded-3xl transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Corner tech borders */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#FF6B4A]/50" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#FF6B4A]/50" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#FF6B4A]/50" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#FF6B4A]/50" />
              
              {/* Gloss element overlay on top of frame */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/60 via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>

            {/* Floating visual indicators */}
            <motion.div
              className="absolute -top-3 -right-3 px-3 py-1.5 rounded-xl border border-white/5 bg-[#111827]/95 shadow-xl flex items-center gap-1.5 backdrop-blur-sm"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-2 h-2 rounded-full bg-[#FF6B4A]" />
              <span className="font-mono text-[9px] text-[#94A3B8] tracking-widest uppercase font-semibold">LIFE_STATUS_OK</span>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 px-3 py-1.5 rounded-xl border border-white/5 bg-[#111827]/95 shadow-xl flex items-center gap-1.5 backdrop-blur-sm"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="w-2 h-2 rounded-full bg-[#FF8C69]" />
              <span className="font-mono text-[9px] text-[#94A3B8] tracking-widest uppercase font-semibold">PRODUCTION_READY</span>
            </motion.div>
          </motion.div>
        </div>

      </div>

      {/* Decorative Slide Down Pointer */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 hover:opacity-100 transition-opacity">
        <span className="font-mono text-[10px] tracking-widest text-[#94A3B8] uppercase">EXPLORE_DECREE</span>
        <motion.button
          onClick={triggerScroll}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white hover:text-[#FF6B4A] transition-colors"
        >
          <ArrowDown size={16} />
        </motion.button>
      </div>

    </section>
  );
}
