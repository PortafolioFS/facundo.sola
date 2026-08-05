import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";
import { featuredProjects } from "@/lib/portfolio";

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-32">
      <SectionHeader
        eyebrow="Proyectos"
        title="Práctica visible, alcance honesto"
        description="Proyectos académicos y personales que muestran cómo aplico fundamentos de programación, interfaces y organización del código."
        cta={
          <Link
            href="/projects"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300/30 hover:bg-cyan-300/8"
          >
            Ver todos
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        }
      />

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
