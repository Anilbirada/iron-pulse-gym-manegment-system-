import useReducedMotion from '../../hooks/useReducedMotion';
import siteData from '../../config/siteData';

export default function StatStrip() {
  const prefersReducedMotion = useReducedMotion();
  const stats = siteData.about.stats;

  const items = stats.map((s) => (
    <span key={s.label} className="flex items-center gap-2 px-8 whitespace-nowrap">
      <span className="font-display font-bold text-lg text-iron-accent">{s.value}{s.suffix}</span>
      <span className="text-iron-grey text-sm uppercase tracking-wider">{s.label}</span>
    </span>
  ));

  if (prefersReducedMotion) {
    return (
      <div className="bg-iron-surface border-y border-iron-border py-4">
        <div className="flex justify-center gap-4 flex-wrap">
          {items}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-iron-surface border-y border-iron-border py-4 overflow-hidden group">
      <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
        {items}
        {items}
        {items}
        {items}
      </div>
    </div>
  );
}
