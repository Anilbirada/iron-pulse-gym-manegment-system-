import useReveal from '../hooks/useReveal'
import { plans } from '../siteConfig'

export default function Membership() {
  const ref = useReveal()

  return (
    <section id="membership" ref={ref} className="bg-ink py-24 md:py-32 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="reveal max-w-lg mb-14">
          <p className="text-pulse font-display text-sm tracking-[0.2em] mb-4">Membership</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight text-bone">
            Pick the level of coaching you need
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.id}
              className={`reveal p-8 flex flex-col notch-corner ${
                p.featured
                  ? 'bg-pulse text-ink md:-translate-y-4'
                  : 'bg-surface border border-line text-bone'
              }`}
            >
              {p.featured && (
                <span className="font-display text-xs tracking-[0.15em] mb-4 self-start bg-ink text-pulse px-3 py-1">
                  MOST POPULAR
                </span>
              )}
              <h3 className="font-display text-2xl mb-1">{p.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="font-display text-4xl">₹{p.price.toLocaleString('en-IN')}</span>
                <span className={`text-sm font-body ${p.featured ? 'text-ink/70' : 'text-steel'}`}>{p.period}</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm font-body">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="mt-0.5 flex-shrink-0"
                    >
                      <path d="M5 12l4 4L19 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className={p.featured ? 'text-ink/90' : 'text-steel'}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`text-center font-display text-sm py-4 transition-colors ${
                  p.featured
                    ? 'bg-ink text-bone hover:bg-surface'
                    : 'bg-pulse text-ink hover:bg-bone'
                }`}
              >
                {p.cta.toUpperCase()}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
