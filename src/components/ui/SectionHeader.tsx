import { FadeIn } from "./FadeIn";

type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <FadeIn className={`mb-12 max-w-2xl ${alignClass}`}>
      <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[var(--color-accent)]">
        {label}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-text)] md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-[var(--color-text-muted)]">
          {description}
        </p>
      )}
    </FadeIn>
  );
}
