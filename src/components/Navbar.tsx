import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, Github, Linkedin, Award } from "lucide-react";

interface NavItem {
  label: string;
  id: string; // The CSS ID to select
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor Scroll Activities
  useEffect(() => {
    const handleScroll = () => {
      // 1. Navbar Glass Background State
      setIsScrolled(window.scrollY > 20);

      // 2. Scroll Progress Percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Monitor Active Section via Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px", // Focus middle of structural viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    NAV_ITEMS.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
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
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-[#1F2937] z-[100]">
        <motion.div
          className="h-full bg-gradient-to-r from-[#FF6B4A] to-[#FF8C69]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-[3px] left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0B1220]/80 backdrop-blur-md border-b border-white/5 py-4 shadow-xl"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Brand */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl border border-[#FF6B4A]/30 bg-[#111827] flex items-center justify-center transition-all duration-300 group-hover:border-[#FF6B4A] group-hover:shadow-lg group-hover:shadow-[#FF6B4A]/10">
              <span className="font-heading text-lg font-bold text-[#FF6B4A]">
                S
              </span>
              <span className="font-heading text-base font-bold text-white">
                V
              </span>
            </div>
            <div className="flex flex-col items-start leading-none">
              <span className="font-heading text-sm font-bold tracking-tight text-white group-hover:text-[#FF6B4A] transition-colors duration-200">
                SHRESHT VG
              </span>
              <span className="font-mono text-[9px] text-[#94A3B8] tracking-widest uppercase">
                PORTFOLIO
              </span>
            </div>
          </button>

          {/* Desktop Nav Actions */}
          <nav className="hidden md:flex items-center gap-1 bg-[#111827]/40 border border-white/5 p-1 rounded-full backdrop-blur-sm">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 rounded-full font-heading text-sm font-medium transition-all duration-300 cursor-pointer ${
                    isActive ? "text-[#0B1220] font-semibold" : "text-[#94A3B8] hover:text-[#FFFFFF]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-[#FF6B4A] rounded-full z-0 shadow-md shadow-[#FF6B4A]/20"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action Callouts */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://github.com/shreshtvg"
              target="_blank"
              rel="noreferrer"
              referrerPolicy="no-referrer"
              className="text-[#94A3B8] hover:text-[#FF6B4A] transition-colors"
              title="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/shreshtvg"
              target="_blank"
              rel="noreferrer"
              referrerPolicy="no-referrer"
              className="text-[#94A3B8] hover:text-[#FF6B4A] transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <button
              onClick={() => scrollToSection("contact")}
              className="relative overflow-hidden group px-4 py-2 rounded-lg bg-transparent border border-[#FF6B4A]/20 text-white font-heading text-xs font-medium uppercase tracking-wider flex items-center gap-1.5 transition-all duration-300 hover:border-[#FF6B4A] cursor-pointer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#FF6B4A]/10 to-[#FF8C69]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span>Let's Talk</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile hamburger toggler */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-[#111827] border border-white/5 text-[#94A3B8] hover:text-white"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 top-[54px] z-30 bg-[#0B1220]/95 backdrop-blur-lg flex flex-col md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-8 py-10 flex flex-col gap-6 flex-grow">
              <p className="font-mono text-[9px] tracking-widest text-[#94A3B8]/60 uppercase border-b border-white/5 pb-2">
                NAVIGATION SCHEDULER
              </p>
              <div className="flex flex-col gap-3">
                {NAV_ITEMS.map((item, index) => {
                  const isActive = activeSection === item.id;
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`text-left py-2 font-heading text-lg font-medium border-l-2 pl-4 transition-all ${
                        isActive
                          ? "border-[#FF6B4A] text-[#FF6B4A] bg-[#FF6B4A]/5 font-semibold"
                          : "border-transparent text-[#94A3B8] hover:text-white"
                      }`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {item.label}
                    </motion.button>
                  );
                })}
              </div>

              {/* Mobile Quick Contacts */}
              <div className="mt-auto border-t border-white/5 pt-6 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <a
                    href="https://github.com/shreshtvg"
                    target="_blank"
                    rel="noreferrer"
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-lg bg-[#111827] flex items-center justify-center text-[#94A3B8]"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="https://linkedin.com/in/shreshtvg"
                    target="_blank"
                    rel="noreferrer"
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-lg bg-[#111827] flex items-center justify-center text-[#94A3B8]"
                  >
                    <Linkedin size={18} />
                  </a>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="flex-grow py-2.5 rounded-lg bg-[#FF6B4A] text-[#0B1220] font-heading font-semibold text-sm text-center tracking-wide"
                  >
                    Contact Direct
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
