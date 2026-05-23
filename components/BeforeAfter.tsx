'use client'
import { motion } from 'framer-motion'
import { useState, useRef } from 'react'

const projects = [
  {
    before: 'https://images.unsplash.com/photo-1558908539-f2d539c8a4ab?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    label: 'Lawn Restoration',
    location: 'Fairfax, VA',
  },
  {
    before: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1585320806297-9794b3e4aaae?w=800&q=80',
    label: 'Garden Overhaul',
    location: 'Reston, VA',
  },
  {
    before: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&q=80',
    label: 'Patio Installation',
    location: 'McLean, VA',
  },
]

function SliderCard({ project }: { project: typeof projects[0] }) {
  const [pos, setPos] = useState(50)
  const cardRef = useRef<HTMLDivElement>(null)

  function updatePos(clientX: number) {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.max(2, Math.min(98, x)))
  }

  return (
    <div
      ref={cardRef}
      className="relative overflow-hidden rounded-2xl h-64 cursor-ew-resize select-none"
      onMouseMove={(e) => updatePos(e.clientX)}
      onTouchMove={(e) => updatePos(e.touches[0].clientX)}
    >
      {/* Before */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={project.before} alt="Before" className="absolute inset-0 w-full h-full object-cover" />

      {/* After */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={project.after} alt="After" className="absolute inset-0 w-full h-full object-cover" />
      </div>

      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-[#39ff14]"
        style={{ left: `${pos}%`, boxShadow: '0 0 10px #39ff14, 0 0 20px rgba(57,255,20,0.4)' }}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#39ff14] flex items-center justify-center"
          style={{ boxShadow: '0 0 15px #39ff14' }}
        >
          <svg className="w-5 h-5 text-[#050e07]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-3 3 3 3M16 9l3 3-3 3" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <span className="absolute top-3 left-3 bg-[#050e07]/80 text-white font-poppins font-bold text-xs px-2.5 py-1 rounded-md">
        BEFORE
      </span>
      <span className="absolute top-3 right-3 bg-[#39ff14] text-[#050e07] font-poppins font-bold text-xs px-2.5 py-1 rounded-md">
        AFTER
      </span>

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#050e07] to-transparent pt-8 px-4 pb-4">
        <p className="text-white font-poppins font-black text-sm">{project.label}</p>
        <p className="text-white/40 font-poppins text-xs">{project.location}</p>
      </div>
    </div>
  )
}

export default function BeforeAfter() {
  return (
    <section className="bg-[#050e07] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-[#f97316] font-poppins font-bold uppercase tracking-[0.3em] text-xs sm:text-sm">
            Proof of Excellence
          </span>
          <h2 className="text-5xl sm:text-6xl font-poppins font-black text-white mt-3">
            Before &amp; <span className="text-[#39ff14]">After</span>
          </h2>
          <p className="text-white/40 font-poppins mt-3 text-sm">Drag the slider to reveal the transformation</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              viewport={{ once: true }}
            >
              <SliderCard project={p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
