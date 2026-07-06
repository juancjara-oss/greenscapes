import Link from 'next/link'
import { FaYelp } from 'react-icons/fa'

const quickLinks = ['Services', 'Portfolio', 'About', 'Contact']

const services = [
  { name: 'Lawn Mowing & Edging', slug: 'lawn-mowing' },
  { name: 'Hedge & Shrub Trimming', slug: 'hedge-trimming' },
  { name: 'Landscape Design', slug: 'landscape-design' },
  { name: 'Irrigation Systems', slug: 'irrigation-systems' },
  { name: 'Seasonal Cleanup', slug: 'seasonal-cleanup' },
  { name: 'Hardscaping & Patios', slug: 'hardscaping-patios' },
]

const locations = [
  { name: 'Roanoke, VA', href: '/locations/roanoke-va' },
  { name: 'Salem, VA', href: '/locations/salem-va' },
  { name: 'Vinton, VA', href: '/locations/vinton-va' },
  { name: 'Botetourt County', href: '/locations/botetourt-county-va' },
  { name: 'Smith Mountain Lake', href: '/locations/smith-mountain-lake-va' },
]

export default function Footer() {
  return (
    <footer className="bg-[#050e07] border-t border-[#39ff14]/15 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">

          {/* Brand */}
          <div className="sm:col-span-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Greenscapes VA – Lawn Care & Landscaping Roanoke Virginia" className="h-16 w-auto mb-5" />
            <p className="text-white/45 font-poppins text-sm leading-relaxed max-w-xs">
              Roanoke Virginia&apos;s premier grounds maintenance company. Transforming properties
              with precision, pride, and passion since 2013.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.facebook.com/GreenScapesVA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#1877F2]/40 flex items-center justify-center text-[#1877F2]/70 hover:border-[#1877F2] hover:text-[#1877F2] transition-all duration-300 text-xs font-poppins font-black"
              >
                f
              </a>
              <a
                href="https://www.instagram.com/greenscapesva"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#E1306C]/40 flex items-center justify-center text-[#E1306C]/70 hover:border-[#E1306C] hover:text-[#E1306C] transition-all duration-300 text-xs font-poppins font-black"
              >
                ig
              </a>
              <a
                href="https://www.youtube.com/@greenscapesvalawncare780"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#FF0000]/40 flex items-center justify-center text-[#FF0000]/70 hover:border-[#FF0000] hover:text-[#FF0000] transition-all duration-300 text-xs font-poppins font-black"
              >
                ▶
              </a>
              <a
                href="https://www.yelp.com/biz/greenscapes-va-roanoke-4"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#d32323]/40 flex items-center justify-center text-[#d32323]/70 hover:border-[#d32323] hover:text-[#d32323] transition-all duration-300"
              >
                <FaYelp className="w-4 h-4" />
              </a>
              <a
                href="https://www.homeadvisor.com/rated.GreenScapesVALtd.29799529.html?spId=29799529&preview=true"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#F96302]/40 flex items-center justify-center text-[#F96302]/70 hover:border-[#F96302] hover:text-[#F96302] transition-all duration-300 text-xs font-poppins font-black tracking-tight"
              >
                Angi
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-poppins font-black text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l}>
                  <Link
                    href={`/#${l.toLowerCase()}`}
                    className="text-white/40 hover:text-[#39ff14] font-poppins text-sm transition-colors duration-200"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-poppins font-black text-sm uppercase tracking-widest mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-white/40 hover:text-[#39ff14] font-poppins text-sm transition-colors duration-200"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white font-poppins font-black text-sm uppercase tracking-widest mb-5">
              Areas We Serve
            </h4>
            <ul className="space-y-3">
              {locations.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/40 hover:text-[#39ff14] font-poppins text-sm transition-colors duration-200"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/25 font-poppins text-xs">
            © 2025 Greenscapes VA. All Rights Reserved.
          </p>
          <p className="text-white/20 font-poppins text-xs">
            Licensed &amp; Insured · Roanoke Virginia
          </p>
        </div>
      </div>
    </footer>
  )
}
