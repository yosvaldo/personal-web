import { User, ShieldCheck, Zap, MessageSquareCode } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 border-t border-zinc-900/60 scroll-mt-20">
      <div className="flex items-center gap-2 text-blue-400 font-mono text-xs uppercase tracking-widest mb-3">
        <User className="w-3.5 h-3.5" /> Professional Profile
      </div>
      <h2 className="text-3xl font-bold tracking-tight mb-6">About Me</h2>
      
      <div className="space-y-6 text-zinc-400 text-base leading-relaxed max-w-3xl">
        <p>
          With a formal background rooted in systems-focused engineering, I naturally analyze technical architectures through a lens of scalability, operational reliability, and concrete commercial utility. My journey into Full-Stack development is fueled by an obsession with converting complex business constraints into highly optimized, user-centric software suites.
        </p>
        <p>
          Whether designing integrated data schemas or constructing front-end responsive nodes, I maintain an absolute focus on system execution timeliness and programmatic efficiency.
        </p>
      </div>

      <div className="grid gap-4 mt-12 sm:grid-cols-3">
        <div className="p-5 rounded-2xl bg-zinc-900/30 border border-zinc-900">
          <Zap className="w-5 h-5 text-amber-400 mb-3" />
          <h4 className="text-sm font-semibold text-zinc-200 mb-1">Absolute Timeliness</h4>
          <p className="text-xs text-zinc-500 leading-normal">Engineering pipelines strictly aligned to roadmap sprints with deterministic execution schedules.</p>
        </div>
        <div className="p-5 rounded-2xl bg-zinc-900/30 border border-zinc-900">
          <ShieldCheck className="w-5 h-5 text-blue-400 mb-3" />
          <h4 className="text-sm font-semibold text-zinc-200 mb-1">Granular Detail</h4>
          <p className="text-xs text-zinc-500 leading-normal">Deep programmatic scanning from normalization paradigms to flawless interface styling states.</p>
        </div>
        <div className="p-5 rounded-2xl bg-zinc-900/30 border border-zinc-900">
          <MessageSquareCode className="w-5 h-5 text-purple-400 mb-3" />
          <h4 className="text-sm font-semibold text-zinc-200 mb-1">Clear Communication</h4>
          <p className="text-xs text-zinc-500 leading-normal">Translating highly intricate backend processes into clear structural documentation logs.</p>
        </div>
      </div>
    </section>
  );
}