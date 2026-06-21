import { skills } from "@/data/portfolio";
import { FadeIn } from "./ui/FadeIn";
import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./ui/SectionHeader";

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-[var(--color-bg-elevated)]">
      <div className="container-wide">
        <SectionHeader
          label="Skills"
          title="What I work with"
          description="A blend of systems programming, machine learning curiosity, and design craft."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <FadeIn key={group.category} delay={i * 0.08}>
              <GlassCard className="h-full p-6 transition-colors hover:bg-white/[0.06]">
                <h3 className="text-sm font-medium uppercase tracking-wider text-[var(--color-accent)]">
                  {group.category}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-[var(--color-border)] bg-white/[0.03] px-3 py-1.5 text-sm text-[var(--color-text)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
