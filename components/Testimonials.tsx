'use client'
import { motion } from 'framer-motion'

const testimonials = [
  {
    quote:
      'Greenscapes VA completely transformed our front yard. The team was professional, on time, and the results were beyond what we imagined. Our neighbors keep asking who we use!',
    name: 'Sarah M.',
    location: 'Roanoke, VA',
    rating: 5,
  },
  {
    quote:
      "We've been using Greenscapes for our commercial property for 3 years. Consistent, reliable, and they always exceed expectations. Best landscaping company in Roanoke Virginia.",
    name: 'Robert K.',
    location: 'Salem, VA',
    rating: 5,
  },
  {
    quote:
      "The hardscaping project they did for our backyard patio is stunning. They designed it, laid every stone, and cleaned up perfectly. Worth every single penny.",
    name: 'Maria L.',
    location: 'Vinton, VA',
    rating: 5,
  },
  {
    quote:
      "Same-week service is no joke — called Monday, they were here Wednesday. Lawn looks like a golf course now. Signed up for their annual maintenance plan immediately.",
    name: 'James T.',
    location: 'Daleville, VA',
    rating: 5,
  },
  {
    quote:
      "After a storm took out half our landscaping, Greenscapes came to the rescue. Full cleanup and replanting in one day. Absolutely incredible team and results.",
    name: 'Donna P.',
    location: 'Roanoke, VA',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="bg-[#050e07] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-[#f97316] font-poppins font-bold uppercase tracking-[0.3em] text-xs sm:text-sm">
            Real Clients. Real Results.
          </span>
          <h2 className="text-5xl sm:text-6xl font-poppins font-black text-white mt-3">
            What They&apos;re <span className="text-[#39ff14]">Saying</span>
          </h2>
        </motion.div>
      </div>

      {/* Marquee track */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#050e07] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#050e07] to-transparent pointer-events-none" />

        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-80 bg-white/4 backdrop-blur-sm border-t-2 border-[#39ff14] rounded-2xl p-6"
              style={{ boxShadow: '0 4px 30px rgba(0,0,0,0.3)' }}
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-[#f97316] text-base">★</span>
                ))}
              </div>
              <p className="text-white/75 font-poppins text-sm leading-relaxed mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="text-[#39ff14] font-poppins font-bold text-sm">{t.name}</p>
                <p className="text-white/35 font-poppins text-xs">{t.location}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
