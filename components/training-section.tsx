import Link from "next/link";
import { ArrowUpRight, BookOpen, CheckCircle2, Clock3 } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { certificates, learningTracks } from "@/lib/portfolio";

export function TrainingSection() {
  return (
    <section id="learning" className="scroll-mt-32">
      <SectionHeader
        eyebrow="Formación"
        title="Aprendizaje formal y certificaciones verificables"
        description="Una selección fiel al CV actual: desarrollo de software, SQL, inteligencia artificial, ciberseguridad y herramientas de trabajo."
      />

      <div className="mt-8 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-3xl border border-cyan-300/15 bg-cyan-300/6 p-6 sm:p-8">
          <span className="grid size-11 place-items-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
            <BookOpen className="size-5" aria-hidden="true" />
          </span>
          {learningTracks.map((item) => (
            <article key={item.title} className="mt-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
                {item.period}
              </p>
              <h3 className="mt-2 text-2xl font-bold tracking-[-0.02em] text-white">
                {item.title}
              </h3>
              <p className="mt-2 font-semibold text-slate-300">
                {item.institution}
              </p>
              <p className="mt-5 text-sm leading-7 text-slate-400">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {certificates.map((certificate) => {
            const StatusIcon =
              certificate.status === "Completado" ? CheckCircle2 : Clock3;

            return (
              <article
                key={certificate.title}
                className="flex flex-col rounded-3xl border border-white/10 bg-slate-900/45 p-5"
              >
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                  <StatusIcon
                    className={`size-4 ${
                      certificate.status === "Completado"
                        ? "text-emerald-300"
                        : "text-amber-300"
                    }`}
                    aria-hidden="true"
                  />
                  {certificate.period}
                </div>
                <h3 className="mt-4 text-base font-bold leading-6 text-white">
                  {certificate.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  {certificate.institution}
                </p>
                {certificate.verificationUrl ? (
                  <Link
                    href={certificate.verificationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex min-h-10 items-end gap-1.5 pt-4 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
                  >
                    Ver credencial
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                    <span className="sr-only">
                      {" "}(abre en una pestaña nueva)
                    </span>
                  </Link>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
