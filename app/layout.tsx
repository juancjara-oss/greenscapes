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

export const metadata: Metadata = {
  title: 'Greenscapes VA – Grounds Maintenance | Roanoke Virginia',
  description:
    'Premier lawn care and landscaping services in Roanoke Virginia. Lawn mowing, landscape design, hardscaping, irrigation systems, and seasonal cleanup.',
  keywords: 'lawn care, landscaping, grounds maintenance, Roanoke Virginia, lawn mowing, landscape design',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="bg-[#050e07] font-poppins">
        {children}
        <WhatsAppButton />
        <ServiceWorkerRegistration />
      </body>
    </html>
  )
}
