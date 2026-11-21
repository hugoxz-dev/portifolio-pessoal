export type Project = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  demoUrl?: string;
  repositoryUrl?: string;
};

// TODO: substituir com seus dados e imagens em public/images.
export const projects: Project[] = [
  {
    title: "Dashboard financeiro",
    description:
      "Uma visão simples e prática para acompanhar despesas, receitas e metas.",
    image: "/images/project-dashboard.svg",
    imageAlt: "Prévia ilustrada de um dashboard financeiro",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Loja virtual",
    description:
      "Experiência de compra responsiva com catálogo organizado e checkout intuitivo.",
    image: "/images/project-store.svg",
    imageAlt: "Prévia ilustrada de uma loja virtual",
    technologies: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Aplicativo de tarefas",
    description:
      "Um espaço leve para organizar projetos, tarefas e prioridades do dia a dia.",
    image: "/images/project-tasks.svg",
    imageAlt: "Prévia ilustrada de um aplicativo de tarefas",
    technologies: ["TypeScript", "Next.js", "Prisma"],
  },
];
