import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Download, MapPin, Wrench } from "lucide-react";
import { portfolioProfile } from "@/lib/portfolio";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-white/8"
    >
      <div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.2fr_0.8fr] md:py-24 lg:px-10">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/8 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100">
            <Wrench className="size-3.5" aria-hidden="true" />
            {portfolioProfile.badge}
          </div>

          <h1 className="mt-6 max-w-3xl text-balance text-4xl font-bold leading-[1.04] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
            Soporte técnico que resuelve.
            <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
              Software que sigo construyendo.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-slate-300 sm:text-lg">
            {portfolioProfile.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/#contact"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
            >
              Hablemos
            </Link>
            <Link
              href="/#experience"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
            >
              Ver experiencia
              <ArrowDown className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href={portfolioProfile.cvUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-slate-300 transition hover:text-white"
            >
              <Download className="size-4" aria-hidden="true" />
              Abrir CV
              <span className="sr-only"> (abre en una pestaña nueva)</span>
            </Link>
          </div>

          <dl className="mt-10 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-5 border-t border-white/10 pt-6 sm:grid-cols-3">
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-slate-500">
                Experiencia
              </dt>
              <dd className="mt-1 font-semibold text-white">Desde 2019</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-slate-500">
                Formación
              </dt>
              <dd className="mt-1 font-semibold text-white">Software · ICES</dd>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <dt className="text-xs uppercase tracking-[0.16em] text-slate-500">
                Ubicación
              </dt>
              <dd className="mt-1 flex items-center gap-1.5 font-semibold text-white">
                <MapPin className="size-4 text-cyan-300" aria-hidden="true" />
                {portfolioProfile.location}
              </dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-sm md:justify-self-end">
          <div
            aria-hidden="true"
            className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/20 via-transparent to-emerald-400/15 blur-2xl"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/12 bg-slate-900 shadow-2xl shadow-black/40">
            <Image
              src="/facundo-hero.jpg"
              alt="Retrato de Facundo Sola"
              fill
              sizes="(max-width: 767px) 90vw, 380px"
              className="object-cover"
              priority
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-950/70 to-transparent"
            />
          </div>
          <div className="absolute -bottom-5 -left-3 rounded-2xl border border-white/12 bg-slate-950/90 px-4 py-3 shadow-xl backdrop-blur sm:-left-8">
            <p className="text-xs uppercase tracking-[0.16em] text-cyan-300">
              Perfil profesional
            </p>
            <p className="mt-1 text-sm font-semibold text-white">
              IT · Sistemas · Desarrollo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
