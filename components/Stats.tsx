'use client'
import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 1800
    const steps = 60
    const step = to / steps
    let current = 0
    const timer = setInterval(() => {
      current += step
      if (current >= to) {
        setCount(to)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, to])

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  )
}

const stats = [
  { to: 500, suffix: '+', label: 'Projects Completed' },
  { to: 12, suffix: '+', label: 'Years Experience' },
  { to: 98, suffix: '%', label: 'Client Retention' },
  { to: 5, suffix: '★', label: 'Star Rated' },
]

export default function Stats() {
  return (
    <section className="bg-[#0d3b1e] py-14 border-y border-[#39ff14]/15 relative overflow-hidden">
      {/* Subtle neon glow bg */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-1/2 h-full bg-[#39ff14]/3 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-black text-[#39ff14]"
                style={{ textShadow: '0 0 20px rgba(57,255,20,0.5)' }}
              >
                <Counter to={stat.to} suffix={stat.suffix} />
              </div>
              <p className="text-white/60 font-poppins font-semibold text-sm mt-2 uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
