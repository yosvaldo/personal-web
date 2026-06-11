import { FormEvent } from "react";
import { Mail, Send } from "lucide-react";
import { useApp } from "../context/AppContext";

export default function Contact() {
  const { isSubmitting, setIsSubmitting } = useApp();

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message received! I will connect with you shortly.");
    }, 1200);
  };

  return (
    <section id="contact" className="py-16 border-t border-zinc-900/60 scroll-mt-20">
      <div className="flex items-center gap-2 text-orange-400 font-mono text-xs uppercase tracking-widest mb-3">
        <Mail className="w-3.5 h-3.5" /> Connect
      </div>
      <h2 className="text-3xl font-bold tracking-tight mb-8 text-white">Get In Touch</h2>

      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-3">
          <form className="space-y-4" onSubmit={handleSendMessage}>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">Name</label>
              <input type="text" required className="w-full px-4 py-3 text-sm rounded-xl border border-zinc-900 bg-zinc-900/30 text-white focus:outline-none focus:border-zinc-700 transition" placeholder="Enter your name" />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">Email</label>
              <input type="email" required className="w-full px-4 py-3 text-sm rounded-xl border border-zinc-900 bg-zinc-900/30 text-white focus:outline-none focus:border-zinc-700 transition" placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">Message Payload</label>
              <textarea rows={4} required className="w-full px-4 py-3 text-sm rounded-xl border border-zinc-900 bg-zinc-900/30 text-white focus:outline-none focus:border-zinc-700 transition resize-none" placeholder="Let's build something scalable..."></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200 disabled:opacity-50 cursor-pointer"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

        <div className="md:col-span-2 flex flex-col justify-between gap-6">
          <div className="p-5 rounded-2xl bg-zinc-900/20 border border-zinc-900 space-y-2">
            <h4 className="text-xs font-mono uppercase text-zinc-500 tracking-widest">Direct Route</h4>
            <a href="mailto:yosvaldo.oc@gmail.com" className="text-sm font-semibold text-zinc-200 hover:text-blue-400 transition break-all">
              yosvaldo.oc@gmail.com
            </a>
          </div>
          
          <div className="p-5 rounded-2xl bg-zinc-900/20 border border-zinc-900 space-y-3">
            <h4 className="text-xs font-mono uppercase text-zinc-500 tracking-widest">External Links</h4>
            <div className="flex flex-col gap-2">
              <a href="https://github.com/yosvaldo" target="_blank" rel="noreferrer" className="text-sm text-zinc-400 hover:text-white transition">→ GitHub</a>
              <a href="https://www.linkedin.com/in/yosvaldo-ongko-cahyadi-88857bbb/" target="_blank" rel="noreferrer" className="text-sm text-zinc-400 hover:text-white transition">→ LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}