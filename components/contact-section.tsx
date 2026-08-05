import Link from "next/link";
import { ArrowUpRight, CarFront, Mail, MapPinned } from "lucide-react";
import { ContactEmailDialog } from "@/components/contact-email-dialog";
import {
  additionalProfile,
  portfolioProfile,
} from "@/lib/portfolio";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-32 overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-gradient-to-br from-cyan-300/10 via-slate-900/70 to-emerald-300/5"
    >
      <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:p-10">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
            Contacto
          </p>
          <h2 className="mt-3 max-w-xl text-balance text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl">
            ¿Necesitás soporte o querés conversar sobre una oportunidad?
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
            Escribime por el canal que te resulte más cómodo. Puedo compartir
            más contexto sobre mi experiencia, formación y proyectos.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <ContactEmailDialog fallbackHref={portfolioProfile.email} />
            <Link
              href={portfolioProfile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
            >
              LinkedIn
              <ArrowUpRight className="size-4" aria-hidden="true" />
              <span className="sr-only"> (abre en una pestaña nueva)</span>
            </Link>
          </div>

          <p className="mt-5 flex items-center gap-2 text-sm text-slate-400">
            <Mail className="size-4 text-cyan-300" aria-hidden="true" />
            <Link
              href={portfolioProfile.email}
              className="underline decoration-white/20 underline-offset-4 transition hover:text-white"
            >
              {portfolioProfile.emailAddress}
            </Link>
          </p>
        </div>

        <div className="grid content-center gap-3">
          <div className="flex gap-3 rounded-2xl border border-white/10 bg-slate-950/45 p-4">
            <MapPinned
              className="mt-0.5 size-5 shrink-0 text-cyan-300"
              aria-hidden="true"
            />
            <div>
              <p className="font-semibold text-white">Zona de trabajo</p>
              <p className="mt-1 text-sm leading-6 text-slate-400">
                {additionalProfile.workArea}
              </p>
            </div>
          </div>
          <div className="flex gap-3 rounded-2xl border border-white/10 bg-slate-950/45 p-4">
            <CarFront
              className="mt-0.5 size-5 shrink-0 text-cyan-300"
              aria-hidden="true"
            />
            <div>
              <p className="font-semibold text-white">Movilidad</p>
              <p className="mt-1 text-sm leading-6 text-slate-400">
                {additionalProfile.mobility}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
