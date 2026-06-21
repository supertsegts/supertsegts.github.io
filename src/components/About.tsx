import { about } from "@/data/portfolio";
import { FadeIn } from "./ui/FadeIn";
import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./ui/SectionHeader";

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-wide">
        <SectionHeader label="About" title={about.heading} />

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
          <FadeIn className="lg:col-span-3" delay={0.1}>
            <div className="space-y-5 text-lg leading-relaxed text-[var(--color-text-muted)]">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </FadeIn>

          <FadeIn className="lg:col-span-2" delay={0.2}>
            <GlassCard strong className="p-6">
              <dl className="grid grid-cols-2 gap-6">
                {about.highlights.map((item) => (
                  <div key={item.label}>
                    <dt className="text-xs font-medium uppercase tracking-wider text-[var(--color-text-muted)]">
                      {item.label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-[var(--color-text)]">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </GlassCard>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
