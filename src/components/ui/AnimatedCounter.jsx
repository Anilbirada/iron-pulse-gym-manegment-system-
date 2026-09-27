import useAnimatedCounter from '../../hooks/useAnimatedCounter';
import useScrollReveal from '../../hooks/useScrollReveal';

export default function AnimatedCounter({ value, suffix = '', label }) {
  const [ref, isVisible] = useScrollReveal(0.3);
  const count = useAnimatedCounter(value, 2000, isVisible);

  return (
    <div ref={ref} className="text-center">
      <span className="font-display font-bold text-4xl md:text-5xl text-iron-accent">
        {count}{suffix}
      </span>
      <p className="text-iron-grey text-sm mt-2 uppercase tracking-wider">{label}</p>
    </div>
  );
}
