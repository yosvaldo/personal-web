import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-16 border-t border-zinc-900/60 scroll-mt-20">
      <div className="flex items-center gap-2 text-pink-400 font-mono text-xs uppercase tracking-widest mb-3">
        <Briefcase className="w-3.5 h-3.5" /> History
      </div>
      <h2 className="text-3xl font-bold tracking-tight mb-8">Work Experience</h2>

      <div className="space-y-12">
        <div className="relative pl-6 border-l border-zinc-800">
          <div className="absolute -left-[4.5px] top-1.5 h-2 w-2 rounded-full bg-pink-400" />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <h3 className="text-lg font-bold text-zinc-100">Co-Founder & Operations Lead</h3>
            <span className="text-xs font-mono text-zinc-500">May 2020 — Present</span>
          </div>
          <p className="text-sm font-medium text-pink-400/90 font-mono">Phenex Fishing</p>
          <ul className="mt-4 space-y-2 text-sm text-zinc-400 leading-relaxed list-disc list-inside">
            <li>Spearheaded nationwide technical operations and pipeline configurations, driving the deployment and fulfillment of <strong className="text-zinc-200">240,000+ total logistics products</strong> across multi-channel structures.</li>
            <li>Optimized discrete B2B networks, managing more than <strong className="text-zinc-200">87,000+ continuous item orders</strong> through regional distributors, and scaling digital funnels to handle over <strong className="text-zinc-200">12,000+ marketplace transactions</strong>.</li>
            <li>Sustained reliable data tracking mechanics across a network of <strong className="text-zinc-200">20+ active operational distributors</strong> spanning Indonesia.</li>
          </ul>
        </div>

        <div className="relative pl-6 border-l border-zinc-800">
          <div className="absolute -left-[4.5px] top-1.5 h-2 w-2 rounded-full bg-purple-400" />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <h3 className="text-lg font-bold text-zinc-100">Co-Founder & Lead Developer</h3>
            <span className="text-xs font-mono text-zinc-500">Feb 2025 — Present</span>
          </div>
          <p className="text-sm font-medium text-purple-400/90 font-mono">Money Mate Startup</p>
          <ul className="mt-4 space-y-2 text-sm text-zinc-400 leading-relaxed list-disc list-inside">
            <li>Direct product scope visualization, architectural scaling models, and institutional seed fundraising technical validation parameters.</li>
            <li>Architected a custom consumer-to-guardian dual platform setup explicitly designed to elevate tracking loops and financial behavioral literacy trends for younger demographics.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}