"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { contactDetails } from "@/data/social";
import { contactSchema, type ContactFormValues } from "@/lib/contact-schema";
import { SectionHeading } from "@/components/ui/section-heading";

export function Contact() {
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(
    null,
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(values: ContactFormValues) {
    setFeedback(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        setFeedback({
          type: "error",
          message: result.error ?? "Não foi possível enviar sua mensagem. Tente novamente.",
        });
        return;
      }

      reset();
      setFeedback({
        type: "success",
        message: result.message ?? "Mensagem enviada com sucesso!",
      });
    } catch {
      setFeedback({
        type: "error",
        message: "Não foi possível conectar ao servidor. Tente novamente em instantes.",
      });
    }
  }

  return (
    <section id="contato" aria-labelledby="contact-title" className="section-anchor section-space">
      <div className="container-page">
        <SectionHeading
          id="contact-title"
          eyebrow="Vamos conversar?"
          title="Tem um projeto em mente?"
          description="Conte um pouco sobre sua ideia. Vou adorar saber mais e responder assim que possível."
          centered
        />
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <aside className="rounded-2xl bg-stone-50 p-6 dark:bg-stone-900 sm:p-8">
            <h3 className="text-lg font-semibold text-stone-950 dark:text-white">
              Outros canais
            </h3>
            <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-stone-400">
              Prefere uma conversa direta? Você também pode me encontrar por aqui.
            </p>
            <div className="mt-6 space-y-3">
              <a href={`mailto:${contactDetails.email}`} className="contact-link">
                <Mail size={18} aria-hidden="true" />
                <span>{contactDetails.email}</span>
                <ArrowUpRight size={15} className="ml-auto" aria-hidden="true" />
              </a>
              <a
                href={contactDetails.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <MessageCircle size={18} aria-hidden="true" />
                <span>WhatsApp</span>
                <ArrowUpRight size={15} className="ml-auto" aria-hidden="true" />
              </a>
              <a
                href={contactDetails.linkedin}
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <ArrowUpRight size={18} aria-hidden="true" />
                <span>LinkedIn</span>
                <ArrowUpRight size={15} className="ml-auto" aria-hidden="true" />
              </a>
            </div>
            <p className="mt-6 text-xs leading-5 text-stone-500 dark:text-stone-400">
              Configure as variáveis de ambiente para habilitar o envio pelo formulário.
            </p>
          </aside>

          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
            <div>
              <label htmlFor="contact-name" className="form-label">
                Nome
              </label>
              <input
                id="contact-name"
                autoComplete="name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "contact-name-error" : undefined}
                className="form-input"
                placeholder="Como posso te chamar?"
                {...register("name")}
              />
              {errors.name ? (
                <p id="contact-name-error" className="form-error">
                  {errors.name.message}
                </p>
              ) : null}
            </div>
            <div>
              <label htmlFor="contact-email" className="form-label">
                E-mail
              </label>
              <input
                id="contact-email"
                type="email"
                autoComplete="email"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "contact-email-error" : undefined}
                className="form-input"
                placeholder="voce@exemplo.com"
                {...register("email")}
              />
              {errors.email ? (
                <p id="contact-email-error" className="form-error">
                  {errors.email.message}
                </p>
              ) : null}
            </div>
            <div>
              <label htmlFor="contact-message" className="form-label">
                Mensagem
              </label>
              <textarea
                id="contact-message"
                rows={5}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
                className="form-input resize-y"
                placeholder="Conte um pouco sobre o que você precisa..."
                {...register("message")}
              />
              {errors.message ? (
                <p id="contact-message-error" className="form-error">
                  {errors.message.message}
                </p>
              ) : null}
            </div>

            {feedback ? (
              <p
                role={feedback.type === "error" ? "alert" : "status"}
                aria-live={feedback.type === "error" ? "assertive" : "polite"}
                className={`rounded-xl px-4 py-3 text-sm ${
                  feedback.type === "success"
                    ? "bg-accent-soft text-accent-dark dark:bg-accent/15 dark:text-emerald-300"
                    : "bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-300"
                }`}
              >
                {feedback.message}
              </p>
            ) : null}

            <button type="submit" className="button-primary w-full sm:w-auto" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Enviar mensagem"}
              {!isSubmitting ? <ArrowUpRight size={16} aria-hidden="true" /> : null}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
