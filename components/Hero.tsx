import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex min-h-screen max-w-6xl flex-col-reverse items-center justify-center gap-16 px-6 py-24 lg:flex-row"
    >
      {/* Left */}
      <div className="flex-1">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Software Engineer
        </p>

        <h1 className="mt-4 text-5xl font-extrabold leading-tight md:text-6xl">
          Hi, I&apos;m <span className="text-cyan-400">Vinay</span>
        </h1>

        <h2 className="mt-5 text-2xl font-semibold text-slate-300">
          Full Stack Developer • Flutter Developer • Cloud Enthusiast
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
          I build scalable web and mobile applications using React, Flutter,
          Node.js, Firebase, and modern cloud technologies. I&apos;m passionate about
          creating reliable software, solving real-world problems, and
          continuously learning new technologies.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/resume/resume.pdf"
            target="_blank"
            className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Resume
          </a>

          <a
            href="https://github.com/Vinay-Shankar-Adepu"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-700 px-6 py-3 transition hover:border-cyan-400"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/vinay-adepu"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-700 px-6 py-3 transition hover:border-cyan-400"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-1 justify-center">
        <div className="relative h-[420px] w-[340px] overflow-hidden rounded-3xl border border-cyan-400/40 bg-slate-900 shadow-2xl">
          <Image
            src="/images/hero/hero.PNG"
            alt="Vinay"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
