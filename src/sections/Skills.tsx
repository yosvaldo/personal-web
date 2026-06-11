import { Code2, Cpu, Server, Terminal } from "lucide-react";

const SKILLS_DATA = [
  {
    category: "Front-End Development",
    icon: <Cpu className="w-4 h-4 text-blue-400" />,
    items: ["React Vite", "React Router", "Tailwind CSS", "TypeScript"],
  },
  {
    category: "Back-End & Data Architecture",
    icon: <Server className="w-4 h-4 text-purple-400" />,
    items: ["Express.js", "Node.js", "Prisma ORM", "PostgreSQL", "REST API"],
  },
  {
    category: "DevOps & Core Infrastructure",
    icon: <Terminal className="w-4 h-4 text-emerald-400" />,
    items: ["Git & Versioning", "GitHub", "Postman APIs testing"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 border-t border-zinc-900/60 scroll-mt-20">
      <div className="flex items-center gap-2 text-purple-400 font-mono text-xs uppercase tracking-widest mb-3">
        <Code2 className="w-3.5 h-3.5" /> Capabilities
      </div>
      <h2 className="text-3xl font-bold tracking-tight mb-8 text-white">Technical Expertise</h2>

      <div className="grid gap-6 sm:grid-cols-3">
        {SKILLS_DATA.map((skill, index) => (
          <div key={index} className="p-6 rounded-2xl bg-zinc-900/20 border border-zinc-900 hover:border-zinc-800 transition-colors duration-300">
            <div className="flex items-center gap-2 mb-4">
              {skill.icon}
              <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-200">{skill.category}</h3>
            </div>
            <ul className="space-y-2">
              {skill.items.map((item, i) => (
                <li key={i} className="text-sm text-zinc-400 flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-zinc-700" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}