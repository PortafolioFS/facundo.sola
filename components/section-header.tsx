import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  cta?: ReactNode;
  headingLevel?: "h1" | "h2";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  cta,
  headingLevel = "h2",
}: SectionHeaderProps) {
  const Heading = headingLevel;

  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
          {eyebrow}
        </p>
        <Heading className="mt-3 text-balance text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl">
          {title}
        </Heading>
        {description ? (
          <p className="mt-4 max-w-2xl text-pretty text-sm leading-7 text-slate-400 sm:text-base">
            {description}
          </p>
        ) : null}
      </div>
      {cta ? <div className="shrink-0">{cta}</div> : null}
    </div>
  );
}
