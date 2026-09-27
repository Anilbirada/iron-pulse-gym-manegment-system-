import { useEffect, useState } from 'react'
import { navLinks } from '../siteConfig'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink/95 backdrop-blur-md border-b border-line' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 h-20">
        <a href="#home" className="font-display text-2xl tracking-tightest text-bone">
          IRON<span className="text-pulse">PULSE</span>
        </a>

        <ul className="hidden lg:flex items-center gap-9 font-body text-sm text-steel">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-bone transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#membership"
          className="hidden lg:inline-block bg-pulse text-ink font-display text-sm px-6 py-3 notch hover:bg-bone transition-colors"
        >
          JOIN NOW
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`block w-6 h-0.5 bg-bone transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block w-6 h-0.5 bg-bone transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-bone transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-ink border-t border-line px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-body text-steel hover:text-bone text-base"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#membership"
            onClick={() => setOpen(false)}
            className="bg-pulse text-ink font-display text-sm px-6 py-3 text-center notch"
          >
            JOIN NOW
          </a>
        </div>
      )}
    </header>
  )
}
