import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Services from '@/components/Services'
import PortfolioVideo from '@/components/PortfolioVideo'
import BeforeAfter from '@/components/BeforeAfter'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import ContactStrip from '@/components/ContactStrip'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <PortfolioVideo />
      <BeforeAfter />
      <About />
      <Testimonials />
      <ContactStrip />
      <Footer />
    </main>
  )
}
