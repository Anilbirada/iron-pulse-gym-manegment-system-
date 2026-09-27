import siteData from '../../config/siteData';
import SectionHeading from '../ui/SectionHeading';
import NotchCard from '../ui/NotchCard';
import ScrollReveal from '../ui/ScrollReveal';
import { iconMap } from '../../assets/icons/Icons';

export default function Facilities() {
  return (
    <section id="facilities" className="py-20 md:py-28 bg-iron-surface/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Our Facilities"
            subtitle="Everything you need under one roof — maintained to competition standards."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.facilities.map((facility, i) => {
            const Icon = iconMap[facility.icon];
            return (
              <ScrollReveal key={facility.name} delay={i * 80}>
                <NotchCard className="p-6 md:p-8 h-full">
                  <div className="text-iron-accent mb-4">
                    {Icon && <Icon />}
                  </div>
                  <h3 className="font-display font-semibold text-lg text-iron-white mb-2">
                    {facility.name}
                  </h3>
                  <p className="text-iron-grey text-sm leading-relaxed">
                    {facility.description}
                  </p>
                </NotchCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
