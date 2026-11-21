"use client";

import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { socialLinks } from "@/data/social";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="section-anchor relative flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden py-16 sm:py-24"
    >
      <div className="pointer-events-none absolute -right-36 top-12 size-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="container-page relative grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-soft/70 px-4 py-2 text-sm font-medium text-accent-dark dark:bg-accent/10 dark:text-emerald-300">
            <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
            Disponível para novos projetos
          </p>
          <h1
            id="hero-title"
            className="max-w-3xl text-balance text-5xl font-semibold leading-[1.08] tracking-tight text-stone-950 dark:text-white sm:text-6xl lg:text-7xl"
          >
            Olá, eu sou <span className="text-accent">{profile.name}</span>
          </h1>
          <p className="mt-5 text-xl font-medium text-stone-700 dark:text-stone-300 sm:text-2xl">
            {profile.role}
          </p>
          <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-stone-600 dark:text-stone-400 sm:text-lg sm:leading-8">
            {profile.introduction}
          </p>
          <p className="mt-5 flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400">
            <MapPin size={16} aria-hidden="true" /> {profile.location}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#projetos" className="button-primary">
              Ver projetos <ArrowDown size={16} aria-hidden="true" />
            </Link>
            <Link href="#contato" className="button-secondary">
              Entrar em contato <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-9 flex items-center gap-3">
            <span className="mr-1 text-sm text-stone-500 dark:text-stone-400">Me encontre</span>
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="icon-button"
                aria-label={label}
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[390px]"
        >
          <div className="absolute -inset-4 rounded-[2.5rem] border border-accent/20 rotate-6" />
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border-[6px] border-white bg-accent-soft shadow-card dark:border-stone-800 dark:bg-stone-900">
            <Image
              src="/images/avatar-placeholder.svg"
              alt="Ilustração de pessoa, substitua por sua foto de perfil"
              fill
              priority
              sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 390px"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-7 rounded-2xl border border-stone-100 bg-white px-4 py-3 shadow-card dark:border-stone-700 dark:bg-stone-900">
            <p className="text-sm font-semibold text-stone-900 dark:text-white">Construindo para a web</p>
            <p className="mt-0.5 text-xs text-stone-500 dark:text-stone-400">com curiosidade e propósito</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
