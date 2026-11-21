"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/section-heading";

export function Projects() {
  const technologies = useMemo(
    () => ["Todos", ...new Set(projects.flatMap((project) => project.technologies))],
    [],
  );
  const [selectedTechnology, setSelectedTechnology] = useState("Todos");
  const visibleProjects =
    selectedTechnology === "Todos"
      ? projects
      : projects.filter((project) => project.technologies.includes(selectedTechnology));

  return (
    <section id="projetos" aria-labelledby="projects-title" className="section-anchor section-space">
      <div className="container-page">
        <SectionHeading
          id="projects-title"
          eyebrow="Portfólio"
          title="Alguns projetos em destaque"
          description="Uma seleção de ideias e soluções que transformei em experiências digitais."
        />
        <div className="mb-8 flex flex-wrap gap-2" aria-label="Filtrar projetos por tecnologia">
          {technologies.map((technology) => (
            <button
              key={technology}
              type="button"
              onClick={() => setSelectedTechnology(technology)}
              aria-pressed={selectedTechnology === technology}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                selectedTechnology === technology
                  ? "border-accent bg-accent text-white"
                  : "border-stone-200 bg-white text-stone-600 hover:border-accent/50 hover:text-accent dark:border-stone-700 dark:bg-stone-900 dark:text-stone-300"
              }`}
            >
              {technology}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-card dark:border-stone-800 dark:bg-stone-900"
            >
              <div className="relative aspect-[3/2] overflow-hidden bg-stone-100 dark:bg-stone-800">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-stone-950/0 transition-colors group-hover:bg-stone-950/5" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-stone-950 dark:text-white">{project.title}</h3>
                <p className="mt-2 min-h-[3rem] text-sm leading-6 text-stone-600 dark:text-stone-400">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tecnologias utilizadas">
                  {project.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-full bg-stone-100 px-2.5 py-1 text-xs font-medium text-stone-600 dark:bg-stone-800 dark:text-stone-300"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex gap-4 border-t border-stone-100 pt-4 dark:border-stone-800">
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-dark"
                    >
                      Ver projeto <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                  ) : null}
                  {project.repositoryUrl ? (
                    <a
                      href={project.repositoryUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-stone-600 hover:text-stone-950 dark:text-stone-300 dark:hover:text-white"
                    >
                      <FaGithub size={15} aria-hidden="true" /> Código
                    </a>
                  ) : null}
                  {!project.demoUrl && !project.repositoryUrl ? (
                    <span className="text-sm text-stone-400">Links do projeto em breve</span>
                  ) : null}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
