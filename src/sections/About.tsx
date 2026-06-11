import { User, ShieldCheck, Zap, MessageSquareCode } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 border-t border-zinc-900/60 scroll-mt-20">
      <div className="flex items-center gap-2 text-blue-400 font-mono text-xs uppercase tracking-widest mb-3">
        <User className="w-3.5 h-3.5" /> Professional Profile
      </div>
      <h2 className="text-3xl font-bold tracking-tight mb-6">About Me</h2>
      
      <div className="space-y-6 text-zinc-400 text-base leading-relaxed max-w-3xl">
        My background in business operations and systems management gives me a practical understanding of how technology supports scalable and efficient organizations. As a Full-Stack Web Developer, I build reliable web applications that bridge business needs with intuitive user experiences.
      </div>

      <div className="grid gap-4 mt-12 sm:grid-cols-3">
        <div className="p-5 rounded-2xl bg-zinc-900/30 border border-zinc-900">
          <Zap className="w-5 h-5 text-amber-400 mb-3" />
          <h4 className="text-sm font-semibold text-zinc-200 mb-1">Reliable Execution</h4>
          <p className="text-xs text-zinc-500 leading-normal">Committed to delivering high-quality solutions on time without compromising maintainability.</p>
        </div>
        <div className="p-5 rounded-2xl bg-zinc-900/30 border border-zinc-900">
          <ShieldCheck className="w-5 h-5 text-blue-400 mb-3" />
          <h4 className="text-sm font-semibold text-zinc-200 mb-1">Quality-Focused Development</h4>
          <p className="text-xs text-zinc-500 leading-normal">From database design to UI refinement, every detail is built with performance and usability in mind.</p>
        </div>
        <div className="p-5 rounded-2xl bg-zinc-900/30 border border-zinc-900">
          <MessageSquareCode className="w-5 h-5 text-purple-400 mb-3" />
          <h4 className="text-sm font-semibold text-zinc-200 mb-1">Async Communication</h4>
          <p className="text-xs text-zinc-500 leading-normal">Writing clear documentation, structured updates, and technical explanations that enable effective remote collaboration.</p>
        </div>
      </div>
    </section>
  );
}