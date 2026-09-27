import useReveal from '../hooks/useReveal'
import { stats } from '../siteConfig'
import Counter from './Counter'

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" ref={ref} className="bg-ink py-24 md:py-32 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-14 items-start">
        <div className="reveal">
          <p className="text-pulse font-display text-sm tracking-[0.2em] mb-4">Who we are</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight text-bone mb-6">
            Training built on
            <br />
            fundamentals, not fads
          </h2>
          <p className="text-steel font-body leading-relaxed mb-4">
            IRON PULSE opened with one goal: build a gym where the coaching is as serious as the
            equipment. We don't chase trends. Every program is grounded in progressive overload,
            honest tracking, and recovery that actually gets respected.
          </p>
          <p className="text-steel font-body leading-relaxed">
            Whether you're chasing your first pull-up or your fifth year of competitive lifting,
            you'll train alongside people who show up for each other — coached by trainers who
            treat your goals like their own.
          </p>
        </div>

        <div className="reveal">
          <div className="relative notch-corner overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1000&q=80"
              alt="Trainer coaching a member through a lift at IRON PULSE"
              className="w-full h-[420px] object-cover"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-20 reveal">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-line border-y border-line">
          {stats.map((s) => (
            <div key={s.label} className="px-4 py-8 text-center">
              <Counter value={s.value} suffix={s.suffix} />
              <p className="text-steel text-xs md:text-sm mt-2 font-body">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
