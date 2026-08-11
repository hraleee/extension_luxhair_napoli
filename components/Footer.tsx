import Link from "next/link";
import { InstagramIcon } from "@/components/icons";

const footerLinks = [
  { label: "Chi sono", href: "#chi-sono" },
  { label: "Servizi", href: "#servizi" },
  { label: "Corsi", href: "#corsi" },
  { label: "Galleria", href: "#galleria" },
  { label: "Contatti", href: "#contatti" },
];

const INSTAGRAM_URL = "https://www.instagram.com/extension_luxhair_napoli/";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-background">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="flex flex-col items-center gap-10">
          <Link
            href="#home"
            className="group flex flex-col items-center leading-none"
            aria-label="LuxHair Napoli - home"
          >
            <span className="font-display text-3xl tracking-[0.28em] text-ink-100 uppercase">
              Lux<span className="text-gold-400">Hair</span>
            </span>
            <span className="mt-1.5 text-[0.6rem] tracking-[0.42em] text-ink-500 uppercase">
              Napoli
            </span>
          </Link>

          <nav aria-label="Link del footer">
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[0.7rem] font-medium tracking-[0.22em] text-ink-500 uppercase transition-colors hover:text-gold-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-gold-400 transition-colors hover:border-gold-500/50 hover:bg-gold-500/10"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
        </div>

        <div className="mt-12 flex flex-col items-center gap-2 border-t border-line pt-8 text-center">
          <p className="text-xs text-ink-500">
            © {new Date().getFullYear()} LuxHair Napoli · Extension Capelli e
            Corsi
          </p>
          <p className="text-xs text-ink-500/60">
            Extension capelli Napoli · Corsi da zero a PRO
          </p>
        </div>
      </div>
    </footer>
  );
}
