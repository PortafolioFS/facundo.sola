import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { SectionHeader } from "@/components/section-header";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Próximamente: notas de Facundo Sola sobre soporte IT, desarrollo de software y aprendizaje técnico.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function BlogPage() {
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
        eyebrow="Blog"
        title="Notas técnicas, próximamente"
        description="Esta sección se publicará cuando haya artículos propios con suficiente profundidad y utilidad."
        headingLevel="h1"
      />

      <section className="mt-10 rounded-[2rem] border border-white/10 bg-slate-900/45 p-6 shadow-2xl shadow-black/10 sm:p-8">
        <MessageCircle className="size-8 text-cyan-300" aria-hidden="true" />
        <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300">
          Mientras tanto, el portfolio prioriza experiencia, habilidades,
          proyectos reales y formación verificable. Si hay un tema técnico que
          te interese conversar, podés escribirme directamente.
        </p>
        <Link
          href="/#contact"
          className="mt-6 inline-flex min-h-11 items-center rounded-full bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
        >
          Ir a contacto
        </Link>
      </section>
    </main>
  );
}
