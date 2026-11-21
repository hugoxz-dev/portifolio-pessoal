export type EducationItem = {
  title: string;
  institution: string;
  period: string;
  description: string;
};

export type Certificate = {
  title: string;
  issuer: string;
  issuedAt: string;
  url?: string;
};

// TODO: substituir com seus dados, períodos e links dos certificados.
export const education: EducationItem[] = [
  {
    title: "Engenharia da Computacao",
    institution: "UniCeuma",
    period: "2025 — 2029",
    description:
      "Formação com foco em fundamentos de programação, desenvolvimento web e projetos colaborativos.",
  },
  {
    title: "Desenvolvimento web",
    institution: "Curso complementar",
    period: "2021 — 2022",
    description:
      "Estudos práticos de interfaces, lógica de programação e construção de aplicações.",
  },
];

export const certificates: Certificate[] = [
  {
    title: "Fundamentos de desenvolvimento web",
    issuer: "Plataforma de aprendizagem",
    issuedAt: "2024",
  },
  {
    title: "TypeScript na prática",
    issuer: "Plataforma de aprendizagem",
    issuedAt: "2023",
  },
];
