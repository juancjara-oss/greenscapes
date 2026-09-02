import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getLocationPageBySlug, getAllLocationSlugs, locationPages } from '@/content/location-pages'
import { servicePages } from '@/content/service-pages'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const SITE_URL = 'https://greenscapesva.com'
const OG_IMAGE = `${SITE_URL}/assets/landscaping-after.webp`

export function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const location = getLocationPageBySlug(params.slug)
  if (!location) return {}
  const url = `${SITE_URL}/locations/${params.slug}`
  return {
    title: location.metaTitle,
    description: location.metaDescription,
    keywords: location.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      siteName: 'Greenscapes VA',
      title: location.metaTitle,
      description: location.metaDescription,
      images: [{ url: OG_IMAGE, width: 800, height: 600, alt: `Lawn Care & Landscaping in ${location.city}, ${location.state} – Greenscapes VA` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: location.metaTitle,
      description: location.metaDescription,
      images: [OG_IMAGE],
    },
  }
}

export default function LocationPage({ params }: { params: { slug: string } }) {
  const location = getLocationPageBySlug(params.slug)
  if (!location) notFound()

  const otherLocations = locationPages.filter((l) => l.slug !== location.slug)
  const url = `${SITE_URL}/locations/${location.slug}/`

  // Page-level schema. The root layout emits one LocalBusiness block that is
  // identical on every page, so on its own it tells Google nothing about which
  // city this page is about. This scopes the offering to the city and points
  // the provider back at the single business node (@id in app/layout.tsx).
  const locationJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: `Lawn Care & Landscaping in ${location.city}, ${location.state}`,
        serviceType: 'Lawn care and landscaping',
        provider: { '@id': `${SITE_URL}/#business` },
        areaServed: {
          '@type': 'City',
          name: location.city,
          addressRegion: location.state,
          addressCountry: 'US',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `Services in ${location.city}, ${location.state}`,
          itemListElement: servicePages.map((s) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: s.name,
              url: `${SITE_URL}/services/${s.slug}/`,
            },
          })),
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumbs`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${SITE_URL}/#services` },
          { '@type': 'ListItem', position: 3, name: `${location.city}, ${location.state}`, item: url },
        ],
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationJsonLd) }}
      />
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
            {/* The city name alone was the entire H1 — the strongest on-page
                relevance signal a location page has, spent on a bare place name.
                The keyword line is inside the h1 on purpose so it reads
                "Lawn Care & Landscaping in Salem, VA" to a crawler, while the
                city still dominates visually. */}
            <h1 className="text-4xl sm:text-6xl font-poppins font-black text-white leading-tight">
              <span className="block text-base sm:text-xl font-bold text-white/70 tracking-tight mb-1">
                Lawn Care &amp; Landscaping in
              </span>
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
                  {/* A hardcoded "Roanoke, VA (main office)" row used to sit here.
                      Two problems: Roanoke has its own location page, so it was
                      already rendered above by otherLocations — a duplicate — and
                      "main office" contradicts the service-area posture (no public
                      address anywhere; see the NAP note in Footer.tsx). */}
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
                <p className="text-white font-poppins text-sm">Open 24 hours</p>
                <p className="text-white/35 font-poppins text-sm">7 days a week</p>
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
