import useReveal from '../hooks/useReveal'
import { facilities } from '../siteConfig'

export default function Facilities() {
  const ref = useReveal()

  return (
    <section id="facilities" ref={ref} className="bg-surface py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-14 items-center">
        <div className="reveal order-2 lg:order-1">
          <div className="relative notch-corner overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1000&q=80"
              alt="IRON PULSE gym floor with free weights and equipment"
              className="w-full h-[460px] object-cover"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="reveal text-pulse font-display text-sm tracking-[0.2em] mb-4">Facilities</p>
          <h2 className="reveal font-display text-4xl md:text-5xl leading-tight text-bone mb-10">
            A floor built for real training
          </h2>

          <div className="space-y-0">
            {facilities.map((f, i) => (
              <div key={f.name} className="reveal flex items-start gap-5 py-5 border-t border-line first:border-t-0">
                <span className="font-display text-pulse text-sm w-8 pt-1">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-display text-lg text-bone">{f.name}</h3>
                  <p className="text-steel text-sm font-body mt-1">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
