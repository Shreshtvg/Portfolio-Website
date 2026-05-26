import { motion } from "motion/react";
import { Server, Layout, Database, Code2, CircleDot } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Skills() {
  const { skills } = portfolioData;

  // Obtain category level icon
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case "Languages":
        return <Code2 className="text-[#FF6B4A]" size={22} />;
      case "Web Frameworks":
        return <Layout className="text-[#FF8C69]" size={22} />;
      case "Databases and Microservices":
        return <Database className="text-[#FFA07A]" size={22} />;
      default:
        return <Server className="text-[#FF6B4A]" size={22} />;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden md:px-12 bg-[#0B1220]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16 text-left">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#FF6B4A] tracking-widest uppercase">
            <span>[02] TECHNICAL_INVENTORY</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Skills &amp; Technologies
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-[#FF6B4A] to-[#FF8C69] mt-4 rounded-full" />
        </div>

        {/* Skill grid cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, catIdx) => (
            <motion.div
              key={category.title}
              className="glow-card p-8 rounded-2xl bg-[#111827] text-left transition-all duration-300 relative group flex flex-col justify-between"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1, duration: 0.5 }}
            >
              <div>
                {/* Card Title Header */}
                <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0B1220] border border-white/5 flex items-center justify-center">
                      {getCategoryIcon(category.title)}
                    </div>
                    <h3 className="font-heading text-xl font-bold text-white tracking-wide">
                      {category.title}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] text-[#94A3B8]/60 uppercase tracking-widest font-semibold">
                    SEC_IWT
                  </span>
                </div>

                {/* Tech Badges Grid */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((tech) => (
                    <div
                      key={tech}
                      className="group/tag inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-white/5 bg-[#0B1220]/75 text-sm text-[#94A3B8] hover:text-[#FFFFFF] hover:border-[#FF6B4A]/20 hover:bg-[#FF6B4A]/5 transition-all duration-200"
                    >
                      <CircleDot size={10} className="text-[#94A3B8] group-hover/tag:text-[#FF6B4A] transition-colors" />
                      <span className="font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Minimal decorative design line at footer of card */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="font-mono text-[9px] text-[#94A3B8]/40 tracking-wider">
                  STABLE_COMPILATION
                </span>
                <span className="font-mono text-[10px] text-[#FF6B4A]/70 font-semibold group-hover:translate-x-1 transition-transform">
                  &middot;&middot;&gt;
                </span>
              </div>
            </motion.div>
          ))}
        </div>



      </div>
    </section>
  );
}
