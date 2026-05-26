import { motion } from "motion/react";
import { Calendar, Circle, Briefcase } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Experience() {
  const { journey } = portfolioData;

  return (
    <section id="experience" className="py-24 relative overflow-hidden md:px-12 bg-[#0B1220]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16 text-left">
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Experience & Internships
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-[#FF6B4A] to-[#FF8C69] mt-4 rounded-full" />
        </div>

        {/* Timeline Path Stack */}
        <div className="relative max-w-4xl mx-auto pl-8">
          
          {/* Vertical Spine Line */}
          <div className="absolute left-[13px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#FF6B4A] via-[#FF8C69]/20 to-transparent" />

          {/* Journey Milestone Cards Loop */}
          <div className="space-y-12">
            {journey.map((item, idx) => {
              return (
                <div key={idx} className="relative">
                  
                  {/* Timeline Node Ring */}
                  <div className="absolute -left-[27px] top-1.5 w-7 h-7 rounded-full bg-[#111827] border-2 border-[#FF6B4A] flex items-center justify-center z-10 shadow-lg shadow-[#FF6B4A]/10">
                    <Circle className="text-[#FF6B4A] fill-[#FF6B4A]" size={8} />
                  </div>

                  {/* Experience Card */}
                  <motion.div
                    className="p-8 rounded-3xl bg-[#111827] border border-white/5 text-left glow-card shadow-xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <span className="font-heading text-sm font-bold px-3 py-1 bg-[#FF6B4A]/10 text-[#FF6B4A] rounded-xl flex items-center gap-1.5 font-mono">
                          <Calendar size={13} />
                          {item.year}
                        </span>
                        <span className="font-mono text-[9px] text-[#94A3B8]/40 uppercase tracking-widest font-semibold flex items-center gap-1">
                          <Briefcase size={9} />
                          INTERNSHIP
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="font-heading text-xl md:text-2xl font-extrabold text-white mb-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-sm text-[#94A3B8] leading-relaxed mb-4 font-mono text-[#FF8C69]/80 font-medium">
                      {item.description}
                    </p>

                    <div className="border-t border-white/5 pt-4 space-y-3">
                      {item.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-[#94A3B8]/80 leading-relaxed text-left">
                          <span className="text-[#FF6B4A] mt-1.5 select-none leading-none">&bull;</span>
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>



      </div>
    </section>
  );
}
