import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'
import ServiceWorkerRegistration from '@/components/ServiceWorkerRegistration'
import { servicePages } from '@/content/service-pages'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

const SITE_URL = 'https://greenscapesva.com'
const OG_IMAGE = `${SITE_URL}/assets/daleville-lawn-back-mower.webp`

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
  '@type': ['LocalBusiness', 'LandscapeService'],
  // Stable entity node. Every page emits this same block, so without an @id
  // Google sees 41 anonymous LocalBusinesses instead of one business described
  // 41 times. Service/Breadcrumb schema on the inner pages points back here.
  '@id': `${SITE_URL}/#business`,
  name: 'Greenscapes VA',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: OG_IMAGE,
  telephone: '+15407984479',
  email: 'prettylawn@greenscapesva.com',
  // 2005 es el año real de fundación (BBB: "Business Started 2/27/2005").
  // La incorporación como Ltd. fue después, el 6/10/2008 — no usar esa.
  foundingDate: '2005-02-27',
  // Service-area business: the Google Business Profile is set to
  // "No location; deliveries and home services only", so no street address is
  // published anywhere. Keep this city/region-level only — adding a street
  // address back would contradict the GBP and Google's SAB guidelines.
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Roanoke',
    addressRegion: 'VA',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 37.2796,
    longitude: -79.9414,
  },
  // Abierto 24/7, igual que el Google Business Profile y Yelp. Si esto
  // cambia, hay que cambiarlo en los tres lados a la vez — un horario
  // distinto entre el sitio y el GBP es inconsistencia de NAP.
  // 00:00–23:59 es la convención de schema.org para "24 horas".
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
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
  // NOTE: no aggregateRating here on purpose. Google's structured data policy
  // disallows self-serving review markup (ratings a business publishes about
  // itself). Real ratings come from the Google Business Profile instead.
  priceRange: '$$',
  // Driven from content/service-pages.ts — same reason the Footer list is.
  // This was hardcoded to six services and had silently drifted: it omitted
  // Aeration & Overseeding (the service actively being marketed), plus mulch,
  // fertilization, commercial and HOA grounds. Add a service there and it
  // appears here, in the footer, and in the sitemap together.
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Lawn Care & Landscaping Services',
    itemListElement: servicePages.map((s) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: s.name,
        url: `${SITE_URL}/services/${s.slug}/`,
      },
    })),
  },
  // sameAs is how Google reconciles "this website" with "this business listing".
  // The Google Maps entry is the important one — until Aug 2026 it was missing,
  // so nothing on the site claimed the GBP as the same entity.
  //
  // BBB is deliberately absent: that profile currently publishes a street
  // address and two wrong phone numbers, and sameAs would assert it as
  // authoritative. Add it once the listing is corrected.
  sameAs: [
    'https://www.google.com/maps?cid=6080052378635302431',
    'https://www.facebook.com/GreenScapesVA',
    'https://www.instagram.com/greenscapesva',
    'https://www.youtube.com/@greenscapesvalawncare780',
    'https://www.yelp.com/biz/greenscapes-roanoke-3',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        {/* Google tag (gtag.js) – GA4 G-PVJ7L46TMT + Google Ads AW-1065611469 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-PVJ7L46TMT"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PVJ7L46TMT');
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
                  gtag('event', 'contacto_whatsapp', {
                    metodo: h.indexOf('tel:') === 0 ? 'telefono' : 'whatsapp',
                    pagina: location.pathname
                  });
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
        <script src="//code.tidio.co/7om7uo7gt9xlwsx2cdj4ttcbxyuq3wzx.js" async></script>
      </body>
    </html>
  )
}
