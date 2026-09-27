import siteData from '../../config/siteData';
import SectionHeading from '../ui/SectionHeading';
import ContactForm from '../ui/ContactForm';
import ScrollReveal from '../ui/ScrollReveal';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from '../../assets/icons/Icons';

export default function Contact() {
  const { address, phone, email, hours, mapEmbedUrl } = siteData.contact;

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Get in Touch"
            subtitle="Questions? Ready to start? Drop us a line or visit the gym."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — Info + Map */}
          <ScrollReveal>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-iron-accent mt-1 flex-shrink-0"><MapPinIcon /></span>
                <div>
                  <h3 className="text-iron-white font-medium text-sm mb-1">Address</h3>
                  <p className="text-iron-grey text-sm">{address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-iron-accent mt-1 flex-shrink-0"><PhoneIcon /></span>
                <div>
                  <h3 className="text-iron-white font-medium text-sm mb-1">Phone</h3>
                  <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-iron-grey text-sm hover:text-iron-accent transition-colors">
                    {phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-iron-accent mt-1 flex-shrink-0"><MailIcon /></span>
                <div>
                  <h3 className="text-iron-white font-medium text-sm mb-1">Email</h3>
                  <a href={`mailto:${email}`} className="text-iron-grey text-sm hover:text-iron-accent transition-colors">
                    {email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-iron-accent mt-1 flex-shrink-0"><ClockIcon /></span>
                <div>
                  <h3 className="text-iron-white font-medium text-sm mb-1">Hours</h3>
                  {hours.map((h) => (
                    <p key={h.days} className="text-iron-grey text-sm">
                      <span className="text-iron-white">{h.days}:</span> {h.time}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Embedded Map */}
            <div className="mt-8 overflow-hidden" style={{
              clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))',
            }}>
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="IRON PULSE gym location"
              />
            </div>
          </ScrollReveal>

          {/* Right — Form */}
          <ScrollReveal delay={150}>
            <div className="bg-iron-surface p-6 md:p-8" style={{
              clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))',
            }}>
              <h3 className="font-display font-semibold text-xl text-iron-white mb-6">
                Send Us a Message
              </h3>
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
