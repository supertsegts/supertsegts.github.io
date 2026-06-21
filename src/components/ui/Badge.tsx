import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  variant?: "default" | "accent" | "success" | "warning";
};

const variants = {
  default: "bg-white/5 text-[var(--color-text-muted)] border-white/10",
  accent: "bg-[var(--color-accent-soft)] text-[var(--color-accent)] border-[var(--color-accent)]/20",
  success: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  warning: "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

export function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
