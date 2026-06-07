import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getLocationPageBySlug, getAllLocationSlugs, locationPages } from '@/content/location-pages'
import { servicePages } from '@/content/service-pages'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const location = getLocationPageBySlug(params.slug)
  if (!location) return {}
  return {
    title: location.metaTitle,
    description: location.metaDescription,
    keywords: location.keywords,
  }
}

export default function LocationPage({ params }: { params: { slug: string } }) {
  const location = getLocationPageBySlug(params.slug)
  if (!location) notFound()

  const otherLocations = locationPages.filter((l) => l.slug !== location.slug)

  return (
    <>
      <Navbar />
      <main className="bg-[#050e07] min-h-screen">

        {/* Hero */}
        <div className="relative h-72 sm:h-96 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={location.image}
            alt={`Lawn care and landscaping in ${location.city}, ${location.state}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#050e07]/80" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-20">
            <span className="text-[#f97316] font-poppins font-bold uppercase tracking-[0.3em] text-xs sm:text-sm mb-3">
              Service Area
            </span>
            <h1 className="text-4xl sm:text-6xl font-poppins font-black text-white leading-tight">
              {location.city}
              <span className="text-[#39ff14]">, {location.state}</span>
            </h1>
            <p className="text-white/60 font-poppins font-semibold text-base sm:text-lg mt-3">
              {location.tagline}
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Main content */}
            <div className="lg:col-span-2">
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 text-white/35 hover:text-[#39ff14] font-poppins text-sm transition-colors duration-200 mb-8"
              >
                ← Back to Homepage
              </Link>

              <div
                className="prose-greenscapes"
                dangerouslySetInnerHTML={{ __html: location.content }}
              />

              {/* CTA */}
              <div className="mt-12 bg-[#0d3b1e] border border-[#39ff14]/20 rounded-2xl p-8">
                <p className="text-[#39ff14] font-poppins font-bold uppercase tracking-widest text-xs mb-3">
                  Free estimate
                </p>
                <h3 className="text-white font-poppins font-black text-2xl mb-4">
                  Ready to Get Started in {location.city}?
                </h3>
                <p className="text-white/50 font-poppins text-sm mb-6">
                  Locally owned and operated. We know the Roanoke Valley — and we&apos;re probably already in your neighborhood.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+15407984479"
                    className="px-7 py-3 bg-[#39ff14] text-[#050e07] font-poppins font-black text-sm rounded-full hover:shadow-[0_0_25px_rgba(57,255,20,0.5)] transition-all duration-300 text-center"
                  >
                    (540) 798-4479
                  </a>
                  <a
                    href="https://wa.me/15407984479?text=Hi%20Carlos%2C%20I%20would%20like%20to%20get%20an%20estimate%20for%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-7 py-3 border-2 border-[#f97316] text-[#f97316] font-poppins font-black text-sm rounded-full hover:bg-[#f97316] hover:text-white transition-all duration-300 text-center"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">

              {/* Other locations */}
              <div className="bg-white/4 border border-white/8 rounded-2xl p-6">
                <h3 className="text-white font-poppins font-black text-sm uppercase tracking-widest mb-5">
                  Other Areas We Serve
                </h3>
                <ul className="space-y-3">
                  {otherLocations.map((l) => (
                    <li key={l.slug}>
                      <Link
                        href={`/locations/${l.slug}`}
                        className="text-white/50 hover:text-[#39ff14] font-poppins text-sm transition-colors duration-200 flex items-center gap-2"
                      >
                        <span className="text-[#39ff14] text-xs">→</span>
                        {l.city}, {l.state}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <span className="text-white/30 font-poppins text-sm flex items-center gap-2">
                      <span className="text-[#39ff14] text-xs">→</span>
                      Roanoke, VA (main office)
                    </span>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div className="bg-white/4 border border-white/8 rounded-2xl p-6">
                <h3 className="text-white font-poppins font-black text-sm uppercase tracking-widest mb-5">
                  Our Services
                </h3>
                <ul className="space-y-3">
                  {servicePages.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="text-white/50 hover:text-[#39ff14] font-poppins text-sm transition-colors duration-200 flex items-center gap-2"
                      >
                        <span className="text-[#39ff14] text-xs">→</span>
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hours */}
              <div className="bg-white/4 border border-white/8 rounded-2xl p-6">
                <p className="text-white/35 font-poppins text-xs mb-3 uppercase tracking-widest">Hours</p>
                <p className="text-white font-poppins text-sm">Mon–Fri: 8am – 5pm</p>
                <p className="text-white font-poppins text-sm">Saturday: 10am – 4pm</p>
                <p className="text-white/35 font-poppins text-sm">Sunday: Closed</p>
                <a
                  href="tel:+15407984479"
                  className="block mt-4 text-[#39ff14] font-poppins font-bold text-sm hover:underline"
                >
                  (540) 798-4479
                </a>
              </div>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
