import Link from "next/link";
import { ArrowUpRight, FolderCode, Github } from "lucide-react";
import type { PortfolioProject } from "@/lib/portfolio";

type ProjectCardProps = {
  project: PortfolioProject;
  headingLevel?: "h2" | "h3";
};

export function ProjectCard({
  project,
  headingLevel = "h3",
}: ProjectCardProps) {
  const isExternal = project.href.startsWith("http");
  const Heading = headingLevel;

  return (
    <article className="group flex h-full flex-col rounded-3xl border border-white/10 bg-slate-900/45 p-6 transition hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-slate-900/70">
      <div className="flex items-center justify-between gap-4">
        <span className="grid size-11 place-items-center rounded-2xl border border-white/10 bg-white/5 text-cyan-300">
          <FolderCode className="size-5" aria-hidden="true" />
        </span>
        <span className="rounded-full border border-emerald-300/15 bg-emerald-300/8 px-3 py-1 text-xs font-semibold text-emerald-200">
          {project.highlight}
        </span>
      </div>

      <Heading className="mt-6 text-2xl font-bold tracking-[-0.02em] text-white">
        {project.title}
      </Heading>
      <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">
        {project.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tecnologías">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-slate-300"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
        <Link
          href={project.href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noreferrer" : undefined}
          className="inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-bold text-white transition hover:text-cyan-300"
        >
          {project.ctaLabel ?? "Ver detalle"}
          <ArrowUpRight className="size-4" aria-hidden="true" />
          {isExternal ? (
            <span className="sr-only"> (abre en una pestaña nueva)</span>
          ) : null}
        </Link>

        {project.repositoryHref ? (
          <Link
            href={project.repositoryHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-semibold text-slate-300 transition hover:text-cyan-300"
          >
            <Github className="size-4" aria-hidden="true" />
            Ver código
            <span className="sr-only"> (abre en una pestaña nueva)</span>
          </Link>
        ) : null}
      </div>
    </article>
  );
}
