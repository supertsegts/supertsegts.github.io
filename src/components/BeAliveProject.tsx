import Image from "next/image";
import { beAliveProject } from "@/data/portfolio";
import { Badge } from "./ui/Badge";
import { FadeIn } from "./ui/FadeIn";
import { GlassCard } from "./ui/GlassCard";

function GamePreview() {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">
      <Image
        src="/images/be-alive/screenshot.png"
        alt={`${beAliveProject.title} gameplay screenshot`}
        fill
        className="object-cover object-center"
        sizes="(max-width: 1024px) 100vw, 50vw"
        priority
      />
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

            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
              {beAliveProject.metrics.map((m) => (
                <div key={m.label} className="min-w-0">
                  <p className="text-2xl font-semibold tabular-nums text-[var(--color-text)]">
                    {m.value}
                  </p>
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
