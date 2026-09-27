import siteData from '../../config/siteData';
import SectionHeading from '../ui/SectionHeading';
import NotchCard from '../ui/NotchCard';
import Button from '../ui/Button';
import ScrollReveal from '../ui/ScrollReveal';
import { CheckIcon } from '../../assets/icons/Icons';

export default function Membership() {
  return (
    <section id="membership" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Membership Plans"
            subtitle="No contracts, no hidden fees. Cancel anytime."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {siteData.membership.tiers.map((tier, i) => (
            <ScrollReveal key={tier.name} delay={i * 120}>
              <div
                className={`relative ${
                  tier.isFeatured ? 'md:-mt-4 md:mb-4' : ''
                }`}
              >
                {tier.isFeatured && (
                  <div className="bg-iron-accent text-white text-xs font-semibold uppercase tracking-widest text-center py-2 px-4"
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)',
                    }}
                  >
                    Most Popular
                  </div>
                )}
                <NotchCard
                  hover={false}
                  className={`p-6 md:p-8 ${
                    tier.isFeatured
                      ? 'border-2 border-iron-accent'
                      : 'border border-iron-border'
                  }`}
                >
                  <h3 className="font-display font-semibold text-xl text-iron-white uppercase">
                    {tier.name}
                  </h3>

                  <div className="mt-4 mb-6">
                    <span className="font-display font-bold text-5xl text-iron-white">
                      ${tier.price}
                    </span>
                    <span className="text-iron-grey text-sm ml-1">{tier.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="text-iron-accent mt-0.5 flex-shrink-0">
                          <CheckIcon />
                        </span>
                        <span className="text-iron-grey text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    href="#contact"
                    variant={tier.isFeatured ? 'primary' : 'secondary'}
                    size="md"
                    className="w-full"
                  >
                    {tier.ctaText}
                  </Button>
                </NotchCard>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
