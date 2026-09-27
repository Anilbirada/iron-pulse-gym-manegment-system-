import siteData from '../../config/siteData';
import Button from '../ui/Button';
import ScrollReveal from '../ui/ScrollReveal';

export default function CtaBanner() {
  const { headline, buttonText, buttonLink } = siteData.ctaBanner;

  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      {/* Diagonal accent background */}
      <div
        className="absolute inset-0 bg-iron-accent"
        style={{
          clipPath: 'polygon(0 8%, 100% 0, 100% 92%, 0 100%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white uppercase tracking-tight mb-8">
            {headline}
          </h2>
          <Button
            href={buttonLink}
            variant="primary"
            size="lg"
            className="bg-iron-black text-iron-white hover:bg-iron-surface"
          >
            {buttonText}
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
