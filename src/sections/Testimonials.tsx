import { MessageSquare, Quote } from "lucide-react";

const REVIEWS = [
  { name: "Mr. FP", role: "Angel Investor", text: "As a parent, I was instantly interested in the startup platform that Yosvaldo built. Because of that strategic engineering validation, I ultimately became an primary investor." },
  { name: "Mr. SH", role: "Enterprise Client", text: "Phenex is one of the best brands I have ever collaborated with. Crystal clear organizational communication and highly reliable development turnaround parameters describe Yosvaldo's performance." },
  { name: "Mrs. EC", role: "Parent Educator", text: "Money Mate serves as a magnificent tool to help me teach my kids the realities of managing capital efficiently. Since financial stewardship is fundamentally about habit formation, this UI execution is brilliant." },
  { name: "Mr. OJ", role: "Retail Network Partner", text: "Phenex consistently supplies top-tier inventory streams straight to my stores. On top of that operational efficiency, they built a bespoke marketplace infrastructure that saved me an outright fortune. Essential engineering." },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-20">
      <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-widest mb-3">
        <MessageSquare className="w-3.5 h-3.5" /> Social Proof
      </div>
      <h2 className="text-3xl font-bold tracking-tight mb-8">Client Testimonials</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {REVIEWS.map((r, i) => (
          <div key={i} className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-900 flex flex-col justify-between hover:border-zinc-800 transition-colors duration-300">
            <div className="relative">
              <Quote className="w-8 h-8 text-zinc-800 absolute -top-2 -left-2 -z-10" />
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 italic">"{r.text}"</p>
            </div>
            <div className="border-t border-zinc-900/60 pt-3 flex items-center justify-between">
              <span className="text-sm font-semibold text-zinc-200">{r.name}</span>
              <span className="text-[10px] font-mono uppercase text-emerald-500/80 px-2 py-0.5 bg-emerald-500/5 rounded-full border border-emerald-500/10">{r.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}