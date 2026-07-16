export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-bold">
          Vinay Adepu<span className="text-cyan-400"></span>
        </a>

        <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <a href="#projects" className="hover:text-cyan-400">
            Projects
          </a>
          <a href="#experience" className="hover:text-cyan-400">
            Experience
          </a>
          <a href="#skills" className="hover:text-cyan-400">
            Skills
          </a>
          <a href="#about" className="hover:text-cyan-400">
            About
          </a>
          <a href="#contact" className="hover:text-cyan-400">
            Contact
          </a>
          <a
            href="/resume.pdf"
            className="rounded-full bg-cyan-400 px-4 py-2 font-semibold text-slate-950 hover:bg-cyan-300"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
