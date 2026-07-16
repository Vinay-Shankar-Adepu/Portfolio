import { Award, Code2, Cloud, Smartphone } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Projects",
    description:
      "Built practical apps using React, Node.js, MongoDB, and Firebase.",
  },
  {
    icon: Smartphone,
    title: "Flutter Apps",
    description:
      "Created mobile apps with real-time flows, payments, and dashboards.",
  },
  {
    icon: Award,
    title: "Hackathon Finalist",
    description:
      "Top 10 finalist at Megathon 2025 with an insurance digitization platform.",
  },
  {
    icon: Cloud,
    title: "AWS AI Event",
    description:
      "Attended AWS AI-focused event in New York to explore cloud and AI.",
  },
];

export default function Highlights() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-4 md:grid-cols-4">
        {highlights.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6"
            >
              <Icon className="text-cyan-400" size={26} />
              <h3 className="mt-4 font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
