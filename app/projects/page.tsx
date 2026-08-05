import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";
import { portfolioProfile, portfolioProjects } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Proyectos académicos y personales de Facundo Sola en C#, JavaScript, Android, juegos interactivos y desarrollo web.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <main
      id="main-content"
      className="mx-auto flex min-h-[70svh] max-w-6xl flex-col px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
    >
      <Link
        href="/"
        className="mb-10 inline-flex min-h-11 items-center gap-2 self-start rounded-full text-sm font-semibold text-slate-400 transition hover:text-white"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        Volver al inicio
      </Link>

      <SectionHeader
        eyebrow="Proyectos"
        title="Código que puedo mostrar y explicar"
        description="Repositorios propios y prácticas académicas publicados en GitHub. Cada proyecto conserva un alcance concreto, sin presentar prototipos como productos terminados."
        headingLevel="h1"
        cta={
          <Link
            href={portfolioProfile.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300/30 hover:bg-cyan-300/8"
          >
            Perfil de GitHub
            <ArrowUpRight className="size-4" aria-hidden="true" />
            <span className="sr-only"> (abre en una pestaña nueva)</span>
          </Link>
        }
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {portfolioProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            headingLevel="h2"
          />
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-white/10 bg-slate-900/45 p-6 text-sm leading-7 text-slate-400 sm:p-8">
        <p className="font-bold text-white">¿Querés conocer el contexto?</p>
        <p className="mt-2 max-w-2xl">
          Puedo explicar las decisiones, los aprendizajes y los límites actuales
          de cada proyecto. Escribime a{" "}
          <Link
            href={portfolioProfile.email}
            className="font-semibold text-cyan-300 underline underline-offset-4"
          >
            {portfolioProfile.emailAddress}
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
