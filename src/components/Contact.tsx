import { contact, site } from "@/data/portfolio";
import { FadeIn } from "./ui/FadeIn";
import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./ui/SectionHeader";

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}

const icons = {
  github: GitHubIcon,
  email: EmailIcon,
};

export function Contact() {
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
              {contact.links.map((link) => {
                const Icon = icons[link.icon as keyof typeof icons];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.icon === "github" ? "_blank" : undefined}
                    rel={link.icon === "github" ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] bg-white/5 px-6 py-3 text-sm font-medium text-[var(--color-text)] transition-all hover:border-[var(--color-accent)]/30 hover:bg-[var(--color-accent-soft)]"
                  >
                    <Icon />
                    {link.label}
                  </a>
                );
              })}
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
