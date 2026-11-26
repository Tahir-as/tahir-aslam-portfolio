"use client";

import { useState, type FormEvent } from "react";
import { portfolioData } from "@/data/portfolio";
import {
  ArrowUpRightIcon,
  CheckCircleIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
} from "./Icons";
import { Reveal } from "./Reveal";

type FormStatus =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "success"; message: string }
  | { state: "error"; message: string };

export function Contact() {
  const { contact, profile } = portfolioData;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // Honeypot field for spam bots
  const [status, setStatus] = useState<FormStatus>({ state: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status.state === "submitting") return;

    setStatus({ state: "submitting" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, website }),
      });

      const data = (await response.json()) as {
        ok?: boolean;
        message?: string;
        error?: string;
      };

      if (!response.ok || !data.ok) {
        setStatus({
          state: "error",
          message:
            data.error ||
            "Unable to send your message right now. Please try emailing directly.",
        });
        return;
      }

      setName("");
      setEmail("");
      setMessage("");
      setWebsite("");
      setStatus({
        state: "success",
        message: data.message || "Thank you! Your message has been sent.",
      });
    } catch {
      setStatus({
        state: "error",
        message:
          "Network error while sending your message. Please email directly instead.",
      });
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-20 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-blue-700 dark:text-blue-400">
            {contact.index} / {contact.eyebrow}
          </p>
          <h2
            id="contact-heading"
            className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl dark:text-white"
          >
            {contact.heading}
          </h2>
          <p className="mt-3 max-w-2xl text-base text-slate-600 dark:text-slate-300">
            {contact.description}
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-12">
            {/* Direct contact info */}
            <div className="space-y-4 lg:col-span-5">
              <h3 className="text-sm font-semibold tracking-tight text-slate-950 dark:text-white">
                {contact.directHeading}
              </h3>

              <div className="space-y-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-blue-500/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-blue-400/50 dark:focus-visible:outline-blue-400"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400">
                      <MailIcon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-medium text-slate-500 dark:text-slate-400">
                        Email
                      </span>
                      <span className="block truncate text-sm font-semibold text-slate-950 dark:text-slate-100">
                        {profile.email}
                      </span>
                    </span>
                  </span>
                  <ArrowUpRightIcon className="h-4 w-4 shrink-0 text-slate-400" />
                </a>

                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-blue-500/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-blue-400/50 dark:focus-visible:outline-blue-400"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400">
                      <LinkedInIcon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-medium text-slate-500 dark:text-slate-400">
                        LinkedIn
                      </span>
                      <span className="block truncate text-sm font-semibold text-slate-950 dark:text-slate-100">
                        in/tahir-aslam-9a621131a
                      </span>
                    </span>
                  </span>
                  <ArrowUpRightIcon className="h-4 w-4 shrink-0 text-slate-400" />
                </a>

                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-blue-500/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-blue-400/50 dark:focus-visible:outline-blue-400"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400">
                      <GitHubIcon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-medium text-slate-500 dark:text-slate-400">
                        GitHub
                      </span>
                      <span className="block truncate text-sm font-semibold text-slate-950 dark:text-slate-100">
                        github.com/Tahir-as
                      </span>
                    </span>
                  </span>
                  <ArrowUpRightIcon className="h-4 w-4 shrink-0 text-slate-400" />
                </a>

                <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-slate-900/40">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-200/70 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                    <MapPinIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="block text-xs font-medium text-slate-500 dark:text-slate-400">
                      Location
                    </span>
                    <span className="block text-sm font-semibold text-slate-950 dark:text-slate-100">
                      {profile.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 lg:col-span-7 dark:border-slate-800 dark:bg-slate-900/60">
              <h3 className="text-sm font-semibold tracking-tight text-slate-950 dark:text-white">
                {contact.formHeading}
              </h3>

              <form onSubmit={handleSubmit} className="mt-5 space-y-5" noValidate>
                {/* Honeypot anti-spam field */}
                <div className="sr-only" aria-hidden="true">
                  <label htmlFor="contact-website">Website</label>
                  <input
                    id="contact-website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={website}
                    onChange={(event) => setWebsite(event.target.value)}
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-200"
                    >
                      {contact.fields.nameLabel}
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      minLength={2}
                      maxLength={100}
                      autoComplete="name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      placeholder={contact.fields.namePlaceholder}
                      className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-950 placeholder:text-slate-500 transition-colors focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-400 dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-200"
                    >
                      {contact.fields.emailLabel}
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      maxLength={150}
                      autoComplete="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder={contact.fields.emailPlaceholder}
                      className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-950 placeholder:text-slate-500 transition-colors focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-400 dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-200"
                  >
                    {contact.fields.messageLabel}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    minLength={10}
                    maxLength={2000}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder={contact.fields.messagePlaceholder}
                    className="mt-1.5 block w-full resize-y rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-950 placeholder:text-slate-500 transition-colors focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-400 dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    disabled={status.state === "submitting"}
                    className="inline-flex h-11 items-center justify-center rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:cursor-not-allowed disabled:opacity-60 dark:focus-visible:outline-blue-400"
                  >
                    {status.state === "submitting"
                      ? contact.fields.submittingLabel
                      : contact.fields.submitLabel}
                  </button>
                </div>

                <div aria-live="polite" className="min-h-6">
                  {status.state === "success" && (
                    <p className="flex items-start gap-2 rounded-lg border border-blue-200 bg-blue-50 px-3.5 py-2.5 text-sm text-blue-800 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-200">
                      <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0" />
                      <span>{status.message}</span>
                    </p>
                  )}

                  {status.state === "error" && (
                    <p
                      role="alert"
                      className="rounded-lg border border-red-300 bg-red-50 px-3.5 py-2.5 text-sm text-red-800 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-200"
                    >
                      {status.message}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
