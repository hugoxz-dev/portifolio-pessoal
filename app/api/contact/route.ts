import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Corpo da requisição inválido." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return Response.json({ error: "Confira os dados informados e tente novamente." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    return Response.json(
      { error: "O formulário ainda não está configurado. Use os canais diretos ao lado." },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const { name, email, message } = parsed.data;
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `Contato pelo portfólio — ${name}`,
    text: `Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`,
  });

  if (error) {
    console.error("Falha ao enviar mensagem de contato:", error);
    return Response.json(
      { error: "Não foi possível enviar sua mensagem agora. Tente novamente mais tarde." },
      { status: 502 },
    );
  }

  return Response.json({ message: "Mensagem enviada com sucesso. Obrigado pelo contato!" });
}
