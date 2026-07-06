const highlights = [
  'Complete landscape overhauls from design to final installation',
  'Ongoing maintenance contracts for homes and businesses',
  'Same-week response for seasonal and emergency services',
  'Fully licensed, insured, and bonded professionals',
  'Eco-friendly products and sustainable practices throughout',
]

export default function PortfolioVideo() {
  return (
    <section id="portfolio" className="bg-[#0d3b1e] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 section-fade-up">
          <span className="text-[#f97316] font-poppins font-bold uppercase tracking-[0.3em] text-xs sm:text-sm">
            Our Work
          </span>
          <h2 className="text-5xl sm:text-6xl font-poppins font-black text-white mt-3">
            Featured <span className="text-[#39ff14]">Projects</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Video with neon left accent */}
          <div className="relative pl-5">
            {/* Neon vertical accent */}
            <div
              className="absolute left-0 top-4 bottom-4 w-1 rounded-full bg-[#39ff14]"
              style={{ boxShadow: '0 0 12px #39ff14, 0 0 24px rgba(57,255,20,0.4)' }}
            />

            <div className="rounded-2xl overflow-hidden aspect-video bg-[#050e07] relative group">
              <iframe
                src="https://www.youtube.com/embed/Gaglq0lvs04?rel=0&modestbranding=1"
                title="Greenscapes VA – Portfolio"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-16 h-16 rounded-full bg-[#39ff14]/10 border border-[#39ff14]/30 flex items-center justify-center">
                  <svg className="w-7 h-7 text-[#39ff14] ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-3xl sm:text-4xl font-poppins font-black text-white leading-tight mb-5">
              Transforming Roanoke Virginia,{' '}
              <span className="text-[#39ff14]">One Property at a Time</span>
            </h3>
            <p className="text-white/60 font-poppins leading-relaxed mb-7">
              From intimate residential gardens to sprawling commercial properties, our team delivers
              exceptional results with precision and care. Every project is a testament to our
              unwavering commitment to excellence.
            </p>

            <ul className="space-y-3 mb-9">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/80 font-poppins text-sm">
                  <span className="text-[#39ff14] text-base mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-[#f97316] text-white font-poppins font-black text-base rounded-full hover:shadow-[0_0_25px_rgba(249,115,22,0.6)] transition-all duration-300 hover:scale-105"
            >
              See Full Portfolio →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
