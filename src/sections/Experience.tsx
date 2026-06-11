import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-16 border-t border-zinc-900/60 scroll-mt-20">
      <div className="flex items-center gap-2 text-blue-400 font-mono text-xs uppercase tracking-widest mb-3">
        <Briefcase className="w-3.5 h-3.5" /> History
      </div>
      <h2 className="text-3xl font-bold tracking-tight mb-8 text-white">Work Experience</h2>

      <div className="space-y-12">
        <div className="relative pl-6 border-l border-zinc-800">
          <div className="absolute -left-[4.5px] top-1.5 h-2 w-2 rounded-full bg-blue-400" />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <h3 className="text-lg font-bold text-zinc-100">Co-Founder & Operations Lead</h3>
            <span className="text-xs font-mono text-zinc-500">May 2020 — Present</span>
          </div>
          <p className="text-sm font-medium text-blue-400/90 font-mono">Phenex Fishing</p>
          <ul className="mt-4 space-y-2 text-sm text-zinc-400 leading-relaxed list-disc list-inside">
            <li>Managed nationwide operational systems supporting the fulfillment of <strong className="text-zinc-200">240,000+ logistics products</strong> across Indonesia.</li>
            <li>Optimized B2B distribution systems, moving over <strong className="text-zinc-200">87,000+ best-selling products</strong> through regional distributors.</li>
            <li>Generated <strong className="text-zinc-200">12,000+ direct-to-consumer orders</strong> through company-owned e-commerce channels.</li>
            <li>Coordinated operations across <strong className="text-zinc-200">20+ active distributors</strong> nationwide.</li>
          </ul>
        </div>

        <div className="relative pl-6 border-l border-zinc-800">
          <div className="absolute -left-[4.5px] top-1.5 h-2 w-2 rounded-full bg-blue-400" />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <h3 className="text-lg font-bold text-zinc-100">Co-Founder & Lead Developer</h3>
            <span className="text-xs font-mono text-zinc-500">Feb 2025 — Present</span>
          </div>
          <p className="text-sm font-medium text-blue-400/90 font-mono">Money Mate Startup</p>
          <ul className="mt-4 space-y-2 text-sm text-zinc-400 leading-relaxed list-disc list-inside">
            <li>Led product planning, application architecture, and full-stack development from concept to deployment.</li>
            <li>Helped secure the <strong className="text-zinc-200">company's first funding round</strong> by validating product feasibility and demonstrating technical execution.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}