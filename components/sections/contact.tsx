import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { contactDetails } from "@/data/social";
import { SectionHeading } from "@/components/ui/section-heading";

export function Contact() {
  return (
    <section id="contato" aria-labelledby="contact-title" className="section-anchor section-space">
      <div className="container-page">
        <SectionHeading
          id="contact-title"
          eyebrow="Vamos conversar?"
          title="Tem um projeto em mente?"
          description="Escolha o canal mais conveniente. Será um prazer conversar sobre novas ideias."
          centered
        />
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2">
          <a href={`mailto:${contactDetails.email}`} className="contact-card">
            <span className="contact-card-icon">
              <Mail size={21} aria-hidden="true" />
            </span>
            <span>
              <strong>E-mail</strong>
              <span className="contact-card-detail">{contactDetails.email}</span>
            </span>
            <ArrowUpRight size={18} className="ml-auto" aria-hidden="true" />
          </a>
          <a
            href={contactDetails.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span className="contact-card-icon">
              <MessageCircle size={21} aria-hidden="true" />
            </span>
            <span>
              <strong>WhatsApp</strong>
              <span className="contact-card-detail">Conversa rápida</span>
            </span>
            <ArrowUpRight size={18} className="ml-auto" aria-hidden="true" />
          </a>
          <a
            href={contactDetails.linkedin}
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span className="contact-card-icon">
              <FaLinkedinIn size={21} aria-hidden="true" />
            </span>
            <span>
              <strong>LinkedIn</strong>
              <span className="contact-card-detail">Minha trajetória profissional</span>
            </span>
            <ArrowUpRight size={18} className="ml-auto" aria-hidden="true" />
          </a>
          <a
            href="https://github.com/hugoxz-dev"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span className="contact-card-icon">
              <FaGithub size={21} aria-hidden="true" />
            </span>
            <span>
              <strong>GitHub</strong>
              <span className="contact-card-detail">Veja meus projetos</span>
            </span>
            <ArrowUpRight size={18} className="ml-auto" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
