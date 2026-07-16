import Image from "next/image";
import { Award, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/projects";
import ProjectGallery from "@/components/ProjectGallery";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
        Featured Projects
      </p>

      <h2 className="mt-3 text-4xl font-bold">Things I&apos;ve Built</h2>

      <div className="mt-12 space-y-20">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 md:p-8"
          >
            <p className="text-sm text-cyan-400">{project.role}</p>

            <h3 className="mt-2 text-3xl font-bold">{project.title}</h3>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {(project.liveUrl || project.repositoryUrl) && (
              <div className="mt-6 flex flex-wrap gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-300"
                  >
                    <ExternalLink size={17} />
                    Live Demo
                  </a>
                )}

                {project.repositoryUrl && (
                  <a
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition-colors hover:border-cyan-400 hover:text-cyan-400"
                  >
                    <FaGithub size={17} />
                    GitHub Repository
                  </a>
                )}
              </div>
            )}

            {project.featuredVideo && project.demo && (
              <div className="mt-8 overflow-hidden rounded-3xl border border-slate-800 bg-slate-950">
                <iframe
                  src={project.demo}
                  title={`${project.title} demo video`}
                  className="aspect-video w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            )}

            {project.imageCarousel ? (
              <ProjectGallery
                images={project.images}
                descriptions={project.imageDescriptions}
                projectTitle={project.title}
              />
            ) : (
              project.images.length > 0 && (
                <div className="mt-8 flex gap-5 overflow-x-auto pb-4">
                  {project.images.map((image, index) => (
                    <div
                      key={image}
                      className="relative h-80 min-w-56 overflow-hidden rounded-3xl border border-slate-800 bg-slate-950"
                    >
                      <Image
                        src={image}
                        alt={
                          project.imageDescriptions?.[index] ??
                          `${project.title} screenshot ${index + 1}`
                        }
                        fill
                        sizes="224px"
                        className="object-cover"
                      />
                      {project.imageDescriptions?.[index] && (
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent px-4 pb-4 pt-12">
                          <p className="text-xs leading-5 text-slate-200">
                            {project.imageDescriptions[index]}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )
            )}

            {project.certificate && (
              <a
                href={project.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400"
              >
                <Award size={18} />
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
