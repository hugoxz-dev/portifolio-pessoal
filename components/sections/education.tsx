import { Award, CalendarDays, GraduationCap } from "lucide-react";
import { certificates, education } from "@/data/education";
import { SectionHeading } from "@/components/ui/section-heading";

export function Education() {
  return (
    <section id="formacao" aria-labelledby="education-title" className="section-anchor section-space">
      <div className="container-page">
        <SectionHeading
          id="education-title"
          eyebrow="Trajetória"
          title="Formação e certificados"
          description="Aprendizado contínuo, com experiências que contribuem para minha jornada profissional."
        />
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-stone-950 dark:text-white">
              <GraduationCap className="text-accent" size={21} aria-hidden="true" />
              Formação
            </h3>
            <ol className="relative ml-2 border-l border-stone-200 dark:border-stone-800">
              {education.map((item) => (
                <li key={`${item.title}-${item.institution}`} className="relative pb-8 pl-7 last:pb-0">
                  <span className="absolute -left-[7px] top-1 size-3.5 rounded-full border-[3px] border-accent bg-white dark:bg-stone-950" />
                  <p className="mb-2 inline-flex items-center gap-1.5 text-xs font-medium text-accent">
                    <CalendarDays size={14} aria-hidden="true" /> {item.period}
                  </p>
                  <h4 className="font-semibold text-stone-900 dark:text-white">{item.title}</h4>
                  <p className="mt-1 text-sm font-medium text-stone-600 dark:text-stone-300">
                    {item.institution}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-stone-500 dark:text-stone-400">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-stone-950 dark:text-white">
              <Award className="text-accent" size={21} aria-hidden="true" />
              Certificações
            </h3>
            <ul className="space-y-3">
              {certificates.map((certificate) => (
                <li
                  key={certificate.title}
                  className="flex items-start gap-4 rounded-2xl border border-stone-200 p-4 dark:border-stone-800 sm:p-5"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-dark dark:bg-accent/15 dark:text-emerald-300">
                    <Award size={19} aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-stone-900 dark:text-white">{certificate.title}</h4>
                    <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
                      {certificate.issuer} · {certificate.issuedAt}
                    </p>
                  </div>
                  {certificate.url ? (
                    <a
                      href={certificate.url}
                      target="_blank"
                      rel="noreferrer"
                      className="shrink-0 text-sm font-medium text-accent hover:underline"
                    >
                      Ver certificado
                    </a>
                  ) : (
                    <span className="shrink-0 text-xs text-stone-400">Link em breve</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
