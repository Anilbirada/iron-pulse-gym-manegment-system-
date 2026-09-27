export default function SectionHeading({ title, subtitle, align = 'center', className = '' }) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col gap-4 mb-12 md:mb-16 ${alignment} ${className}`}>
      <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-iron-white uppercase tracking-tight">
        {title}
      </h2>
      <div
        className="w-12 h-[3px] bg-iron-accent"
        aria-hidden="true"
      />
      {subtitle && (
        <p className="text-iron-grey text-base md:text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
