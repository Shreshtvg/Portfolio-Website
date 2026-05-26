import { motion, AnimatePresence } from "motion/react";
import { Github, ArrowUpRight, Star } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 relative overflow-hidden md:px-12 bg-[#0B1220]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="flex flex-col items-start text-left">
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#FF6B4A] tracking-widest uppercase">
              <span>[03] DEVELOPMENT_LOGS</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
            <div className="h-1.5 w-20 bg-gradient-to-r from-[#FF6B4A] to-[#FF8C69] mt-4 rounded-full" />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout border-none">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group border border-white/5 bg-[#111827] rounded-3xl overflow-hidden shadow-2xl flex flex-col hover:-translate-y-2 hover:border-[#FF6B4A]/25 transition-all duration-300 h-full max-w-sm mx-auto select-none"
              >
                {/* Project Image Panel with overlays */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0B1220] border-b border-white/5">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Micro Tag */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl border border-white/10 bg-[#111827]/90 text-white font-mono text-[9px] tracking-wider uppercase flex items-center gap-1.5 shadow-xl backdrop-blur-md">
                    <Star size={10} className="text-[#FF6B4A] fill-[#FF6B4A]" />
                    <span>PRODUCTION_SPEC</span>
                  </div>
                </div>

                {/* Card Content Description */}
                <div className="p-6 md:p-8 flex flex-col flex-grow text-left">
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-[#FF6B4A] transition-colors duration-200">
                    {project.name}
                  </h3>
                  
                  <p className="mt-3 text-sm text-[#94A3B8] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Stack badging log */}
                  <div className="flex flex-wrap gap-1.5 mt-4 mb-6">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1.5 rounded-xl bg-[#0B1220] border border-white/5 text-[11px] font-mono font-medium text-[#FF8C69]/90"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Redirection Links */}
                  <div className="flex items-center justify-between border-t border-white/5 pt-5 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      referrerPolicy="no-referrer"
                      className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-[#94A3B8] hover:text-[#FF6B4A] transition-colors"
                    >
                      <Github size={14} />
                      <span>Source Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      referrerPolicy="no-referrer"
                      className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-white group-hover:text-[#FF6B4A] transition-colors"
                    >
                      <span>Live Sandbox</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
