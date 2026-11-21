"use client";

import { motion } from "framer-motion";
import { hobbies } from "@/data/hobbies";
import { SectionHeading } from "@/components/ui/section-heading";

export function Hobbies() {
  return (
    <section
      id="hobbies"
      aria-labelledby="hobbies-title"
      className="section-anchor section-space bg-stone-50 dark:bg-stone-900/50"
    >
      <div className="container-page">
        <SectionHeading
          id="hobbies-title"
          eyebrow="Fora do código"
          title="Um pouco sobre mim"
          description="As coisas que me inspiram, despertam curiosidade e deixam a rotina mais leve."
          centered
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {hobbies.map(({ name, description, icon: Icon }, index) => (
            <motion.article
              key={name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group rounded-2xl border border-stone-200 bg-white p-6 text-center transition-colors hover:border-accent/40 dark:border-stone-800 dark:bg-stone-950"
            >
              <span className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-accent-soft text-accent transition-transform group-hover:-rotate-6 group-hover:scale-105 dark:bg-accent/15 dark:text-emerald-300">
                <Icon size={25} aria-hidden="true" />
              </span>
              <h3 className="font-semibold text-stone-900 dark:text-white">{name}</h3>
              <p className="mt-2 text-sm leading-6 text-stone-500 dark:text-stone-400">
                {description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
