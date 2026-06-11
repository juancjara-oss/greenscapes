import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'
import ServiceWorkerRegistration from '@/components/ServiceWorkerRegistration'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

const SITE_URL = 'https://greenscapesva.com'
const OG_IMAGE = `${SITE_URL}/assets/landscaping-after.webp`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Greenscapes VA – Lawn Care & Landscaping | Roanoke, Virginia',
  description:
    'Premier lawn care and landscaping services in Roanoke, VA. Lawn mowing, landscape design, hardscaping, irrigation systems, and seasonal cleanup. Call (540) 798-4479 for a free estimate.',
  keywords:
    'lawn care Roanoke VA, landscaping Roanoke Virginia, grounds maintenance Roanoke, lawn mowing Roanoke, hardscaping Roanoke, landscape design Virginia, seasonal cleanup Roanoke, irrigation systems Roanoke',
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: 'N7NCbP5pN2Yc9RPjp2anIwWH7izEfckiWQBjMKTsx-8',
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Greenscapes VA',
    title: 'Greenscapes VA – Lawn Care & Landscaping | Roanoke, Virginia',
    description:
      'Premier lawn care and landscaping in Roanoke, VA. Mowing, design, hardscaping, irrigation & more. Same-week service. Call (540) 798-4479.',
    images: [{ url: OG_IMAGE, width: 800, height: 600, alt: 'Greenscapes VA – Landscaping in Roanoke Virginia' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Greenscapes VA – Lawn Care & Landscaping | Roanoke, Virginia',
    description:
      'Premier lawn care and landscaping in Roanoke, VA. Mowing, design, hardscaping, irrigation & more. Same-week service. Call (540) 798-4479.',
    images: [OG_IMAGE],
  },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LandscapeService',
  name: 'Greenscapes VA',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: OG_IMAGE,
  telephone: '+15407984479',
  email: 'prettylawn@greenscapesva.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '428 Liberty Rd NE',
    addressLocality: 'Roanoke',
    addressRegion: 'VA',
    postalCode: '24012',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 37.2796,
    longitude: -79.9414,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '10:00',
      closes: '16:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Roanoke', addressRegion: 'VA' },
    { '@type': 'City', name: 'Salem', addressRegion: 'VA' },
    { '@type': 'City', name: 'Vinton', addressRegion: 'VA' },
    { '@type': 'City', name: 'Daleville', addressRegion: 'VA' },
    { '@type': 'City', name: 'Montvale', addressRegion: 'VA' },
    { '@type': 'City', name: 'Blue Ridge', addressRegion: 'VA' },
    { '@type': 'City', name: 'Cloverdale', addressRegion: 'VA' },
    { '@type': 'City', name: 'Troutville', addressRegion: 'VA' },
    { '@type': 'City', name: 'Boones Mill', addressRegion: 'VA' },
    { '@type': 'City', name: 'Catawba', addressRegion: 'VA' },
    { '@type': 'City', name: 'Smith Mountain Lake', addressRegion: 'VA' },
    { '@type': 'AdministrativeArea', name: 'Botetourt County', addressRegion: 'VA' },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '5',
    bestRating: '5',
    worstRating: '1',
  },
  priceRange: '$$',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Landscaping Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lawn Mowing & Edging' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hedge & Shrub Trimming' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Landscape Design' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Irrigation Systems' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Seasonal Cleanup' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hardscaping & Patios' } },
    ],
  },
  sameAs: [
    'https://www.facebook.com/GreenScapesVA',
    'https://www.instagram.com/greenscapesva',
    'https://www.youtube.com/@greenscapesvalawncare780',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        {/* Google tag (gtag.js) – Google Ads AW-1065611469 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-1065611469"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-1065611469');
            `,
          }}
        />
        {/* Conversion: click on phone or WhatsApp link */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('click', function (e) {
                var a = e.target && e.target.closest ? e.target.closest('a') : null;
                if (!a) return;
                var h = a.getAttribute('href') || '';
                if (h.indexOf('tel:') === 0 || h.indexOf('wa.me') !== -1 || h.indexOf('api.whatsapp.com') !== -1) {
                  gtag('event', 'conversion', {
                    send_to: 'AW-1065611469/yT6ZCLTC87wcEM3hj_wD',
                    value: 1.0,
                    currency: 'USD',
                  });
                }
              });
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#050e07] font-poppins">
        {children}
        <WhatsAppButton />
        <ServiceWorkerRegistration />
      </body>
    </html>
  )
}
