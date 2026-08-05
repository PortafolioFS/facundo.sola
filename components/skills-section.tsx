import {
  Code2,
  HardDrive,
  Network,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { skillGroups, type SkillGroup } from "@/lib/portfolio";

const icons: Record<SkillGroup["id"], LucideIcon> = {
  support: HardDrive,
  systems: Network,
  development: Code2,
  security: ShieldCheck,
};

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-32">
      <SectionHeader
        eyebrow="Habilidades técnicas"
        title="Una base amplia, con foco práctico"
        description="Herramientas y conocimientos alineados con el CV, organizados por el tipo de problema que ayudan a resolver."
      />

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {skillGroups.map((group) => {
          const Icon = icons[group.id];

          return (
            <article
              key={group.id}
              className="group rounded-3xl border border-white/10 bg-slate-900/45 p-6 transition hover:border-cyan-300/20 hover:bg-slate-900/70"
            >
              <div className="flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/5 text-cyan-300 transition group-hover:border-cyan-300/20 group-hover:bg-cyan-300/10">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white">{group.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {group.description}
                  </p>
                </div>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label={group.title}>
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-white/10 bg-slate-950/45 px-3 py-1.5 text-xs font-medium text-slate-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
