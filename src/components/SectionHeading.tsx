interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  lede?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  eyebrow,
  title,
  lede,
  align = 'center',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={`${alignClass} max-w-2xl ${align === 'center' ? 'mx-auto' : ''} mb-12`}>
      <p className="gp-eyebrow mb-3">{eyebrow}</p>
      <h2 className="font-display text-3xl md:text-4xl lg:text-[44px] font-medium text-[var(--text-heading)] leading-[1.1] tracking-[-0.01em]">
        {title}
      </h2>
      {lede && (
        <p className="mt-4 text-[var(--text-body)] text-base md:text-[15.5px] leading-relaxed max-w-xl mx-auto">
          {lede}
        </p>
      )}
    </div>
  );
}
