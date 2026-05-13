type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy?: string;
};

export function SectionHeading({ eyebrow, title, copy }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase text-[#c89b3c]">{eyebrow}</p>
      <h2 className="font-display mt-3 text-4xl leading-tight text-[#fff8ea] sm:text-5xl">{title}</h2>
      {copy ? <p className="mt-5 text-lg leading-8 text-[#cfc2a8]">{copy}</p> : null}
    </div>
  );
}
