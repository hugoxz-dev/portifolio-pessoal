"use client";

import { motion } from "framer-motion";
import { Code2, HeartHandshake, Layers3, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/ui/section-heading";

const categoryIcons: LucideIcon[] = [Code2, Layers3, Wrench, HeartHandshake];
const skillLevel: Record<string, number> = {
  Básico: 35,
  Intermediário: 60,
  Avançado: 82,
  Especialista: 96,
};

export function Skills() {
  return (
    <section
      id="habilidades"
      aria-labelledby="skills-title"
      className="section-anchor section-space bg-stone-50 dark:bg-stone-900/50"
    >
      <div className="container-page">
        <SectionHeading
          id="skills-title"
          eyebrow="O que eu faço"
          title="Habilidades para tirar ideias do papel"
          description="Uma combinação de conhecimentos técnicos e colaboração para construir produtos úteis."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => {
            const Icon = categoryIcons[index] ?? Code2;
            return (
              <motion.article
                key={category.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-2xl border border-stone-200 bg-white p-5 dark:border-stone-800 dark:bg-stone-950 sm:p-6"
              >
                <div className="mb-5 flex size-11 items-center justify-center rounded-xl bg-accent-soft text-accent-dark dark:bg-accent/15 dark:text-emerald-300">
                  <Icon size={21} aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-stone-950 dark:text-white">{category.name}</h3>
                <ul className="mt-5 space-y-4">
                  {category.skills.map((skill) => (
                    <li key={skill.name}>
                      <div className="mb-2 flex items-center justify-between gap-2 text-sm">
                        <span className="font-medium text-stone-700 dark:text-stone-300">
                          {skill.name}
                        </span>
                        <span className="shrink-0 text-xs text-stone-500 dark:text-stone-400">
                          {skill.level}
                        </span>
                      </div>
                      <div
                        className="h-1.5 overflow-hidden rounded-full bg-stone-100 dark:bg-stone-800"
                        role="progressbar"
                        aria-label={`${skill.name}: ${skill.level}`}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-valuenow={skillLevel[skill.level]}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skillLevel[skill.level]}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="h-full rounded-full bg-accent"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
