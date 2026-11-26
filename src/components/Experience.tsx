import { portfolioData } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Experience() {
  const { experience } = portfolioData;

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-20 border-b border-slate-200/80 bg-slate-50/50 py-20 sm:py-24 dark:border-slate-800/80 dark:bg-slate-900/25"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-blue-700 dark:text-blue-400">
            {experience.index} / {experience.eyebrow}
          </p>
          <h2
            id="experience-heading"
            className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl dark:text-white"
          >
            {experience.heading}
          </h2>
          <p className="mt-3 max-w-2xl text-base text-slate-600 dark:text-slate-300">
            {experience.description}
          </p>
        </Reveal>

        <div className="mt-10 space-y-6">
          {experience.items.map((item) => (
            <Reveal key={item.id}>
              <article className="relative rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 dark:border-slate-800 dark:bg-slate-900/60">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-slate-950 sm:text-xl dark:text-white">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-blue-700 dark:text-blue-400">
                      {item.organization} · {item.location}
                    </p>
                  </div>
                  <p className="font-mono text-xs font-medium text-slate-600 sm:text-sm dark:text-slate-400">
                    {item.period}
                  </p>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
                  {item.summary}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600 dark:bg-blue-400"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
