'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with video fallback */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      {/* Layered gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050e07]/95 via-[#0d3b1e]/75 to-[#050e07]/90" />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: '200px 200px',
        }}
      />

      {/* Green neon left accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#39ff14] to-transparent opacity-40" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 text-[#39ff14] font-poppins font-bold text-xs sm:text-sm uppercase tracking-[0.35em]"
            style={{ textShadow: '0 0 10px #39ff14' }}>
            <span className="w-8 h-px bg-[#39ff14]" />
            Roanoke Virginia&apos;s #1 Choice
            <span className="w-8 h-px bg-[#39ff14]" />
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-7xl lg:text-8xl font-poppins font-black text-white leading-[1.05] mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We Don&apos;t Just{' '}
          <span className="text-[#39ff14]" style={{ textShadow: '0 0 40px rgba(57,255,20,0.5)' }}>
            Cut Grass.
          </span>
          <br />
          We Craft{' '}
          <span className="text-[#f97316]" style={{ textShadow: '0 0 30px rgba(249,115,22,0.4)' }}>
            Landscapes.
          </span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-2xl text-[#f97316] font-poppins font-semibold mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          Roanoke Virginia&apos;s Premier Grounds Maintenance
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <a
            href="#portfolio"
            className="px-9 py-4 bg-[#39ff14] text-[#050e07] font-poppins font-black text-base sm:text-lg rounded-full hover:shadow-[0_0_35px_rgba(57,255,20,0.7)] transition-all duration-300 hover:scale-105"
          >
            View Our Work
          </a>
          <a
            href="#contact"
            className="px-9 py-4 border-2 border-[#f97316] text-[#f97316] font-poppins font-black text-base sm:text-lg rounded-full hover:bg-[#f97316] hover:text-white transition-all duration-300"
          >
            Get Free Quote
          </a>
        </motion.div>

        {/* Animated neon divider */}
        <motion.div
          className="mt-20 mx-auto max-w-2xl h-px"
          style={{ background: 'linear-gradient(90deg, transparent, #39ff14, transparent)', boxShadow: '0 0 10px #39ff14' }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-white/30 font-poppins text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-5 h-9 border border-[#39ff14]/50 rounded-full flex justify-center pt-1.5">
          <motion.div
            className="w-1 h-2 bg-[#39ff14] rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
