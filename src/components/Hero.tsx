import { portfolioData } from "@/data/portfolio";
import {
  ArrowRightIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
} from "./Icons";

export function Hero() {
  const { hero, profile } = portfolioData;

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800/80"
    >
      {/* Subtle single-accent radial ambient backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-24 -z-10 mx-auto h-96 max-w-3xl rounded-full bg-blue-600/10 blur-3xl dark:bg-blue-500/12"
      />

      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 text-xs font-medium text-blue-700 dark:border-blue-500/25 dark:bg-blue-500/10 dark:text-blue-300">
            <MapPinIcon className="h-3.5 w-3.5 shrink-0" />
            <span>{hero.eyebrow}</span>
          </div>

          <p className="mt-7 font-mono text-sm font-medium text-blue-700 dark:text-blue-400">
            {hero.greeting}
          </p>

          <h1
            id="hero-heading"
            className="mt-2 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl dark:text-white"
          >
            {profile.name}
          </h1>

          <p className="mt-4 text-xl font-medium tracking-tight text-slate-700 sm:text-2xl dark:text-slate-200">
            {profile.title}
          </p>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
            {hero.summary}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3.5">
            <a
              href={profile.resumePath}
              download
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:focus-visible:outline-blue-400"
            >
              <DownloadIcon className="h-4 w-4" />
              <span>{profile.resumeLabel}</span>
            </a>

            <a
              href={hero.primaryCta.href}
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-900 transition-colors hover:border-blue-600/50 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-blue-400/50 dark:hover:text-blue-400 dark:focus-visible:outline-blue-400"
            >
              <span>{hero.primaryCta.label}</span>
              <ArrowRightIcon className="h-4 w-4" />
            </a>

            <a
              href={hero.secondaryCta.href}
              className="inline-flex h-11 items-center rounded-lg px-4 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white dark:focus-visible:outline-blue-400"
            >
              {hero.secondaryCta.label}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-5 border-t border-slate-200/80 pt-6 text-sm text-slate-600 dark:border-slate-800/80 dark:text-slate-400">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md py-1 font-medium transition-colors hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:hover:text-blue-400 dark:focus-visible:outline-blue-400"
            >
              <GitHubIcon className="h-4 w-4" />
              <span>GitHub</span>
            </a>

            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md py-1 font-medium transition-colors hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:hover:text-blue-400 dark:focus-visible:outline-blue-400"
            >
              <LinkedInIcon className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-md py-1 font-medium transition-colors hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:hover:text-blue-400 dark:focus-visible:outline-blue-400"
            >
              <MailIcon className="h-4 w-4" />
              <span>{profile.email}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
