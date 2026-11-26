import { portfolioData } from "@/data/portfolio";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

export function Footer() {
  const { footer, profile } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/80 bg-slate-50/50 dark:border-slate-800/80 dark:bg-slate-900/25">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-slate-600 sm:flex-row sm:px-6 lg:px-8 dark:text-slate-400">
        <div className="text-center sm:text-left">
          <p className="font-medium text-slate-900 dark:text-slate-200">
            © {currentYear} {profile.name}
          </p>
          <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-400">
            {footer.builtWith}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-slate-200/60 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-blue-400 dark:focus-visible:outline-blue-400"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>

          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-slate-200/60 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-blue-400 dark:focus-visible:outline-blue-400"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>

          <a
            href={`mailto:${profile.email}`}
            aria-label="Send email"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-slate-200/60 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-blue-400 dark:focus-visible:outline-blue-400"
          >
            <MailIcon className="h-4 w-4" />
          </a>

          <a
            href="#top"
            className="ml-1 rounded-md px-2 py-1 text-xs font-medium text-slate-700 transition-colors hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-slate-300 dark:hover:text-blue-400 dark:focus-visible:outline-blue-400"
          >
            {footer.backToTopLabel} ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
