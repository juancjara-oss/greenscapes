import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getServicePageBySlug, getAllServiceSlugs, servicePages } from '@/content/service-pages'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const SITE_URL = 'https://greenscapesva.com'
const OG_IMAGE = `${SITE_URL}/assets/landscaping-after.webp`

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = getServicePageBySlug(params.slug)
  if (!service) return {}
  const url = `${SITE_URL}/services/${params.slug}`
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      siteName: 'Greenscapes VA',
      title: service.metaTitle,
      description: service.metaDescription,
      images: [{ url: OG_IMAGE, width: 800, height: 600, alt: `${service.name} – Greenscapes VA Roanoke` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle,
      description: service.metaDescription,
      images: [OG_IMAGE],
    },
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServicePageBySlug(params.slug)
  if (!service) notFound()

  const otherServices = servicePages.filter((s) => s.slug !== service.slug)

  return (
    <>
      <Navbar />
      <main className="bg-[#050e07] min-h-screen">

        {/* Hero */}
        <div className="relative h-72 sm:h-96 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={service.image}
            alt={service.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#050e07]/80" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-20">
            <span className="text-[#f97316] font-poppins font-bold uppercase tracking-[0.3em] text-xs sm:text-sm mb-3">
              Our Services
            </span>
            <h1 className="text-4xl sm:text-6xl font-poppins font-black text-white leading-tight">
              {service.name}
            </h1>
            <p className="text-[#39ff14] font-poppins font-semibold text-base sm:text-lg mt-3"
              style={{ textShadow: '0 0 15px rgba(57,255,20,0.4)' }}>
              {service.tagline}
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
                ← All Services
              </Link>

              <div
                className="prose-greenscapes"
                dangerouslySetInnerHTML={{ __html: service.content }}
              />

              {/* CTA */}
              <div className="mt-12 bg-[#0d3b1e] border border-[#39ff14]/20 rounded-2xl p-8">
                <p className="text-[#39ff14] font-poppins font-bold uppercase tracking-widest text-xs mb-3">
                  Get a free estimate
                </p>
                <h3 className="text-white font-poppins font-black text-2xl mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-white/50 font-poppins text-sm mb-6">
                  Serving Roanoke, Salem, Vinton, Daleville, and the entire Roanoke Valley.
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
            <div className="lg:col-span-1">
              <div className="bg-white/4 border border-white/8 rounded-2xl p-6 sticky top-28">
                <h3 className="text-white font-poppins font-black text-sm uppercase tracking-widest mb-5">
                  Other Services
                </h3>
                <ul className="space-y-3">
                  {otherServices.map((s) => (
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

                <div className="border-t border-white/8 mt-6 pt-6">
                  <p className="text-white/35 font-poppins text-xs mb-3">Hours</p>
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
        </div>
      </main>
      <Footer />
    </>
  )
}
