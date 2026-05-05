interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-16 text-center md:text-left">
      <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 uppercase">
        {title}<span className="text-primary italic opacity-50"> //</span>
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-foreground/60 max-w-2xl font-bold tracking-tight">
          {subtitle}
        </p>
      )}
    </div>
  );
}
