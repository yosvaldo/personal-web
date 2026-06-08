import { useApp } from "../context/AppContext";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "portfolio", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "testimonials", label: "Reviews" },
  { id: "contact", label: "Contact" },
];

export default function FloatingNav() {
  const { activeSection } = useApp();

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4 sm:px-0">
      <nav className="flex items-center justify-center gap-1 p-1.5 rounded-full border border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md shadow-2xl overflow-x-auto scrollbar-none">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${
              activeSection === item.id
                ? "bg-zinc-100 text-zinc-950 shadow"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}