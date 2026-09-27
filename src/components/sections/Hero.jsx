import { useState, useEffect } from 'react';
import siteData from '../../config/siteData';
import Button from '../ui/Button';
import useReducedMotion from '../../hooks/useReducedMotion';

export default function Hero() {
  const { headline, subtext, ctaPrimary, ctaSecondary } = siteData.hero;
  const prefersReducedMotion = useReducedMotion();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const show = loaded || prefersReducedMotion;

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-iron-black via-iron-black/90 to-transparent z-10" />

      {/* Hero image — right side, diagonal clip */}
      <div
        className="absolute right-0 top-0 bottom-0 w-full lg:w-[55%]"
        style={{
          clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 8% 100%)',
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80"
          alt="Athlete training with heavy weights in a dark gym environment"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-iron-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-24 pb-16 lg:py-0">
        <div className="max-w-xl lg:max-w-2xl">
          <h1
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.95] tracking-tight"
            style={{
              opacity: show ? 1 : 0,
              transform: show ? 'translateY(0)' : 'translateY(32px)',
              transition: prefersReducedMotion ? 'none' : 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {headline.split('.').filter(Boolean).map((part, i) => (
              <span key={i} className="block">
                {part.trim()}.
              </span>
            ))}
          </h1>

          <p
            className="text-iron-grey text-base md:text-lg mt-6 leading-relaxed max-w-lg"
            style={{
              opacity: show ? 1 : 0,
              transform: show ? 'translateY(0)' : 'translateY(24px)',
              transition: prefersReducedMotion ? 'none' : 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s',
            }}
          >
            {subtext}
          </p>

          <div
            className="flex flex-wrap gap-4 mt-8"
            style={{
              opacity: show ? 1 : 0,
              transform: show ? 'translateY(0)' : 'translateY(24px)',
              transition: prefersReducedMotion ? 'none' : 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
            }}
          >
            <Button href={ctaPrimary.href} variant="primary" size="lg">
              {ctaPrimary.label}
            </Button>
            <Button href={ctaSecondary.href} variant="secondary" size="lg">
              {ctaSecondary.label}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <div className="w-[1px] h-12 bg-iron-grey/30 mx-auto mb-2" />
        <span className="text-iron-grey text-xs uppercase tracking-[0.2em]">Scroll</span>
      </div>
    </section>
  );
}
