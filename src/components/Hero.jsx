import { useEffect, useState } from 'react'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="home" className="relative min-h-screen bg-ink overflow-hidden pt-20">
      {/* Diagonal image block */}
      <div className="absolute inset-0 hero-diagonal">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80"
          alt="Athlete lifting a barbell mid-set inside IRON PULSE gym"
          className="w-full h-full object-cover opacity-40 md:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent md:from-ink md:via-ink/40 md:to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 min-h-[calc(100vh-5rem)] flex flex-col justify-center py-16">
        <div className="max-w-xl">
          <p
            className={`text-pulse font-display text-sm tracking-[0.2em] mb-5 transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Bengaluru's premium strength studio
          </p>

          <h1
            className={`font-display text-[13vw] sm:text-6xl md:text-7xl leading-[0.95] tracking-tightest text-bone transition-all duration-700 delay-100 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            FORGE YOUR
            <br />
            BODY. BUILD
            <br />
            YOUR <span className="text-pulse">POWER.</span>
          </h1>

          <p
            className={`mt-6 text-steel text-base md:text-lg max-w-md font-body transition-all duration-700 delay-200 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Expert coaching, real equipment, and programming that adapts to you.
            IRON PULSE is where serious training meets a community that pushes you further.
          </p>

          <div
            className={`mt-9 flex flex-wrap gap-4 transition-all duration-700 delay-300 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <a
              href="#membership"
              className="bg-pulse text-ink font-display text-sm px-8 py-4 notch hover:bg-bone transition-colors"
            >
              JOIN IRON PULSE
            </a>
            <a
              href="#programs"
              className="border border-line text-bone font-display text-sm px-8 py-4 hover:border-pulse hover:text-pulse transition-colors"
            >
              EXPLORE PROGRAMS
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
