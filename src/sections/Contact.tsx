import { Mail, Send } from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useApp } from "../context/AppContext";

export default function Contact() {
  const { isSubmitting, setIsSubmitting } = useApp();

  const validationSchema = Yup.object({
    name: Yup.string()
      .trim()
      .required("Name is required"),
    email: Yup.string()
      .trim()
      .email("Invalid email format")
      .required("Email is required"),
    message: Yup.string()
      .trim()
      .required("Message can't be empty"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      setIsSubmitting(true);

      setTimeout(() => {
        setIsSubmitting(false);
        alert(`Message received from ${values.name}! I will connect with you shortly.`);
        resetForm();
      }, 1200);
    },
  });

  return (
    <section id="contact" className="py-16 border-t border-zinc-900/60 scroll-mt-20">
      <div className="flex items-center gap-2 text-blue-400 font-mono text-xs uppercase tracking-widest mb-3">
        <Mail className="w-3.5 h-3.5" /> Connect
      </div>
      <h2 className="text-3xl font-bold tracking-tight mb-8 text-white">Get In Touch</h2>

      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-3">
          <form className="space-y-4" onSubmit={formik.handleSubmit}>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">Name</label>
              <input
                type="text"
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className={`w-full px-4 py-3 text-sm rounded-xl border bg-zinc-900/30 text-white focus:outline-none transition ${
                  formik.touched.name && formik.errors.name
                    ? "border-red-500 focus:border-red-500"
                    : "border-zinc-900 focus:border-zinc-700"
                }`}
                placeholder="Enter your name"
              />
              {formik.touched.name && formik.errors.name && (
                <p className="mt-1.5 text-xs text-red-400 font-mono">{formik.errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">Email</label>
              <input
                type="text"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className={`w-full px-4 py-3 text-sm rounded-xl border bg-zinc-900/30 text-white focus:outline-none transition ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500 focus:border-red-500"
                    : "border-zinc-900 focus:border-zinc-700"
                }`}
                placeholder="your@email.com"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="mt-1.5 text-xs text-red-400 font-mono">{formik.errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">Message</label>
              <textarea
                rows={4}
                name="message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                className={`w-full px-4 py-3 text-sm rounded-xl border bg-zinc-900/30 text-white focus:outline-none transition resize-none ${
                  formik.touched.message && formik.errors.message
                    ? "border-red-500 focus:border-red-500"
                    : "border-zinc-900 focus:border-zinc-700"
                }`}
                placeholder="Let's build something scalable..."
              />
              {formik.touched.message && formik.errors.message && (
                <p className="mt-1.5 text-xs text-red-400 font-mono">{formik.errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !formik.isValid}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

        <div className="md:col-span-2 flex flex-col justify-between gap-6">
          <div className="p-5 rounded-2xl bg-zinc-900/20 border border-zinc-900 space-y-2">
            <h4 className="text-xs font-mono uppercase text-zinc-500 tracking-widest">Email Me</h4>
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