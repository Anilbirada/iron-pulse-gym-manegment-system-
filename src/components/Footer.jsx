import { contact, social, navLinks, programs } from '../siteConfig'

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-line pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-4 gap-10 mb-12">
        <div>
          <p className="font-display text-2xl text-bone mb-4">
            IRON<span className="text-pulse">PULSE</span>
          </p>
          <p className="text-steel text-sm font-body leading-relaxed">
            A premium strength studio built for people serious about training — real coaching,
            real equipment, real results.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm text-bone tracking-[0.1em] mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-steel text-sm font-body hover:text-pulse transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm text-bone tracking-[0.1em] mb-4">Programs</h4>
          <ul className="space-y-2">
            {programs.slice(0, 5).map((p) => (
              <li key={p.id}>
                <a href="#programs" className="text-steel text-sm font-body hover:text-pulse transition-colors">
                  {p.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm text-bone tracking-[0.1em] mb-4">Contact</h4>
          <ul className="space-y-2 text-steel text-sm font-body">
            <li>{contact.address}</li>
            <li>{contact.phone}</li>
            <li>{contact.email}</li>
          </ul>
          <div className="flex gap-4 mt-5">
            <a href={social.instagram} aria-label="Instagram" className="text-steel hover:text-pulse">
              IG
            </a>
            <a href={social.youtube} aria-label="YouTube" className="text-steel hover:text-pulse">
              YT
            </a>
            <a href={social.facebook} aria-label="Facebook" className="text-steel hover:text-pulse">
              FB
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 border-t border-line pt-6">
        <p className="text-steel text-xs font-body">
          © {new Date().getFullYear()} IRON PULSE. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
