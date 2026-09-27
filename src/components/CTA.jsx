import useReveal from '../hooks/useReveal'

export default function CTA() {
  const ref = useReveal()

  return (
    <section ref={ref} className="relative bg-ink py-28 md:py-36 border-t border-line overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=1600&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative max-w-4xl mx-auto px-6 text-center reveal">
        <h2 className="font-display text-4xl md:text-6xl leading-[0.95] text-bone mb-8">
          READY TO BECOME <span className="text-pulse">STRONGER?</span>
        </h2>
        <a
          href="#contact"
          className="inline-block bg-pulse text-ink font-display text-sm px-10 py-5 notch hover:bg-bone transition-colors"
        >
          START YOUR JOURNEY
        </a>
      </div>
    </section>
  )
}
