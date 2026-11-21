"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { profile } from "@/data/profile";

const navigation = [
  { label: "Início", id: "inicio" },
  { label: "Projetos", id: "projetos" },
  { label: "Habilidades", id: "habilidades" },
  { label: "Formação", id: "formacao" },
  { label: "Sobre mim", id: "hobbies" },
  { label: "Contato", id: "contato" },
];

export function Header() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visibleSections[0]) setActiveSection(visibleSections[0].target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75] },
    );

    navigation.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-stone-200/70 bg-white/85 backdrop-blur-xl dark:border-stone-800/80 dark:bg-stone-950/85">
      <div className="container-page flex h-[4.5rem] items-center justify-between gap-4">
        <Link
          href="#inicio"
          onClick={closeMenu}
          className="shrink-0 text-lg font-bold tracking-tight text-stone-950 dark:text-white"
          aria-label={`${profile.name}, início`}
        >
          {profile.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-1 lg:flex">
          {navigation.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={activeSection === id ? "location" : undefined}
              className={`rounded-full px-3 py-2 text-sm transition-colors ${
                activeSection === id
                  ? "bg-accent-soft font-medium text-accent-dark dark:bg-accent/15 dark:text-emerald-300"
                  : "text-stone-600 hover:text-stone-950 dark:text-stone-400 dark:hover:text-white"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="icon-button lg:hidden"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-navigation"
          aria-label="Navegação móvel"
          className="border-t border-stone-200 bg-white px-5 py-3 dark:border-stone-800 dark:bg-stone-950 lg:hidden"
        >
          <div className="container-page flex flex-col gap-1">
            {navigation.map(({ label, id }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={closeMenu}
                aria-current={activeSection === id ? "location" : undefined}
                className={`rounded-lg px-3 py-2.5 text-sm ${
                  activeSection === id
                    ? "bg-accent-soft font-medium text-accent-dark dark:bg-accent/15 dark:text-emerald-300"
                    : "text-stone-700 dark:text-stone-300"
                }`}
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
