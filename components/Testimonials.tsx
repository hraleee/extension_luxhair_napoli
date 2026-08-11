import SectionHeading from "@/components/SectionHeading";
import { DiamondIcon } from "@/components/icons";

const testimonials = [
  {
    quote:
      "Finalmente ho i capelli che ho sempre sognato: lunghi, folti e naturalissimi. Nessuno si accorge che sono extension, le applicazioni sono perfette.",
    name: "Cliente 1",
    role: "Extension invisibile",
  },
  {
    quote:
      "Ho seguito il corso da zero e oggi lavoro come professionista. Spiegazioni chiare, tanta pratica e supporto anche dopo. Consigliatissimo!",
    name: "Cliente 2",
    role: "Corso extension",
  },
  {
    quote:
      "Professionalità e cura dei dettagli senza pari. Le mie extension sono perfette, la qualità dei capelli è visibilmente superiore.",
    name: "Cliente 3",
    role: "Manutenzione e ritocco",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Testimonianze"
          title="La fiducia delle nostre clienti"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-line bg-elevated p-8"
            >
              <DiamondIcon className="h-6 w-6 text-gold-500/70" />
              <blockquote className="mt-5 flex-1 text-[0.95rem] leading-relaxed text-ink-300">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-7 border-t border-line pt-5">
                <p className="font-display text-base font-medium text-ink-100">
                  {t.name}
                </p>
                <p className="mt-0.5 text-[0.65rem] tracking-[0.22em] text-gold-500 uppercase">
                  {t.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
