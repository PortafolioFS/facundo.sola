import Link from "next/link";
import { ArrowUpRight, Cpu } from "lucide-react";
import { portfolioProfile } from "@/lib/portfolio";

const navigation = [
  { href: "/#experience", label: "Experiencia" },
  { href: "/#skills", label: "Habilidades" },
  { href: "/#projects", label: "Proyectos" },
  { href: "/#learning", label: "Formación" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <Link
          href="/#top"
          className="inline-flex min-h-11 items-center gap-2.5 rounded-lg font-bold tracking-[-0.02em] text-white"
        >
          <span className="grid size-8 place-items-center rounded-lg border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
            <Cpu className="size-4" aria-hidden="true" />
          </span>
          <span>{portfolioProfile.name}</span>
        </Link>

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-1 md:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#contact"
          className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/8"
        >
          Contacto
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </div>

      <nav
        aria-label="Navegación móvil"
        className="scrollbar-none mx-auto flex max-w-6xl gap-1 overflow-x-auto border-t border-white/5 px-4 py-2 md:hidden"
      >
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 rounded-full px-3 py-2 text-xs font-semibold text-slate-300 transition hover:bg-white/5 hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
