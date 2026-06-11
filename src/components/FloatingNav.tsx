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
  const { activeSection, scrollToSection } = useApp();

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[92%] sm:w-auto max-w-5xl">
      <nav className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 p-1.5 rounded-full border border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md shadow-2xl mx-auto">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick= {() => scrollToSection(item.id)}
            className={`px-2.5 py-1.5 text-[10px] sm:text-xs font-medium rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer ${
              activeSection === item.id
                ? "bg-zinc-100 text-zinc-950 shadow font-semibold"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
}