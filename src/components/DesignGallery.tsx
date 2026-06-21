"use client";

import { useEffect, useRef, useState } from "react";
import { figma } from "@/data/portfolio";
import { FadeIn } from "./ui/FadeIn";
import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./ui/SectionHeader";

export function FigmaEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative aspect-video w-full overflow-hidden rounded-xl bg-[#1a1a2e]">
      {!shouldLoad ? (
        <div className="flex h-full items-center justify-center">
          <p className="text-sm text-[var(--color-text-muted)]">Loading prototype…</p>
        </div>
      ) : (
        <iframe
          title="Figma prototype"
          src={figma.embedUrl}
          className="h-full w-full border-0"
          allowFullScreen
        />
      )}
    </div>
  );
}

export function DesignGallery() {
  return (
    <section id="design" className="section-padding">
      <div className="container-wide">
        <SectionHeader
          label="Design"
          title={figma.title}
          description={figma.description}
        />

        <FadeIn>
          <GlassCard strong className="overflow-hidden p-4 md:p-6">
            <FigmaEmbed />
            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-[var(--color-text-muted)]">
                Click through the interactive prototype
              </p>
              <a
                href={figma.openUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[var(--color-accent)] transition-colors hover:text-white"
              >
                Open in Figma →
              </a>
            </div>
          </GlassCard>
        </FadeIn>
      </div>
    </section>
  );
}
