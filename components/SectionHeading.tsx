interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-[0.7rem] font-medium tracking-[0.4em] text-gold-500 uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-4xl font-medium text-ink-100 md:text-5xl">
        {title}
      </h2>
      <div className="mx-auto mt-6 flex items-center justify-center gap-3">
        <span className="h-px w-10 bg-gold-500/50" />
        <span className="h-1.5 w-1.5 rotate-45 bg-gold-500" />
        <span className="h-px w-10 bg-gold-500/50" />
      </div>
      {description ? (
        <p className="mt-6 text-base leading-relaxed text-ink-500">{description}</p>
      ) : null}
    </div>
  );
}
