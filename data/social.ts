import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import type { IconType } from "react-icons";

export type SocialLink = {
  label: string;
  href: string;
  icon: IconType;
};

// TODO: substituir com seus perfis, e-mail e WhatsApp.
export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/hugoxz-dev", icon: FaGithub },
  { label: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedinIn },
  { label: "E-mail", href: "mailto:hello@example.com", icon: FaEnvelope },
];

export const contactDetails = {
  email: "hello@example.com",
  whatsapp: "https://wa.me/",
  linkedin: "https://linkedin.com",
};
