import { useState } from 'react'
import useReveal from '../hooks/useReveal'
import { contact } from '../siteConfig'

export default function Contact() {
  const ref = useReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Enter a valid email address.'
    if (!form.message.trim()) next.message = 'Tell us what you need help with.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      setSent(true)
      setForm({ name: '', email: '', message: '' })
    }
  }

  return (
    <section id="contact" ref={ref} className="bg-ink py-24 md:py-32 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-14">
        <div className="reveal">
          <p className="text-pulse font-display text-sm tracking-[0.2em] mb-4">Contact</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight text-bone mb-8">
            Come see the floor
          </h2>

          <div className="space-y-6 font-body text-steel mb-8">
            <p>{contact.address}</p>
            <p>
              <a href={`tel:${contact.phone}`} className="hover:text-pulse transition-colors">
                {contact.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${contact.email}`} className="hover:text-pulse transition-colors">
                {contact.email}
              </a>
            </p>
            <div>
              {contact.hours.map((h) => (
                <div key={h.day} className="flex justify-between max-w-xs border-t border-line py-2 first:border-t-0">
                  <span className="text-bone text-sm">{h.day}</span>
                  <span className="text-sm">{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="notch-corner overflow-hidden h-56 border border-line">
            <iframe
              title="IRON PULSE location map"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://maps.google.com/maps?q=${contact.mapEmbedQuery}&z=14&output=embed`}
            />
          </div>
        </div>

        <div className="reveal">
          <form onSubmit={handleSubmit} className="bg-surface border border-line p-8 notch-corner space-y-5">
            {sent && (
              <p className="text-pulse text-sm font-body">
                Message sent. Our team will reach out within 24 hours.
              </p>
            )}
            <div>
              <label htmlFor="name" className="block text-sm text-steel font-body mb-2">
                Name
              </label>
              <input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-ink border border-line px-4 py-3 text-bone font-body focus:border-pulse outline-none"
              />
              {errors.name && <p className="text-pulse text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-steel font-body mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-ink border border-line px-4 py-3 text-bone font-body focus:border-pulse outline-none"
              />
              {errors.email && <p className="text-pulse text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-steel font-body mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-ink border border-line px-4 py-3 text-bone font-body focus:border-pulse outline-none"
              />
              {errors.message && <p className="text-pulse text-xs mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-pulse text-ink font-display text-sm py-4 notch hover:bg-bone transition-colors"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
