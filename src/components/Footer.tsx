import { useState } from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Mail, ExternalLink, ArrowUp } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Footer() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("shreshtvg@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const quickLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" }
  ];

  const triggerScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const rect = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: rect - offset,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-[#0B1220] border-t border-white/5 pt-16 pb-12 relative overflow-hidden select-none">
      
      {/* Glow highlight backing */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-[#FF6B4A]/4 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col gap-10">
        
        {/* Upper tier layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-10 border-b border-white/5">
          
          {/* Logo brand and metadata */}
          <div className="md:col-span-4 flex flex-col items-start text-left">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 group mb-4 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl border border-[#FF6B4A]/30 bg-[#111827] flex items-center justify-center transition-all duration-300">
                <span className="font-heading text-lg font-bold text-[#FF6B4A]">S</span>
                <span className="font-heading text-base font-bold text-white">V</span>
              </div>
              <div className="flex flex-col items-start leading-none">
                <span className="font-heading text-sm font-bold tracking-tight text-white transition-colors duration-200">
                  SHRESHT VG
                </span>
                <span className="font-mono text-[9px] text-[#94A3B8] tracking-widest uppercase">
                  SOFTWARE ENGINEER
                </span>
              </div>
            </button>
            <p className="text-xs text-[#94A3B8]/80 leading-relaxed max-w-xs">
              Computer Science student building high-performance, concurrent endpoints, and stateful WebSockets architectures.
            </p>
          </div>

          {/* Quick link tags */}
          <div className="md:col-span-4 flex flex-col items-start text-left ml-27">
            <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest mb-4 font-bold ml-2.5">Quick Navigation</span>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => triggerScroll(link.id)}
                  className="text-xs text-[#94A3B8] hover:text-[#FF6B4A] transition-colors leading-relaxed tracking-wide text-left cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* CV & social redirect columns */}
          <div className="md:col-span-4 flex flex-col items-start text-left ml-35">
            <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest mb-4 font-bold ml-2">Network References</span>
            <div className="flex gap-3 mb-4">
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noreferrer"
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-xl bg-[#111827] border border-white/5 flex items-center justify-center text-[#94A3B8] hover:text-[#FF6B4A] hover:border-[#FF6B4A]/20 transition-all duration-300"
              >
                <Github size={16} />
              </a>
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-xl bg-[#111827] border border-white/5 flex items-center justify-center text-[#94A3B8] hover:text-[#FF6B4A] hover:border-[#FF6B4A]/20 transition-all duration-300"
              >
                <Linkedin size={16} />
              </a>
              <button
                onClick={handleCopyEmail}
                className="w-10 h-10 rounded-xl bg-[#111827] border border-white/5 flex items-center justify-center text-[#94A3B8] hover:text-[#FF6B4A] hover:border-[#FF6B4A]/20 transition-all duration-300 cursor-pointer relative"
                title={copied ? "Copied!" : "Click to copy email"}
              >
                <Mail size={16} />
                {copied && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#FF6B4A] text-[9px] text-[#0B1220] px-1.5 py-0.5 rounded font-mono font-bold whitespace-nowrap shadow-md">
                    COPIED!
                  </span>
                )}
              </button>
            </div>
          </div>

        </div>

        {/* Lower copyright brand logs */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <span className="font-mono text-[10px] text-[#94A3B8]/40 tracking-widest text-center">
            &copy; {new Date().getFullYear()} SHRESHT VG. ALL ASSETS AUTHENTICATED.
          </span>
        </div>

      </div>
    </footer>
  );
}
