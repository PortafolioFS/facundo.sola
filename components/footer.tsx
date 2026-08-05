import Link from "next/link";
import { portfolioProfile } from "@/lib/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-slate-950/70 py-10 text-sm text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <div>
          <p className="font-bold text-white">{portfolioProfile.name}</p>
          <p className="mt-1">{portfolioProfile.role}</p>
        </div>
        <nav aria-label="Enlaces del pie" className="flex flex-wrap gap-x-5 gap-y-3">
          <Link className="transition hover:text-cyan-300" href="/projects">
            Proyectos
          </Link>
          <Link
            className="transition hover:text-cyan-300"
            href={portfolioProfile.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
            <span className="sr-only"> (abre en una pestaña nueva)</span>
          </Link>
          <Link
            className="transition hover:text-cyan-300"
            href={portfolioProfile.linkedinUrl}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
            <span className="sr-only"> (abre en una pestaña nueva)</span>
          </Link>
          <Link
            className="transition hover:text-cyan-300"
            href={portfolioProfile.email}
          >
            Email
          </Link>
        </nav>
      </div>
    </footer>
  );
}
