import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Providers } from "@/components/providers";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hugo Cavalacante | Desenvolvedor Full Stack",
    template: "%s | Hugo Cavalacante",
  },
  description:
    "Portfólio de Hugo Cavalacante, desenvolvedor Full Stack. Conheça projetos, habilidades, formação e entre em contato.",
  applicationName: "Portfólio Hugo Cavalacante",
  keywords: [
    "desenvolvedor full stack",
    "desenvolvimento web",
    "portfólio",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Hugo Cavalacante" }],
  openGraph: {
    title: "Hugo Cavalacante | Desenvolvedor Full Stack",
    description:
      "Conheça meus projetos, habilidades e trajetória como desenvolvedor Full Stack.",
    url: siteUrl,
    siteName: "Portfólio Hugo Cavalacante",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/images/avatar-placeholder.svg", alt: "Hugo Cavalacante" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hugo Cavalacante | Desenvolvedor Full Stack",
    description: "Portfólio profissional de Hugo Cavalacante.",
    images: ["/images/avatar-placeholder.svg"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0a09" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <Providers>
          <a href="#conteudo" className="skip-link">
            Pular para o conteúdo
          </a>
          <Header />
          <main id="conteudo" className="pt-[4.5rem]">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
