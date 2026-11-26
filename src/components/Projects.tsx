import { portfolioData, type ProjectItem } from "@/data/portfolio";
import { ArrowUpRightIcon, GitHubIcon } from "./Icons";
import { Reveal } from "./Reveal";

export function Projects() {
  const { projects, profile } = portfolioData;
  const projectItems: readonly ProjectItem[] = projects.items;
  const hasPlaceholders = projectItems.some(
    (project) =>
      project.isPlaceholderLink ||
      project.isLiveDemoPlaceholder ||
      project.isPlaceholderProject
  );

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-20 border-b border-slate-200/80 py-20 sm:py-24 dark:border-slate-800/80"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-blue-700 dark:text-blue-400">
            {projects.index} / {projects.eyebrow}
          </p>
          <h2
            id="projects-heading"
            className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl dark:text-white"
          >
            {projects.heading}
          </h2>
          <p className="mt-3 max-w-2xl text-base text-slate-600 dark:text-slate-300">
            {projects.description}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projectItems.map((project, index) => {
            const githubHref = project.isPlaceholderLink
              ? profile.githubUrl
              : project.githubUrl;

            return (
              <Reveal key={project.id} delayMs={index * 60}>
                <article
                  className={`flex h-full flex-col justify-between rounded-2xl border p-6 transition-colors hover:border-blue-500/50 dark:hover:border-blue-400/50 ${
                    project.isPlaceholderProject
                      ? "border-dashed border-slate-300 bg-slate-50/60 dark:border-slate-700 dark:bg-slate-900/35"
                      : "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/60"
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <span className="font-mono text-xs font-medium text-blue-700 dark:text-blue-400">
                        {project.category}
                      </span>
                      <div className="flex items-center gap-2">
                        {project.isPlaceholderProject && (
                          <span className="rounded-full border border-slate-300 bg-slate-100 px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                            {projects.placeholderBadgeLabel}
                          </span>
                        )}
                        <span
                          aria-hidden="true"
                          className="font-mono text-xs text-slate-500 dark:text-slate-400"
                        >
                          0{index + 1}
                        </span>
                      </div>
                    </div>

                    <h3 className="mt-2.5 text-lg font-semibold tracking-tight text-slate-950 dark:text-white">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {project.description}
                    </p>

                    <ul
                      aria-label={`Technologies used in ${project.title}`}
                      className="mt-5 flex flex-wrap gap-2"
                    >
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-md border border-blue-200/80 bg-blue-50/70 px-2.5 py-1 font-mono text-[11px] font-medium text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-slate-200/80 pt-4 dark:border-slate-800/80">
                    <a
                      href={githubHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={
                        project.isPlaceholderLink
                          ? "Placeholder link — replace githubUrl in src/data/portfolio.ts"
                          : `View ${project.title} on GitHub`
                      }
                      className="inline-flex items-center gap-2 rounded-md py-1 text-sm font-medium text-slate-700 transition-colors hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:text-slate-200 dark:hover:text-blue-400 dark:focus-visible:outline-blue-400"
                    >
                      <GitHubIcon className="h-4 w-4 shrink-0" />
                      <span>
                        {project.isPlaceholderLink
                          ? projects.placeholderLinkLabel
                          : projects.liveLinkLabel}
                      </span>
                      <ArrowUpRightIcon className="h-4 w-4 shrink-0" />
                    </a>

                    {project.liveDemoUrl &&
                      (project.isLiveDemoPlaceholder ? (
                        <span
                          title="Placeholder link — replace liveDemoUrl and set isLiveDemoPlaceholder to false in src/data/portfolio.ts"
                          className="inline-flex items-center gap-1.5 py-1 text-sm font-medium text-slate-600 dark:text-slate-400"
                        >
                          <span>{projects.placeholderDemoLabel}</span>
                        </span>
                      ) : (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-md py-1 text-sm font-medium text-blue-700 transition-colors hover:text-blue-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:text-blue-400 dark:hover:text-blue-300 dark:focus-visible:outline-blue-400"
                        >
                          <span>{projects.liveDemoLabel}</span>
                          <ArrowUpRightIcon className="h-4 w-4 shrink-0" />
                        </a>
                      ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {hasPlaceholders && (
          <p className="mt-6 text-xs text-slate-600 dark:text-slate-400">
            {projects.placeholderNote}
          </p>
        )}
      </div>
    </section>
  );
}
