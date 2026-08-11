import SectionHeading from "@/components/SectionHeading";
import {
  ArrowRightIcon,
  InstagramIcon,
  MapPinIcon,
  PhoneIcon,
} from "@/components/icons";

const INSTAGRAM_URL = "https://www.instagram.com/extension_luxhair_napoli/";

export default function Contact() {
  return (
    <section id="contatti" className="scroll-mt-24 bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Contatti"
          title="Prenota la tua consulenza"
          description="Scrivici “INFO” in Direct su Instagram e ti risponderemo al più presto per fissare il tuo appuntamento."
        />

        <div className="mx-auto mt-16 max-w-3xl">
          <div className="grid gap-4 sm:grid-cols-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 rounded-2xl border border-line bg-elevated p-8 text-center transition-all hover:border-gold-500/50"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold-500/40 text-gold-400 transition-colors group-hover:bg-gold-500/10">
                <InstagramIcon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-ink-100">Instagram</p>
                <p className="mt-1 text-xs text-ink-500">
                  @extension_luxhair_napoli
                </p>
              </div>
            </a>

            <div className="flex flex-col items-center gap-4 rounded-2xl border border-line bg-elevated p-8 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold-500/40 text-gold-400">
                <MapPinIcon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-ink-100">Dove siamo</p>
                <p className="mt-1 text-xs text-ink-500">Napoli, Italia</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 rounded-2xl border border-line bg-elevated p-8 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold-500/40 text-gold-400">
                <PhoneIcon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-ink-100">Contatti</p>
                <p className="mt-1 text-xs text-ink-500">Via Direct Instagram</p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-gold-500 px-9 text-[0.8rem] font-semibold tracking-[0.2em] text-background uppercase transition-colors hover:bg-gold-400"
            >
              Scrivici “INFO” in DM
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
