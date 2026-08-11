import type { ComponentType, SVGProps } from "react";
import SectionHeading from "@/components/SectionHeading";
import {
  DiamondIcon,
  HeartIcon,
  SparklesIcon,
  WavesIcon,
} from "@/components/icons";

interface Service {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: WavesIcon,
    title: "Extension Invisibili",
    description:
      "Extension ad effetto naturale e impercettibile, applicate per dare lunghezza e volume in poche ore.",
  },
  {
    icon: SparklesIcon,
    title: "Personalizzazione",
    description:
      "Selezione individuale delle ciocche in base alla struttura e al colore dei tuoi capelli, per un risultato armonioso.",
  },
  {
    icon: DiamondIcon,
    title: "Capelli Naturali Slavi",
    description:
      "Solo materiali di altissima qualità: capelli slavi naturali, morbidi e brillanti, selezionati a mano.",
  },
  {
    icon: HeartIcon,
    title: "Manutenzione e Ritocco",
    description:
      "Cura costante nel tempo delle tue extension, con ritocchi e manutenzione per mantenere sempre la perfezione.",
  },
];

export default function Services() {
  return (
    <section id="servizi" className="scroll-mt-24 bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Servizi"
          title="Il tuo nuovo look, su misura"
          description="Dal trattamento singolo alla trasformazione completa: ogni servizio è studiato per valorizzare la tua bellezza."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-2xl border border-line bg-elevated p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/50"
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold-500/40 text-gold-400 transition-colors group-hover:bg-gold-500/10">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-xl font-medium text-ink-100">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
