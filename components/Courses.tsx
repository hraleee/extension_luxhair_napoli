import Image from "next/image";
import { ArrowRightIcon } from "@/components/icons";

const coursePoints = [
  "Percorso completo da zero a professionista",
  "Tecniche di applicazione passo dopo passo",
  "Materiali e capelli inclusi nel corso",
  "Supporto anche dopo il corso",
  "Certificato di partecipazione",
];

const INSTAGRAM_URL = "https://www.instagram.com/extension_luxhair_napoli/";

export default function Courses() {
  return (
    <section id="corsi" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
        <div className="order-2 lg:order-1">
          <p className="text-[0.7rem] font-medium tracking-[0.4em] text-gold-500 uppercase">
            Corsi
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium text-ink-100 md:text-5xl">
            Da zero a <span className="text-gold-300 italic">PRO</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-300">
            Impara l&apos;arte dell&apos;extension capelli con un percorso pensato per
            chi parte da zero e vuole diventare un vero professionista. Teoria,
            pratica e segreti del mestiere con +100 clienti soddisfatti alle
            spalle.
          </p>

          <ul className="mt-8 space-y-4">
            {coursePoints.map((point) => (
              <li key={point} className="flex items-start gap-4">
                <span className="mt-1.5 flex h-2 w-2 shrink-0 rotate-45 bg-gold-500" />
                <span className="text-sm leading-relaxed text-ink-300">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex h-14 items-center justify-center gap-3 rounded-full bg-gold-500 px-8 text-[0.8rem] font-semibold tracking-[0.2em] text-background uppercase transition-colors hover:bg-gold-400"
          >
            Prenota il tuo posto
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-2xl border border-gold-500/20"
            />
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/course.svg"
                alt="Corso di extension capelli"
                width={900}
                height={1100}
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background/85 via-transparent to-transparent p-7">
                <div>
                  <p className="font-display text-2xl text-gold-300">
                    Corso Completo
                  </p>
                  <p className="mt-1 text-[0.7rem] tracking-[0.24em] text-ink-300 uppercase">
                    Teoria + Pratica + Certificato
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
