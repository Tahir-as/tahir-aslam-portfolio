import { portfolioData } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function About() {
  const { about } = portfolioData;

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-20 border-b border-slate-200/80 py-20 sm:py-24 dark:border-slate-800/80"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-blue-700 dark:text-blue-400">
            {about.index} / {about.eyebrow}
          </p>
          <h2
            id="about-heading"
            className="mt-3 max-w-2xl text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl dark:text-white"
          >
            {about.heading}
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="space-y-4 text-base leading-relaxed text-slate-600 lg:col-span-7 dark:text-slate-300">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="lg:col-span-5">
              <dl className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-slate-50/70 p-6 dark:divide-slate-800 dark:border-slate-800 dark:bg-slate-900/50">
                {about.facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="py-3.5 first:pt-0 last:pb-0"
                  >
                    <dt className="font-mono text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 text-sm font-semibold text-slate-950 dark:text-slate-100">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
