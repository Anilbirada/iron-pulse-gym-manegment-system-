import useReveal from '../hooks/useReveal'
import { testimonials } from '../siteConfig'

export default function Testimonials() {
  const ref = useReveal()

  return (
    <section ref={ref} className="bg-surface py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="reveal max-w-lg mb-14">
          <p className="text-pulse font-display text-sm tracking-[0.2em] mb-4">Transformations</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight text-bone">
            Results our members earned
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="reveal bg-ink border border-line p-8 notch-corner">
              <p className="text-bone font-body leading-relaxed mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={t.photo}
                  alt={`${t.name}, IRON PULSE member`}
                  className="w-12 h-12 rounded-full object-cover grayscale"
                />
                <div>
                  <p className="font-display text-sm text-bone">{t.name}</p>
                  <p className="text-pulse text-xs font-body">{t.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
