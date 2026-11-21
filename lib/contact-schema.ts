import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome.").max(100, "O nome deve ter até 100 caracteres."),
  email: z.string().trim().email("Informe um e-mail válido.").max(254, "E-mail muito longo."),
  message: z
    .string()
    .trim()
    .min(10, "A mensagem deve ter pelo menos 10 caracteres.")
    .max(5000, "A mensagem deve ter até 5.000 caracteres."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
