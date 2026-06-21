import { beAliveProject } from "@/data/portfolio";
import { Badge } from "./ui/Badge";
import { FadeIn } from "./ui/FadeIn";
import { GlassCard } from "./ui/GlassCard";

function GamePreview() {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#0a1628] via-[#0d2137] to-[#1a3a2a]">
      <div className="absolute inset-0 opacity-30">
        <svg className="h-full w-full" viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="pixel-grid" width="16" height="16" patternUnits="userSpaceOnUse">
              <rect width="16" height="16" fill="none" stroke="rgba(255,255,255,0.03)" />
            </pattern>
          </defs>
          <rect width="400" height="225" fill="url(#pixel-grid)" />
          <ellipse cx="200" cy="280" rx="180" ry="80" fill="#2d5a3d" opacity="0.6" />
          <ellipse cx="200" cy="300" rx="160" ry="60" fill="#3d7a4d" opacity="0.4" />
          <circle cx="120" cy="140" r="8" fill="#5a8f5a" />
          <circle cx="280" cy="130" r="10" fill="#4a7f4a" />
          <circle cx="200" cy="120" r="6" fill="#6aaf6a" />
          <rect x="185" y="155" width="30" height="40" rx="4" fill="#e8c49a" />
          <rect x="180" y="145" width="40" height="15" rx="3" fill="#8b5e3c" />
        </svg>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <p className="text-4xl font-bold tracking-wider text-white/90">BE ALIVE</p>
          <p className="mt-1 text-sm text-white/50">Island Survival</p>
        </div>
      </div>
      <div className="absolute bottom-3 left-3 flex gap-2">
        <span className="rounded bg-black/50 px-2 py-0.5 text-xs text-amber-300">Day 3</span>
        <span className="rounded bg-black/50 px-2 py-0.5 text-xs text-red-300">HP 78</span>
      </div>
    </div>
  );
}

export function BeAliveProject() {
  return (
    <FadeIn>
      <GlassCard strong className="overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <div className="p-8 lg:p-10">
            <div className="mb-4 flex flex-wrap gap-2">
              {beAliveProject.tech.map((t) => (
                <Badge key={t} variant="accent">
                  {t}
                </Badge>
              ))}
            </div>

            <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">
              {beAliveProject.title}
              <span className="ml-2 text-[var(--color-text-muted)]">
                — {beAliveProject.subtitle}
              </span>
            </h3>

            <p className="mt-2 text-[var(--color-accent)]">{beAliveProject.tagline}</p>
            <p className="mt-4 leading-relaxed text-[var(--color-text-muted)]">
              {beAliveProject.description}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {beAliveProject.metrics.map((m) => (
                <div key={m.label}>
                  <p className="text-2xl font-semibold text-[var(--color-text)]">{m.value}</p>
                  <p className="text-xs text-[var(--color-text-muted)]">{m.label}</p>
                </div>
              ))}
            </div>

            <a
              href={beAliveProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] transition-colors hover:text-white"
            >
              View source on GitHub
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path
                  d="M3 10L10 3M10 3H5M10 3V8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          <div className="border-t border-[var(--color-border)] bg-black/20 p-6 lg:border-t-0 lg:border-l">
            <GamePreview />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {beAliveProject.features.map((feature, i) => (
                <div
                  key={feature.title}
                  className="rounded-xl border border-[var(--color-border)] bg-white/[0.02] p-4"
                >
                  <p className="text-xs font-medium text-[var(--color-accent)]">
                    0{i + 1}
                  </p>
                  <p className="mt-1 font-medium text-[var(--color-text)]">{feature.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </GlassCard>
    </FadeIn>
  );
}
