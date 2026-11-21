import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Hero } from "@/components/sections/hero";
import { Hobbies } from "@/components/sections/hobbies";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Education />
      <Hobbies />
      <Contact />
    </>
  );
}
