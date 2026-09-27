import { useEffect, useRef, useState } from 'react'

export default function Counter({ value, suffix = '', duration = 1200 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            const start = performance.now()
            const tick = (now) => {
              const progress = Math.min((now - start) / duration, 1)
              setCount(Math.floor(progress * value))
              if (progress < 1) requestAnimationFrame(tick)
              else setCount(value)
            }
            requestAnimationFrame(tick)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value, duration])

  return (
    <span ref={ref} className="font-display text-4xl md:text-5xl text-bone">
      {count}
      <span className="text-pulse">{suffix}</span>
    </span>
  )
}
