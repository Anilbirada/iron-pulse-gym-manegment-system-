import { useState, useEffect } from 'react';
import siteData from '../../config/siteData';
import Button from '../ui/Button';
import { MenuIcon, CloseIcon } from '../../assets/icons/Icons';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-iron-black/95 backdrop-blur-sm border-b border-iron-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#home" className="font-display font-bold text-xl md:text-2xl tracking-wider text-iron-white">
          IRON<span className="text-iron-accent">PULSE</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {siteData.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-iron-grey hover:text-iron-white transition-colors uppercase tracking-wider font-medium"
            >
              {link.label}
            </a>
          ))}
          <Button href="#membership" variant="primary" size="sm">
            Join Now
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-iron-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-iron-black/98 backdrop-blur-md z-40">
          <div className="flex flex-col items-center justify-center h-full gap-6">
            {siteData.nav.links.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-2xl font-display uppercase tracking-wider text-iron-white hover:text-iron-accent transition-colors"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {link.label}
              </a>
            ))}
            <Button href="#membership" variant="primary" size="lg" onClick={closeMenu}>
              Join Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
