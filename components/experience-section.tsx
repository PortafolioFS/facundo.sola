import { CheckCircle2, Headphones, Wrench } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { professionalExperience } from "@/lib/portfolio";

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-32">
      <SectionHeader
        eyebrow="Experiencia profesional"
        title="Soporte técnico con trato directo y soluciones concretas"
        description="La experiencia principal de mi perfil: diagnosticar, explicar y resolver problemas tecnológicos para usuarios no técnicos."
      />

      <article className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/55 shadow-2xl shadow-black/10">
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.72fr_1.28fr] lg:p-10">
          <div>
            <div className="flex size-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
              <Headphones className="size-6" aria-hidden="true" />
            </div>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
              {professionalExperience.period}
            </p>
            <h3 className="mt-2 text-2xl font-bold tracking-[-0.02em] text-white sm:text-3xl">
              {professionalExperience.role}
            </h3>
            <p className="mt-1 font-medium text-slate-400">
              {professionalExperience.company}
            </p>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              {professionalExperience.summary}
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300">
              <Wrench className="size-4 text-cyan-300" aria-hidden="true" />
              Diagnóstico · Resolución · Seguimiento
            </div>
          </div>

          <ul className="grid content-start gap-3" aria-label="Responsabilidades">
            {professionalExperience.responsibilities.map((responsibility) => (
              <li
                key={responsibility}
                role="listitem"
                className="flex gap-3 rounded-2xl border border-white/8 bg-slate-950/45 p-4 text-sm leading-6 text-slate-300"
              >
                <CheckCircle2
                  className="mt-0.5 size-5 shrink-0 text-emerald-300"
                  aria-hidden="true"
                />
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  );
}
