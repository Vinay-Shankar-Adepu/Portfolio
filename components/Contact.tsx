import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-28">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 md:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Contact
        </p>

        <h2 className="mt-3 text-4xl font-bold">Let&apos;s Connect</h2>

        <p className="mt-4 max-w-2xl leading-7 text-slate-300">
          I&apos;m open to Full Stack, Frontend, Flutter, and Software Engineer
          opportunities. Feel free to reach out through email, LinkedIn, or
          GitHub.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="mailto:your@email.com"
            className="flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
          >
            <Mail size={18} />
            Email
          </a>

          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-slate-700 px-5 py-3 hover:border-cyan-400"
          >
            <FaLinkedin size={18} />
            LinkedIn
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-slate-700 px-5 py-3 hover:border-cyan-400"
          >
            <FaGithub size={18} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
