import Image from "next/image";
import { DiamondIcon } from "@/components/icons";

const highlights = [
  "Capelli naturali slavi di altissima qualità",
  "Selezione individuale delle ciocche",
  "Risultato invisibile e armonioso",
  "Approccio personalizzato e professionale",
];

export default function About() {
  return (
    <section id="chi-sono" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -inset-3 rounded-2xl border border-gold-500/20"
          />
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/images/about.svg"
              alt="Extension capelli ad effetto naturale"
              width={900}
              height={1100}
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-xl border border-line bg-elevated/95 px-6 py-5 backdrop-blur sm:block">
            <p className="font-display text-3xl font-medium text-gold-300">486+</p>
            <p className="mt-1 text-[0.65rem] tracking-[0.22em] text-ink-500 uppercase">
              Trasformazioni
            </p>
          </div>
        </div>

        <div>
          <p className="text-[0.7rem] font-medium tracking-[0.4em] text-gold-500 uppercase">
            Chi sono
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium text-ink-100 md:text-5xl">
            La bellezza inizia dai
            <span className="text-gold-300 italic"> dettagli.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-300">
            Nel mio studio a Napoli perfeziono la tua bellezza con cura e
            qualità. Utilizzo solo capelli naturali slavi della più alta
            qualità e seleziono le ciocche individualmente in base alla
            struttura dei tuoi capelli, affinché il risultato sia il più
            naturale e armonioso possibile.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-500">
            Ogni intervento è studiato su misura: professionalità, approccio
            personalizzato e risultati impeccabili.
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <DiamondIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                <span className="text-sm leading-relaxed text-ink-300">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-10 border-l-2 border-gold-500 pl-6">
            <p className="font-display text-lg text-ink-100 italic">
              “Convinzione e dedizione: la tua bellezza è il nostro biglietto
              da visita.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
