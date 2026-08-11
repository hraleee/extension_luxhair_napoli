import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { InstagramIcon } from "@/components/icons";

const galleryItems = [
  { src: "/images/gallery-1.svg", alt: "Trasformazione con extension capelli 1" },
  { src: "/images/gallery-2.svg", alt: "Trasformazione con extension capelli 2" },
  { src: "/images/gallery-3.svg", alt: "Trasformazione con extension capelli 3" },
  { src: "/images/gallery-4.svg", alt: "Trasformazione con extension capelli 4" },
  { src: "/images/gallery-5.svg", alt: "Trasformazione con extension capelli 5" },
  { src: "/images/gallery-6.svg", alt: "Trasformazione con extension capelli 6" },
];

const INSTAGRAM_URL = "https://www.instagram.com/extension_luxhair_napoli/";

export default function Gallery() {
  return (
    <section id="galleria" className="scroll-mt-24 bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Galleria"
          title="Prima e dopo"
          description="Guarda i risultati reali delle trasformazioni. Seguici su Instagram per vedere tutti i nostri lavori."
        />

        <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.src}
              className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-line"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <div className="absolute inset-0 flex items-end justify-between p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-[0.65rem] tracking-[0.22em] text-ink-100 uppercase">
                  Prima / Dopo
                </span>
                <InstagramIcon className="h-4 w-4 text-gold-300" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-gold-500/40 px-8 py-3.5 text-[0.8rem] font-semibold tracking-[0.2em] text-gold-300 uppercase transition-colors hover:bg-gold-500/10"
          >
            <InstagramIcon className="h-4 w-4" />
            Scopri altri lavori su Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
