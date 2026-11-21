import { ArrowUp, Heart } from "lucide-react";
import Link from "next/link";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 dark:border-stone-800">
      <div className="container-page flex flex-col items-center justify-between gap-4 py-8 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-stone-500 dark:text-stone-400">
          © {new Date().getFullYear()} {profile.name}. Feito com{" "}
          <Heart size={14} className="mx-0.5 inline text-accent" aria-label="carinho" /> e Next.js.
        </p>
        <Link href="#inicio" className="text-sm font-medium text-stone-600 hover:text-accent dark:text-stone-300">
          Voltar ao topo <ArrowUp size={15} className="ml-1 inline" aria-hidden="true" />
        </Link>
      </div>
    </footer>
  );
}
