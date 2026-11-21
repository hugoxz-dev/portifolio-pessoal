import type { ReactNode } from "react";

type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: ReactNode;
  centered?: boolean;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="text-balance text-3xl font-semibold tracking-tight text-stone-950 dark:text-white sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty leading-7 text-stone-600 dark:text-stone-400">
          {description}
        </p>
      ) : null}
    </div>
  );
}
