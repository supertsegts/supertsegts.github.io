"use client";

import { contact, site } from "@/data/portfolio";
import { FadeIn } from "./ui/FadeIn";
import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./ui/SectionHeader";

function EmailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}

/** Assembled only on click so scrapers don't see a plain mailto address in the HTML. */
function getEmailAddress() {
  const local = "4170stgest".split("").reverse().join("");
  const domain = "moc.liamg".split("").reverse().join("");
  return `${local}@${domain}`;
}

export function Contact() {
  function handleEmailClick() {
    window.location.href = `mailto:${getEmailAddress()}`;
  }

  return (
    <section id="contact" className="section-padding bg-[var(--color-bg-elevated)]">
      <div className="container-wide">
        <SectionHeader
          label="Contact"
          title={contact.heading}
          description={contact.description}
          align="center"
        />

        <FadeIn className="mx-auto max-w-xl">
          <GlassCard strong className="p-8 text-center">
            <p className="text-lg text-[var(--color-text-muted)]">
              The fastest way to reach me:
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <button
                type="button"
                onClick={handleEmailClick}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] bg-white/5 px-6 py-3 text-sm font-medium text-[var(--color-text)] transition-all hover:border-[var(--color-accent)]/30 hover:bg-[var(--color-accent-soft)]"
              >
                <EmailIcon />
                {contact.emailButtonLabel}
              </button>
            </div>
          </GlassCard>
        </FadeIn>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] px-6 py-8 md:px-10">
      <div className="container-wide flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-[var(--color-text-muted)]">
          © {new Date().getFullYear()} {site.name}. Built with Next.js.
        </p>
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
        >
          @{site.githubUsername}
        </a>
      </div>
    </footer>
  );
}
