"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CloseIcon, InstagramIcon, MenuIcon } from "@/components/icons";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Chi sono", href: "#chi-sono" },
  { label: "Servizi", href: "#servizi" },
  { label: "Corsi", href: "#corsi" },
  { label: "Galleria", href: "#galleria" },
  { label: "Contatti", href: "#contatti" },
];

const INSTAGRAM_URL = "https://www.instagram.com/extension_luxhair_napoli/";

function Logo({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <Link
      href="#home"
      onClick={onNavigate}
      className="group flex flex-col items-center leading-none"
      aria-label="LuxHair Napoli - home"
    >
      <span className="font-display text-2xl tracking-[0.28em] text-ink-100 uppercase md:text-[1.7rem]">
        Lux<span className="text-gold-400">Hair</span>
      </span>
      <span className="mt-1 text-[0.55rem] tracking-[0.42em] text-ink-500 uppercase">
        Napoli
      </span>
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const leftLinks = navLinks.slice(0, 3);
  const rightLinks = navLinks.slice(3);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center px-5 md:h-20 md:px-8">
          {/* Mobile: hamburger + logo + instagram */}
          <div className="flex w-full items-center justify-between lg:hidden">
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Apri il menu"
              aria-expanded={open}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-gold-300 transition-colors hover:border-gold-500/50 hover:text-gold-200"
            >
              <MenuIcon className="h-5 w-5" />
            </button>

            <Logo />

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Apri Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-gold-300 transition-colors hover:border-gold-500/50 hover:text-gold-200"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
          </div>

          {/* Desktop: links left, logo center, links right */}
          <nav
            className="hidden w-full items-center lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-8"
            aria-label="Navigazione principale"
          >
            <ul className="flex items-center justify-start gap-8">
              {leftLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[0.8rem] font-medium tracking-[0.22em] text-ink-300 uppercase transition-colors hover:text-gold-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Logo />

            <ul className="flex items-center justify-end gap-8">
              {rightLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[0.8rem] font-medium tracking-[0.22em] text-ink-300 uppercase transition-colors hover:text-gold-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Backdrop (chiude al click fuori) */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-50 bg-black/70 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Sidebar mobile */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Menu di navigazione"
        className={`fixed top-0 right-0 z-[60] flex h-full w-[85%] max-w-[340px] flex-col border-l border-line bg-surface shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <span className="font-display text-xl tracking-[0.24em] text-ink-100 uppercase">
            Menu
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Chiudi il menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-gold-300 transition-colors hover:border-gold-500/50 hover:text-gold-200"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 py-6" aria-label="Navigazione mobile">
          <ul className="flex flex-col divide-y divide-line/60">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-4 text-[0.85rem] font-medium tracking-[0.24em] text-ink-300 uppercase transition-colors hover:text-gold-300"
                >
                  {link.label}
                  <span className="text-gold-500/60">›</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-line px-6 py-6">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex h-12 w-full items-center justify-center gap-3 rounded-full border border-gold-500/40 text-[0.8rem] font-medium tracking-[0.22em] text-gold-300 uppercase transition-colors hover:bg-gold-500/10"
          >
            <InstagramIcon className="h-4 w-4" />
            Seguici su Instagram
          </a>
        </div>
      </aside>
    </>
  );
}
