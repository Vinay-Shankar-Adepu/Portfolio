import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-28">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
        Skills
      </p>

      <h2 className="mt-3 text-4xl font-bold">Technologies I Work With</h2>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div
            key={group.category}
            className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6"
          >
            <h3 className="text-xl font-bold text-white">{group.category}</h3>

            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
