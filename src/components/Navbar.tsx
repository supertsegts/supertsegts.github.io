"use client";

import { useEffect, useState } from "react";
import { navLinks, site } from "@/data/portfolio";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#"
          className="text-sm font-semibold tracking-tight text-[var(--color-text)] transition-opacity hover:opacity-80"
        >
          {site.name.split(" ")[0]}
          <span className="text-[var(--color-accent)]">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-[var(--color-accent)] px-5 py-2 text-sm font-medium text-white transition-all hover:bg-[#4a7de0] hover:shadow-lg hover:shadow-[var(--color-accent-glow)] md:inline-flex"
        >
          Get in touch
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border)] md:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 bg-[var(--color-text)] transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-[var(--color-text)] transition-opacity ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-[var(--color-text)] transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </nav>

      {menuOpen && (
        <div className="glass-strong border-t border-[var(--color-border)] px-6 py-6 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-lg text-[var(--color-text-muted)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-white"
              >
                Get in touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
