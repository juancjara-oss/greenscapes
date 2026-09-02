import Link from 'next/link'
import { FaYelp } from 'react-icons/fa'
import { servicePages } from '@/content/service-pages'
import { locationPages } from '@/content/location-pages'
import GoogleProfileCard from './GoogleProfileCard'

const quickLinks = ['Services', 'Portfolio', 'About', 'Contact']

// Driven from content/service-pages.ts on purpose — this list used to be
// hardcoded to six services, which silently left Aeration & Overseeding out
// of the footer on every blog post. A service page that exists but is never
// linked from the blog earns nothing. Add a service there and it appears here.
const services = servicePages.map((s) => ({ name: s.name, slug: s.slug }))

// Derived from content/location-pages.ts for the same reason the services list
// is: this was a hardcoded array of five, so adding Daleville and Troutville
// would have left them with zero internal links from anywhere on the site.
// Add a location there and it appears here and in the sitemap together.
const locations = locationPages.map((l) => ({
  name: l.city === 'Botetourt County' ? l.city : `${l.city}, ${l.state}`,
  href: `/locations/${l.slug}`,
}))

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
              with precision, pride, and passion since 2005.
            </p>

            {/* Visible NAP — must stay identical to the LocalBusiness schema in
                app/layout.tsx and to every external citation (GBP, Yelp, BBB…).
                Google corroborates schema against on-page text; mismatches cost
                local ranking.
                NOTE: service-area business — the GBP is set to "No location;
                deliveries and home services only". Do NOT add a street address
                here; city/region only. */}
            <address className="not-italic mt-6 text-white/45 font-poppins text-sm leading-relaxed">
              <div className="text-white/70 font-semibold">Greenscapes VA</div>
              <div>Serving Roanoke, VA &amp; the Roanoke Valley</div>
              <a href="tel:+15407984479" className="block mt-2 hover:text-white transition-colors duration-300">
                (540) 798-4479
              </a>
              <a href="mailto:prettylawn@greenscapesva.com" className="block hover:text-white transition-colors duration-300">
                prettylawn@greenscapesva.com
              </a>
            </address>

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
                // Was greenscapes-va-roanoke-4, a slug that appears nowhere in the
                // verified citation record. This is the listing confirmed in Juan's
                // signed-in session (biz id ijNUrOoDGw_8H39uIY3xBA); -2 and the
                // un-suffixed slug both redirect here. Keep it identical to sameAs
                // in app/layout.tsx.
                href="https://www.yelp.com/biz/greenscapes-roanoke-3"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#d32323]/40 flex items-center justify-center text-[#d32323]/70 hover:border-[#d32323] hover:text-[#d32323] transition-all duration-300"
              >
                <FaYelp className="w-4 h-4" />
              </a>
              <a
                // Public profile. The ?spId=&preview=true params this used to carry
                // are dashboard-side only — verified logged-out that the bare URL
                // resolves. HomeAdvisor is now Angi (brand merger completed 2022),
                // which is why the label says Angi but the domain doesn't.
                href="https://www.homeadvisor.com/rated.GreenScapesVALtd.29799529.html"
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

        {/* Google Business Profile link — the site's only machine-readable and
            human-visible connection to the GBP. Mirrored in sameAs in app/layout.tsx. */}
        <GoogleProfileCard />

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/25 font-poppins text-xs">
            © 2026 Greenscapes VA. All Rights Reserved.
          </p>
          <p className="text-white/20 font-poppins text-xs">
            Licensed &amp; Insured · Roanoke Virginia
          </p>
        </div>
      </div>
    </footer>
  )
}
