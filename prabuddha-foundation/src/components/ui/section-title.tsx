type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionTitleProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-1 ${alignment} mb-8`}>
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-prabudda-maroon">
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading text-2xl md:text-3xl text-slate-900">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-xl text-sm text-slate-700">{subtitle}</p>
      )}
    </div>
  );
}
