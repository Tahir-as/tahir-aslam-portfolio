import { portfolioData } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Skills() {
  const { skills } = portfolioData;

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-20 border-b border-slate-200/80 bg-slate-50/50 py-20 sm:py-24 dark:border-slate-800/80 dark:bg-slate-900/25"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-blue-700 dark:text-blue-400">
            {skills.index} / {skills.eyebrow}
          </p>
          <h2
            id="skills-heading"
            className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl dark:text-white"
          >
            {skills.heading}
          </h2>
          <p className="mt-3 max-w-2xl text-base text-slate-600 dark:text-slate-300">
            {skills.description}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.groups.map((group, index) => (
            <Reveal key={group.category} delayMs={index * 50}>
              <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-blue-500/40 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-blue-400/40">
                <h3 className="text-sm font-semibold tracking-tight text-slate-950 dark:text-white">
                  {group.category}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-slate-700/80 dark:bg-slate-800/80 dark:text-slate-200"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
