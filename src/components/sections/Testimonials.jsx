import siteData from '../../config/siteData';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../ui/ScrollReveal';
import { QuoteIcon } from '../../assets/icons/Icons';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-iron-surface/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Real Results"
            subtitle="Don't take our word for it — hear from the people who show up every day."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {siteData.testimonials.map((testimonial, i) => (
            <ScrollReveal key={testimonial.name} delay={i * 120}>
              <div className="bg-iron-surface p-6 md:p-8 relative"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))',
                }}
              >
                <div className="text-iron-accent/20 mb-4">
                  <QuoteIcon className="w-10 h-10" />
                </div>
                <blockquote className="text-iron-grey text-sm md:text-base leading-relaxed italic mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-iron-white font-medium text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-iron-accent text-xs">
                      {testimonial.result}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
