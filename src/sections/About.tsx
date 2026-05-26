import { ChevronsRight } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-24 relative overflow-hidden md:px-12 bg-[#0B1220]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16 text-left">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#FF6B4A] tracking-widest uppercase">
            <span>[01] PROFILE_OVERVIEW</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {about.heading}
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-[#FF6B4A] to-[#FF8C69] mt-4 rounded-full" />
        </div>

        {/* Narrative bio and interests lists */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          <div className="lg:col-span-7 text-left">
            <p className="text-[#94A3B8] text-base md:text-lg leading-relaxed mb-6">
              {about.bio}
            </p>
            <p className="text-[#94A3B8] text-base leading-relaxed mb-8">
              My engineering core values are simple: build clean, write reliable tests, optimize database queries, and choose algorithms that remain highly efficient under heavy concurrent loads.
            </p>

            <h3 className="font-heading text-lg font-bold text-white mb-4 uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B4A]" /> Core Technical Focuses
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {about.keyInterests.map((interest, idx) => (
                <div key={idx} className="flex items-center gap-2 text-[#94A3B8] text-sm">
                  <ChevronsRight size={14} className="text-[#FF6B4A]" />
                  <span>{interest}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            {/* Embedded Interactive Code Mockup */}
            <div className="w-full bg-[#111827] border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-[#0B1220] px-4 py-3 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="font-mono text-xs text-[#94A3B8] select-none">shresht_vg.go</span>
                <span className="w-8" />
              </div>
              <div className="p-6 font-mono text-xs text-left text-[#94A3B8] leading-relaxed overflow-x-auto">
                <div className="text-gray-500 select-none">// Concurrency demonstration in Go</div>
                <div><span className="text-[#FF6B4A]">package</span> main</div>
                <div className="mt-2"><span className="text-[#FF6B4A]">import</span> (</div>
                <div className="ml-4">"fmt"</div>
                <div className="ml-4">"sync"</div>
                <div>)</div>
                <div className="mt-2"><span className="text-yellow-400">func</span> <span className="text-teal-400">SpawnWorker</span>(id <span className="text-[#FF8C69]">int</span>, wg *sync.WaitGroup) &#123;</div>
                <div className="ml-4"><span className="text-[#FF6B4A]">defer</span> wg.<span className="text-teal-400">Done</span>()</div>
                <div className="ml-4">fmt.<span className="text-teal-400">Printf</span>(<span className="text-green-300">"Worker %d online\n"</span>, id)</div>
                <div>&#125;</div>
                <div className="mt-2"><span className="text-yellow-400">func</span> <span className="text-teal-400">main</span>() &#123;</div>
                <div className="ml-4"><span className="text-[#FF6B4A]">var</span> wg sync.WaitGroup</div>
                <div className="ml-4"><span className="text-[#FF6B4A]">for</span> i := <span className="text-amber-400">1</span>; i &lt;= <span className="text-amber-400">3</span>; i++ &#123;</div>
                <div className="ml-8">wg.<span className="text-teal-400">Add</span>(<span className="text-amber-400">1</span>)</div>
                <div className="ml-8"><span className="text-[#FF6B4A]">go</span> <span className="text-teal-400">SpawnWorker</span>(i, &amp;wg)</div>
                <div className="ml-4">&#125;</div>
                <div className="ml-4">wg.<span className="text-teal-400">Wait</span>()  <span className="text-gray-500">// wait for channels</span></div>
                <div>&#125;</div>
              </div>
            </div>
            {/* Glow backing */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#FF6B4A]/5 to-[#FF8C69]/5 rounded-3xl blur-xl -z-10 pointer-events-none" />
          </div>

        </div>

      </div>
    </section>
  );
}
