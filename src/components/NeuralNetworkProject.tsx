import { neuralNetworkProject, type ExperimentResult } from "@/data/portfolio";
import { Badge } from "./ui/Badge";
import { FadeIn } from "./ui/FadeIn";
import { GlassCard } from "./ui/GlassCard";

const resultVariant: Record<ExperimentResult, "success" | "warning" | "default"> = {
  best: "success",
  warning: "warning",
  neutral: "default",
};

function LossBar({ loss, result }: { loss: string; result: ExperimentResult }) {
  const numericLoss = parseFloat(loss);
  const width = Math.max(8, Math.min(100, (1 - numericLoss) * 100));

  const barColor =
    result === "best"
      ? "bg-emerald-400"
      : result === "warning"
        ? "bg-amber-400"
        : "bg-[var(--color-accent)]";

  return (
    <div className="mt-3">
      <div className="flex items-center justify-between text-xs">
        <span className="text-[var(--color-text-muted)]">Loss</span>
        <span className="font-mono font-medium text-[var(--color-text)]">{loss}</span>
      </div>
      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/5">
        <div
          className={`h-full rounded-full transition-all ${barColor}`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export function NeuralNetworkProject() {
  return (
    <FadeIn delay={0.1}>
      <GlassCard className="p-8 lg:p-10">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="mb-4 flex flex-wrap gap-2">
              {neuralNetworkProject.tech.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
            <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {neuralNetworkProject.title}
            </h3>
            <p className="mt-1 text-[var(--color-accent)]">{neuralNetworkProject.tagline}</p>
          </div>
          <time className="text-sm text-[var(--color-text-muted)]">
            {neuralNetworkProject.date}
          </time>
        </div>

        <p className="mt-4 max-w-3xl leading-relaxed text-[var(--color-text-muted)]">
          {neuralNetworkProject.description}
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {neuralNetworkProject.experiments.map((exp) => {
            const result = exp.result as ExperimentResult;
            return (
            <div
              key={`${exp.dataset}-${exp.config}`}
              className="rounded-xl border border-[var(--color-border)] bg-white/[0.02] p-5"
            >
              <div className="flex items-center justify-between gap-2">
                <h4 className="font-medium text-[var(--color-text)]">{exp.dataset}</h4>
                <Badge variant={resultVariant[result]}>
                  {result === "best" ? "Best run" : result === "warning" ? "Overfit" : "Partial"}
                </Badge>
              </div>
              <p className="mt-1 font-mono text-xs text-[var(--color-text-muted)]">
                {exp.config}
              </p>
              <LossBar loss={exp.loss} result={result} />
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                {exp.insight}
              </p>
            </div>
            );
          })}
        </div>

        <div className="mt-8 rounded-xl border border-[var(--color-accent)]/20 bg-[var(--color-accent-soft)] p-5">
          <p className="text-sm font-medium text-[var(--color-accent)]">Key takeaways</p>
          <ul className="mt-3 space-y-2">
            {neuralNetworkProject.takeaways.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </GlassCard>
    </FadeIn>
  );
}
