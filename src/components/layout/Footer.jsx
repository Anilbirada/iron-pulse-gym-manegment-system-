import siteData from '../../config/siteData';
import { InstagramIcon, FacebookIcon, TwitterIcon, YouTubeIcon } from '../../assets/icons/Icons';

const socialIconMap = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  Twitter: TwitterIcon,
  YouTube: YouTubeIcon,
};

export default function Footer() {
  const { blurb, quickLinks, socialLinks, copyright } = siteData.footer;
  const programs = siteData.programs.slice(0, 6);

  return (
    <footer className="border-t border-iron-border bg-iron-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <a href="#home" className="font-display font-bold text-xl tracking-wider text-iron-white">
              IRON<span className="text-iron-accent">PULSE</span>
            </a>
            <p className="text-iron-grey text-sm mt-4 leading-relaxed">
              {blurb}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-iron-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-iron-grey text-sm hover:text-iron-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-iron-white mb-4">
              Programs
            </h4>
            <ul className="space-y-2">
              {programs.map((p) => (
                <li key={p.id}>
                  <a
                    href="#programs"
                    className="text-iron-grey text-sm hover:text-iron-accent transition-colors"
                  >
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-iron-white mb-4">
              Connect
            </h4>
            <p className="text-iron-grey text-sm mb-2">{siteData.contact.email}</p>
            <p className="text-iron-grey text-sm mb-4">{siteData.contact.phone}</p>

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = socialIconMap[social.platform];
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-iron-grey hover:text-iron-accent transition-colors p-2"
                    aria-label={`Follow us on ${social.platform}`}
                  >
                    {Icon && <Icon />}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-iron-border mt-10 pt-6 text-center">
          <p className="text-iron-grey text-xs">
            {copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
