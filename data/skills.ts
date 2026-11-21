export type Skill = {
  name: string;
  level: "Básico" | "Intermediário" | "Avançado" | "Especialista";
};

export type SkillCategory = {
  name: string;
  skills: Skill[];
};

// TODO: substituir com seus dados e níveis de proficiência.
export const skillCategories: SkillCategory[] = [
  {
    name: "Front-end",
    skills: [
      { name: "HTML & CSS", level: "Avançado" },
      { name: "JavaScript", level: "Avançado" },
      { name: "TypeScript", level: "Intermediário" },
      { name: "React / Next.js", level: "Intermediário" },
    ],
  },
  {
    name: "Back-end",
    skills: [
      { name: "Node.js", level: "Intermediário" },
      { name: "Python", level: "Intermediário" },
      { name: "SQL", level: "Básico" },
    ],
  },
  {
    name: "Ferramentas",
    skills: [
      { name: "Git & GitHub", level: "Avançado" },
      { name: "Figma", level: "Intermediário" },
      { name: "Docker", level: "Básico" },
    ],
  },
  {
    name: "Soft skills",
    skills: [
      { name: "Comunicação", level: "Avançado" },
      { name: "Trabalho em equipe", level: "Avançado" },
      { name: "Resolução de problemas", level: "Intermediário" },
    ],
  },
];
