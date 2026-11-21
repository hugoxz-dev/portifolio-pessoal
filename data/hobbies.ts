import { BookOpen, Camera, Compass, Headphones } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Hobby = {
  name: string;
  description: string;
  icon: LucideIcon;
};

// TODO: substituir com seus hobbies e descrições pessoais.
export const hobbies: Hobby[] = [
  {
    name: "Leitura",
    description: "Sempre explorando ideias novas, dentro e fora da tecnologia.",
    icon: BookOpen,
  },
  {
    name: "Fotografia",
    description: "Gosto de guardar histórias em pequenos detalhes.",
    icon: Camera,
  },
  {
    name: "Música",
    description: "Uma boa trilha sonora acompanha qualquer projeto.",
    icon: Headphones,
  },
  {
    name: "Explorar lugares",
    description: "Conhecer novos lugares ajuda a olhar as coisas por outro ângulo.",
    icon: Compass,
  },
];
