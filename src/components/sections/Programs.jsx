import siteData from '../../config/siteData';
import SectionHeading from '../ui/SectionHeading';
import NotchCard from '../ui/NotchCard';
import ScrollReveal from '../ui/ScrollReveal';
import { iconMap } from '../../assets/icons/Icons';

export default function Programs() {
  return (
    <section id="programs" className="py-20 md:py-28 bg-iron-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Our Programs"
            subtitle="Six distinct training disciplines. One goal — making you unstoppable."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.programs.map((program, i) => {
            const Icon = iconMap[program.icon];
            return (
              <ScrollReveal key={program.id} delay={i * 80}>
                <NotchCard accent className="p-6 md:p-8 h-full group">
                  <div className="text-iron-accent mb-4 transition-transform duration-300 group-hover:scale-110">
                    {Icon && <Icon />}
                  </div>
                  <h3 className="font-display font-semibold text-xl text-iron-white mb-3">
                    {program.name}
                  </h3>
                  <p className="text-iron-grey text-sm leading-relaxed mb-4">
                    {program.description}
                  </p>
                  <a
                    href="#contact"
                    className="text-iron-accent text-sm font-medium hover:underline underline-offset-4 transition-all"
                  >
                    Learn More →
                  </a>
                </NotchCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
