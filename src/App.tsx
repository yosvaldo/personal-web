import FloatingNav from "./components/FloatingNav";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Portfolio from "./sections/Portfolio";
import Experience from "./sections/Experience";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import profilePic from "./assets/pp1.svg";

export default function App() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-50 antialiased selection:bg-purple-500/30">
      
      <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[20%] w-200 h-200 rounded-full bg-blue-500/10 blur-[160px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-150 h-150 rounded-full bg-purple-500/10 blur-[140px]" />
      </div>

      <FloatingNav />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-12">
        
        <aside className="hidden lg:block lg:col-span-5 xl:col-span-4 h-screen sticky top-0 py-20">
          <div className="w-full h-full bg-zinc-900 rounded-3xl border border-zinc-900 flex items-end justify-center overflow-hidden relative group">
            <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-transparent z-10 opacity-60" />
            <img 
              src={profilePic} 
              alt="Yosvaldo Ongko Cahyadi" 
              className="w-full h-full object-cover object-center scale-100 transition-transform duration-700 group-hover:scale-[1.02]"
              loading="eager"
            />
          </div>
        </aside>

        <main className="lg:col-span-7 xl:col-span-8 py-12 space-y-24 sm:space-y-32">
          <div className="lg:hidden w-32 h-32 rounded-2xl border border-zinc-800 overflow-hidden mb-8">
            <img src={profilePic} alt="Yosvaldo" className="w-full h-full object-cover" />
          </div>

          <Hero />
          <About />
          <Skills />
          <Portfolio />
          <Experience />
          <Testimonials />
          <Contact />

          <footer className="pt-8 border-t border-zinc-900 text-right text-xs text-zinc-600 font-mono">
            © {new Date().getFullYear()} Yosvaldo Ongko Cahyadi
          </footer>
        </main>
      </div>
    </div>
  );
}