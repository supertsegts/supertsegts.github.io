"use client";

import { motion } from "framer-motion";
import { site } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" />

      <div className="section-padding container-wide relative z-10 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/5 px-4 py-1.5 text-sm text-[var(--color-text-muted)]">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to internships & collaborations
          </p>

          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
            <span className="gradient-text">{site.name}</span>
          </h1>

          <p className="mt-6 text-xl font-medium text-[var(--color-text)] md:text-2xl">
            {site.tagline}
          </p>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-text-muted)] md:text-xl">
            {site.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-7 py-3.5 text-sm font-medium text-white transition-all hover:bg-[#4a7de0] hover:shadow-xl hover:shadow-[var(--color-accent-glow)]"
            >
              View my work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-strong)] bg-white/5 px-7 py-3.5 text-sm font-medium text-[var(--color-text)] transition-all hover:bg-white/10"
            >
              GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 md:block"
        >
          <a
            href="#about"
            aria-label="Scroll to about"
            className="flex flex-col items-center gap-2 text-[var(--color-text-muted)]"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="block h-8 w-5 rounded-full border border-[var(--color-border-strong)] p-1"
            >
              <span className="block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] mx-auto" />
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
