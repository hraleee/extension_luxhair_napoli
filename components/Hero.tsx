import Link from "next/link";
import { ArrowRightIcon, InstagramIcon } from "@/components/icons";

const INSTAGRAM_URL = "https://www.instagram.com/extension_luxhair_napoli/";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/hero.svg)" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/45 to-background"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 pt-32 pb-20 md:px-8 md:pt-40 md:pb-28">
        <div className="max-w-3xl">
          <p className="flex items-center gap-3 text-[0.7rem] font-medium tracking-[0.4em] text-gold-400 uppercase">
            <span className="h-px w-10 bg-gold-500" />
            Extension Capelli · Napoli
          </p>

          <h1 className="mt-6 font-display text-5xl leading-[1.05] font-medium text-ink-100 sm:text-6xl md:text-7xl">
            Capelli lunghi,
            <br />
            <span className="text-gold-300 italic">folti e naturali.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-300">
            Extension invisibili ad effetto naturale, realizzate con capelli
            slavi di altissima qualità. Personalizzo ogni ciocca sulla struttura
            dei tuoi capelli per un risultato impeccabile.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#servizi"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-gold-500 px-8 text-[0.8rem] font-semibold tracking-[0.2em] text-background uppercase transition-colors hover:bg-gold-400"
            >
              Scopri i servizi
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-full border border-ink-500/40 px-8 text-[0.8rem] font-semibold tracking-[0.2em] text-ink-100 uppercase transition-colors hover:border-gold-500 hover:text-gold-300"
            >
              <InstagramIcon className="h-4 w-4" />
              Scrivici in DM
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid max-w-lg grid-cols-3 divide-x divide-line">
            <div className="pr-6">
              <p className="font-display text-4xl font-medium text-gold-300 md:text-5xl">
                +100
              </p>
              <p className="mt-1 text-[0.7rem] tracking-[0.18em] text-ink-500 uppercase">
                Clienti soddisfatti
              </p>
            </div>
            <div className="px-6">
              <p className="font-display text-4xl font-medium text-gold-300 md:text-5xl">
                100%
              </p>
              <p className="mt-1 text-[0.7rem] tracking-[0.18em] text-ink-500 uppercase">
                Capelli naturali slavi
              </p>
            </div>
            <div className="pl-6">
              <p className="font-display text-4xl font-medium text-gold-300 md:text-5xl">
                Da 0
              </p>
              <p className="mt-1 text-[0.7rem] tracking-[0.18em] text-ink-500 uppercase">
                Corsi a livello PRO
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#chi-sono"
        aria-label="Scorri in basso"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink-500 transition-colors hover:text-gold-300 md:flex"
      >
        <span className="text-[0.6rem] tracking-[0.35em] uppercase">Scorri</span>
        <span className="h-10 w-px animate-pulse bg-gradient-to-b from-gold-500 to-transparent" />
      </a>
    </section>
  );
}
