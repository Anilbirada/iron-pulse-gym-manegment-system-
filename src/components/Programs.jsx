import useReveal from '../hooks/useReveal'
import { programs } from '../siteConfig'

const icons = {
  strength: (
    <path d="M4 12h2M18 12h2M6 8v8M18 8v8M8 12h8" strokeLinecap="round" strokeLinejoin="round" />
  ),
  muscle: <path d="M6 14c0-4 2-7 6-7s6 3 6 7-2 5-6 5-6-1-6-5z" strokeLinecap="round" strokeLinejoin="round" />,
  weightloss: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M7 7l2 2M17 7l-2 2M7 17l2-2M17 17l-2-2" strokeLinecap="round" />,
  cross: <path d="M4 20l16-16M4 4l16 16" strokeLinecap="round" />,
  personal: <path d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 21c0-4 3.5-7 8-7s8 3 8 7" strokeLinecap="round" strokeLinejoin="round" />,
  functional: <path d="M4 12a8 8 0 1116 0 8 8 0 01-16 0zM12 8v4l3 2" strokeLinecap="round" strokeLinejoin="round" />,
}

export default function Programs() {
  const ref = useReveal()

  return (
    <section id="programs" ref={ref} className="bg-surface py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="reveal max-w-lg mb-14">
          <p className="text-pulse font-display text-sm tracking-[0.2em] mb-4">Programs</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight text-bone">
            Six paths. One standard of coaching.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p) => (
            <div
              key={p.id}
              className="reveal group bg-ink border border-line p-8 notch-corner hover:border-pulse transition-colors"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-pulse mb-6"
              >
                {icons[p.id]}
              </svg>
              <h3 className="font-display text-xl text-bone mb-3">{p.name}</h3>
              <p className="text-steel text-sm font-body leading-relaxed mb-6">{p.desc}</p>
              <a
                href="#contact"
                className="text-sm font-display text-bone group-hover:text-pulse transition-colors"
              >
                Learn more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
