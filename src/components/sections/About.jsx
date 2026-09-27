import siteData from '../../config/siteData';
import SectionHeading from '../ui/SectionHeading';
import AnimatedCounter from '../ui/AnimatedCounter';
import ScrollReveal from '../ui/ScrollReveal';

export default function About() {
  const { title, description, stats } = siteData.about;

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — copy */}
          <ScrollReveal>
            <SectionHeading title={title} align="left" />
            <p className="text-iron-grey text-base md:text-lg leading-relaxed">
              {description}
            </p>
          </ScrollReveal>

          {/* Right — stat counters */}
          <ScrollReveal delay={150}>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat) => (
                <AnimatedCounter
                  key={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
