'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const links = ['Services', 'Portfolio', 'About', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? 'bg-[#050e07]/95 backdrop-blur-md shadow-[0_0_30px_rgba(57,255,20,0.05)]' : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Greenscapes VA" className="h-16 w-auto" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-white/80 font-poppins font-semibold text-sm uppercase tracking-widest hover:text-[#39ff14] transition-colors duration-200"
              >
                {l}
              </Link>
            ))}
            <a
              href="tel:+15407984479"
              className="bg-[#39ff14] text-[#050e07] font-poppins font-black text-sm px-6 py-3 rounded-full hover:shadow-[0_0_25px_#39ff14] transition-all duration-300 hover:scale-105"
            >
              (540) 798-4479
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#050e07]/98 backdrop-blur-md border-t border-[#39ff14]/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <Link
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  className="text-white font-poppins font-bold text-lg hover:text-[#39ff14] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {l}
                </Link>
              ))}
              <a
                href="tel:+15407984479"
                className="bg-[#39ff14] text-[#050e07] font-poppins font-black text-base px-6 py-3 rounded-full text-center"
              >
                Call (540) 798-4479
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
