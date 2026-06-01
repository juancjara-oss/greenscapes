'use client'
import { motion } from 'framer-motion'

const values = [
  {
    icon: '🛡️',
    title: 'Licensed & Insured',
    desc: 'Fully licensed, bonded, and insured for your complete peace of mind on every job.',
  },
  {
    icon: '🌿',
    title: 'Eco-Friendly Products',
    desc: 'We use sustainable, environmentally-responsible products and practices — always.',
  },
  {
    icon: '⚡',
    title: 'Same-Week Service',
    desc: 'Call us Monday, and we\'ll have your property looking its best by the weekend.',
  },
  {
    icon: '✅',
    title: 'Satisfaction Guaranteed',
    desc: 'Not 100% happy? We\'ll come back and make it right. No questions asked, no charge.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/who-we-are-bg.webp"
          alt="Greenscapes VA landscaping team serving Roanoke Virginia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0d3b1e]/92" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050e07]/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left headline */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="text-[#f97316] font-poppins font-bold uppercase tracking-[0.3em] text-xs sm:text-sm">
              Who We Are
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-black text-white mt-4 leading-[1.1]">
              Built on{' '}
              <span className="text-[#f97316]">Sweat,</span>{' '}
              <span className="text-[#39ff14]" style={{ textShadow: '0 0 20px rgba(57,255,20,0.4)' }}>
                Pride
              </span>{' '}
              &amp; Deep{' '}
              <span className="text-[#39ff14]">Roots</span>
            </h2>
            <p className="text-white/65 font-poppins mt-6 text-base sm:text-lg leading-relaxed">
              Founded in Roanoke Virginia over a decade ago, Greenscapes VA started with one truck,
              two brothers, and an uncompromising commitment to quality. Today, we serve hundreds of
              residential and commercial clients — but our values have never changed.
            </p>
            <p className="text-white/65 font-poppins mt-4 text-base sm:text-lg leading-relaxed">
              We believe your property deserves the same care we&apos;d give our own. That means
              showing up on time, doing the job right the first time, and leaving your landscape
              looking absolutely extraordinary.
            </p>
          </motion.div>

          {/* Right value props */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="bg-white/5 backdrop-blur-sm border border-[#39ff14]/15 rounded-2xl p-6 hover:border-[#39ff14]/60 hover:bg-white/8 transition-all duration-300"
                style={{ boxShadow: '0 0 0 transparent' }}
                whileHover={{ boxShadow: '0 0 20px rgba(57,255,20,0.1)' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="text-white font-poppins font-black text-base mb-2">{v.title}</h3>
                <p className="text-white/55 font-poppins text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
