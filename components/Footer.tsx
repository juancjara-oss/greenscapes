import Link from 'next/link'

const quickLinks = ['Services', 'Portfolio', 'About', 'Contact']
const services = ['Lawn Mowing', 'Hedge Trimming', 'Landscape Design', 'Irrigation', 'Seasonal Cleanup', 'Hardscaping']

export default function Footer() {
  return (
    <footer className="bg-[#050e07] border-t border-[#39ff14]/15 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
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
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/35 hover:border-[#39ff14] hover:text-[#39ff14] transition-all duration-300 text-xs font-poppins font-black"
              >
                f
              </a>
              <a
                href="https://www.instagram.com/greenscapesva"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/35 hover:border-[#39ff14] hover:text-[#39ff14] transition-all duration-300 text-xs font-poppins font-black"
              >
                ig
              </a>
              <a
                href="https://www.youtube.com/@greenscapesvalawncare780"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/35 hover:border-[#39ff14] hover:text-[#39ff14] transition-all duration-300 text-xs font-poppins font-black"
              >
                ▶
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
                    href={`#${l.toLowerCase()}`}
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
                <li key={s}>
                  <span className="text-white/40 font-poppins text-sm">{s}</span>
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
