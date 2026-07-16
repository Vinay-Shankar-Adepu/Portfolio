const certificates = [
  {
    title: "Project Completion Certificate",
    issuer: "KMIT",
    link: "https://psapi.kmitonline.com/studentps/certificate/3b35953b-60c2-487a-bb2f-d5de2326d971",
  },
  {
    title: "Project Completion Certificate",
    issuer: "KMIT",
    link: "https://psapi.kmitonline.com/studentps/certificate/bf8ca6ee-c472-40e3-92cb-8251dfc81b58",
  },
  {
    title: "AWS AI Event",
    issuer: "New York",
    link: "#",
  },
];

export default function Certifications() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
        Certificates
      </p>

      <h2 className="mt-3 text-4xl font-bold">Certifications & Learning</h2>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {certificates.map((certificate) => (
          <a
            key={certificate.link}
            href={certificate.link}
            target="_blank"
            className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:border-cyan-400"
          >
            <h3 className="text-xl font-bold">{certificate.title}</h3>
            <p className="mt-2 text-sm text-slate-400">{certificate.issuer}</p>
            <p className="mt-6 text-sm font-semibold text-cyan-400">
              View Certificate →
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
