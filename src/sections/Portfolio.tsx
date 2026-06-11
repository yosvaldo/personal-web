import { FolderGit2 } from "lucide-react";

import money1 from "../assets/money1.png";
import money2 from "../assets/money2.png";
import parent1 from "../assets/parent1.png";
import parent2 from "../assets/parent2.png";
import distri1 from "../assets/distri1.png";
import distri2 from "../assets/distri2.png";
import market1 from "../assets/market1.png";
import market2 from "../assets/market2.png";

const PROJECTS = [
  {
    title: "Money Mate (Youth Financial Literacy MVP)",
    stack: "React Vite, Tailwind CSS, Express.js, Prisma, PostgreSQL",
    images: [money1, money2],
    situation: "Money Mate, an early-stage EdTech startup focused on youth financial literacy, required a high-performance Minimum Viable Product (MVP) to capture institutional seed expansion funding.",
    task: "Architect and implement the core functional client-side and server-side infrastructure for the gamified youth interface, ensuring cross-platform capability and real-time user progress calculation.",
    action: "Developed a highly responsive UI utilizing React Vite and Tailwind CSS to ensure low-latency interactions for younger demographics. Formulated the database schema using Prisma ORM with PostgreSQL to securely handle user metrics and reward states.",
    result: "Completed production entirely on schedule. The structural integrity of the MVP directly enabled the founding team to secure a follow-on investment round 20 times (2,000%) larger than initial pre-seed funding.",
  },
  {
    title: "Money Mate Parents (Analytical Tracking Engine)",
    stack: "React Vite, React Router, Tailwind CSS, Express.js, Prisma, PostgreSQL",
    images: [parent1, parent2],
    situation: "To complete the Money Mate startup ecosystem, parents required a distinct, data-dense interface to monitor children's learning milestones, manage allowances, and review financial quiz metrics.",
    task: "Build a scalable, secure parental oversight dashboard MVP designed to process data dependencies shared with the primary youth application.",
    action: "Engineered the web app leveraging React Router for optimized view management. Implemented multi-table relational foreign keys inside PostgreSQL via Prisma to accurately connect parental accounts to corresponding child data streams without data drift.",
    result: "Delivered the operational MVP within the strict deadline. Launched alongside the core youth application, this collaborative dashboard system finalized the product suite that secured the 20x follow-on funding milestone.",
  },
  {
    title: "Phenex Supply (B2B Distributor Logistics Portal)",
    stack: "React Vite, Tailwind CSS, Express.js, Prisma, PostgreSQL",
    images: [distri1, distri2],
    situation: "Phenex Fishing was experiencing rapid logistics scaling, managing over 220,000+ items across 20+ national distributors. The existing manual system caused stock allocation blind spots across a 100+ SKU inventory.",
    task: "Design and deploy a real-time web platform allowing distributed B2B clients to check live warehouse readiness and instantly execute inventory purchase orders.",
    action: "Constructed a high-speed data presentation interface using React and Tailwind CSS. Built optimized indexing queries on a PostgreSQL database using Prisma ORM to provide instantaneous inventory status updates and automated order generation workflows.",
    result: "Greatly improved distributor UX workflows and reduced order processing overhead, successfully accelerating the average client reorder velocity from 9 weeks down to 7 weeks (a 22% efficiency gain).",
  },
  {
    title: "Phenex Market (Exclusive B2B Marketplace)",
    stack: "React Vite, Tailwind CSS, Shadcn UI, Express.js, Prisma, PostgreSQL",
    images: [market1, market2],
    situation: "Phenex Fishing distributors faced severe margin compression when selling directly to end-consumers due to steep commission take-rates (25%) on legacy third-party e-commerce platforms.",
    task: "Create an exclusive, direct-to-consumer mini-marketplace wrapper to bypass high platform fees and lower transactional overhead for authorized distributors.",
    action: "Integrated Shadcn UI components customized with a sleek dark palette tailored to the industry. Managed state distribution patterns across product listings and shopping carts, backed by a resilient Express/PostgreSQL checkout API.",
    result: "Successfully dropped platform transactional overhead from 25% down to 10%, effectively slashing the distributors' marketplace operational costs by 60%.",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 border-t border-zinc-900/60 scroll-mt-20">
      <div className="flex items-center gap-2 text-blue-400 font-mono text-xs uppercase tracking-widest mb-3">
        <FolderGit2 className="w-3.5 h-3.5" /> Proven Track Record
      </div>
      <h2 className="text-3xl font-bold tracking-tight mb-8 text-white">Selected Portfolios</h2>

      <div className="space-y-24">
        {PROJECTS.map((project, idx) => (
          <div key={idx} className="group relative border-l border-zinc-800 pl-6 md:pl-10 space-y-6">
            <div className="absolute -left-[4.5px] top-1.5 h-2 w-2 rounded-full bg-cyan-400" />
            
            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{project.title}</h3>
              <p className="text-xs font-mono text-blue-400/90 tracking-wide">{project.stack}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 mt-4">
              {project.images.map((imgSrc, imgIdx) => (
                <div 
                  key={imgIdx} 
                  className="relative rounded-xl overflow-hidden border border-zinc-900 bg-zinc-900/40 aspect-[4/3] group/img shadow-md hover:border-zinc-800 transition-all duration-300"
                >
                  <img 
                    src={imgSrc} 
                    alt={`${project.title} View ${imgIdx + 1}`} 
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover/img:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <div className="grid gap-4 bg-zinc-900/20 rounded-2xl border border-zinc-900 p-6 text-sm sm:text-base text-zinc-400 leading-relaxed">
              <p><strong className="text-zinc-200 font-medium block text-xs uppercase tracking-wider mb-1 font-mono">Situation</strong> {project.situation}</p>
              <p><strong className="text-zinc-200 font-medium block text-xs uppercase tracking-wider mb-1 font-mono">Task</strong> {project.task}</p>
              <p><strong className="text-zinc-200 font-medium block text-xs uppercase tracking-wider mb-1 font-mono">Action</strong> {project.action}</p>
              <p><strong className="block text-xs uppercase tracking-wider mb-1 font-mono font-semibold text-emerald-400">Result</strong> {project.result}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}