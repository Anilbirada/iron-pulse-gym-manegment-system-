import siteData from '../../config/siteData';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../ui/ScrollReveal';
import { InstagramIcon } from '../../assets/icons/Icons';

export default function Trainers() {
  return (
    <section id="trainers" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Meet Your Trainers"
            subtitle="Certified professionals who train alongside you — not from behind a desk."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.trainers.map((trainer, i) => (
            <ScrollReveal key={trainer.name} delay={i * 100}>
              <div className="group">
                {/* Photo with diagonal bottom clip */}
                <div
                  className="relative overflow-hidden aspect-[3/4] mb-4"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% 88%, 0 100%)',
                  }}
                >
                  <img
                    src={trainer.photo}
                    alt={`${trainer.name} — ${trainer.specialty}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-iron-black/60 to-transparent" />
                </div>

                <h3 className="font-display font-semibold text-lg text-iron-white">
                  {trainer.name}
                </h3>
                <p className="text-iron-accent text-sm font-medium mt-1">
                  {trainer.specialty}
                </p>
                <p className="text-iron-grey text-sm mt-1">
                  {trainer.experience}
                </p>

                {trainer.socialUrl && (
                  <a
                    href={trainer.socialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-iron-grey hover:text-iron-accent transition-colors mt-3 text-sm"
                    aria-label={`${trainer.name} on Instagram`}
                  >
                    <InstagramIcon className="w-4 h-4" />
                    Follow
                  </a>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
