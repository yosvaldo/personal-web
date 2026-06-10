import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-[85vh] flex items-center pt-24 pb-16 scroll-mt-20">
      <div className="max-w-3xl space-y-6">
        <div className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-1.5 text-xs text-zinc-400 font-mono h-8 leading-none">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse block"></span>
          <span className="pt-[1px]">Open for Asynchronous Roles</span>
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Yosvaldo Ongko Cahyadi</span>
        </h1>
        
        <p className="text-xl sm:text-2xl font-semibold text-zinc-300">
          Full-Stack Web Developer & Systems Engineer
        </p>
        
        <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl">
          I bridge software architecture, data infrastructure, and commercial workflows to engineer high-performance systems. Specializing in scaling applications with strict data execution patterns.
        </p>

        <div className="pt-4 flex flex-wrap gap-4">
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200 shadow-md group"
          >
            View Portfolio
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/30 px-5 py-3 text-sm font-semibold text-zinc-300 transition hover:bg-zinc-900"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}