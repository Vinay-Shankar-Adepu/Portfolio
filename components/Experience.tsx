import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-28">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
        Experience
      </p>

      <h2 className="mt-3 text-4xl font-bold">Leadership & Development</h2>

      <div className="mt-12 space-y-8">
        {experience.map((item) => (
          <article
            key={item.title}
            className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="mt-1 text-cyan-400">{item.company}</p>
              </div>
              <div className="text-sm text-slate-400 md:text-right">
                <div className="flex flex-wrap items-center gap-2 md:justify-end">
                  <span>{item.period}</span>
                  {"current" in item && item.current && (
                    <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-0.5 text-xs font-semibold text-cyan-400">
                      Current
                    </span>
                  )}
                </div>
                {"location" in item && item.location && (
                  <p className="mt-1">{item.location}</p>
                )}
              </div>
            </div>

            <p className="mt-5 leading-7 text-slate-300">{item.description}</p>

            <ul className="mt-5 space-y-2 text-sm text-slate-400">
              {item.points.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
