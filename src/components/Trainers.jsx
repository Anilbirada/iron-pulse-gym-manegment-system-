import useReveal from '../hooks/useReveal'
import { trainers } from '../siteConfig'

export default function Trainers() {
  const ref = useReveal()

  return (
    <section id="trainers" ref={ref} className="bg-ink py-24 md:py-32 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="reveal max-w-lg mb-14">
          <p className="text-pulse font-display text-sm tracking-[0.2em] mb-4">Coaching staff</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight text-bone">
            Trainers who coach, not just supervise
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((t) => (
            <div key={t.name} className="reveal group">
              <div className="relative overflow-hidden notch-corner">
                <img
                  src={t.photo}
                  alt={`${t.name}, ${t.specialty} trainer at IRON PULSE`}
                  className="w-full h-72 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex gap-3">
                    <a href={t.instagram} aria-label={`${t.name} on Instagram`} className="text-bone hover:text-pulse">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.3.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.3 1.1.4 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.3-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1.1.3-2.3.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.3-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.3-1.1-.4-2.3-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.3.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1.1-.3 2.3-.4 1.3-.1 1.7-.1 4.9-.1zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm5.4-8.9a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="font-display text-lg text-bone mt-4">{t.name}</h3>
              <p className="text-pulse text-sm font-body">{t.specialty}</p>
              <p className="text-steel text-xs font-body mt-1">{t.experience} experience</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
