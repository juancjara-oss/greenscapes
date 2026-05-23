'use client'
import { motion } from 'framer-motion'

const services = [
  {
    id: 'gs-service-mowing-img',
    name: 'Lawn Mowing & Edging',
    description: 'Precision cuts and crisp edges that give your property a pristine, golf-course finish every single visit.',
    image: '/assets/daleville-lawn-back-mower.webp',
  },
  {
    id: 'gs-service-hedges-img',
    name: 'Hedge & Shrub Trimming',
    description: 'Expertly sculpted hedges and shrubs that enhance your curb appeal and keep your property looking sharp year-round.',
    image: '/assets/shrub-trimming-reidsville.webp',
  },
  {
    id: 'gs-service-design-img',
    name: 'Landscape Design',
    description: 'Custom landscape plans that transform your outdoor space into a living masterpiece tailored to your lifestyle.',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4aaae?w=800&q=80',
  },
  {
    id: 'gs-service-irrigation-img',
    name: 'Irrigation Systems',
    description: 'Smart, water-efficient irrigation systems designed to keep your lawn lush while cutting your water bill.',
    image: 'https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?w=800&q=80',
  },
  {
    id: 'gs-service-cleanup-img',
    name: 'Seasonal Cleanup',
    description: 'Thorough spring and fall cleanups that prepare your property for every season — leaves, debris, and all.',
    image: '/assets/leaf-cleanup-roanoke.webp',
  },
  {
    id: 'gs-service-hardscaping-img',
    name: 'Hardscaping & Patios',
    description: 'Beautiful patios, walkways, and retaining walls built from premium materials designed to last a lifetime.',
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&q=80',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-[#050e07] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-[#f97316] font-poppins font-bold uppercase tracking-[0.3em] text-xs sm:text-sm">
            What We Do
          </span>
          <h2 className="text-5xl sm:text-6xl font-poppins font-black text-white mt-3">
            Our <span className="text-[#39ff14]" style={{ textShadow: '0 0 20px rgba(57,255,20,0.3)' }}>Services</span>
          </h2>
          <div
            className="mt-4 h-1 w-20 bg-[#39ff14] mx-auto rounded-full"
            style={{ boxShadow: '0 0 12px #39ff14' }}
          />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              className="group relative overflow-hidden rounded-2xl h-72 cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                id={service.id}
                src={service.image}
                alt={service.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Base gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050e07]/95 via-[#050e07]/30 to-transparent" />

              {/* Glassmorphism hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-400 rounded-2xl border-2 border-[#39ff14]"
                style={{
                  background: 'rgba(13,59,30,0.55)',
                  backdropFilter: 'blur(2px)',
                  boxShadow: 'inset 0 0 30px rgba(57,255,20,0.08), 0 0 30px rgba(57,255,20,0.25)',
                }}
              />

              {/* Orange badge */}
              <div className="absolute top-4 right-4 bg-[#f97316] text-white font-poppins font-bold text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-1 group-hover:translate-y-0">
                Learn More →
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl sm:text-2xl font-poppins font-black text-white mb-1">{service.name}</h3>
                <p className="text-white/70 font-poppins text-sm leading-relaxed max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
