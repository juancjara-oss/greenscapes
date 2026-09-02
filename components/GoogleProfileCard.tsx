// Links the website to the Google Business Profile.
//
// Why this exists: until Aug 2026 nothing on greenscapesva.com pointed at the
// Google listing — no map, no review link, and the schema's sameAs array held
// only Facebook/Instagram/YouTube. There was no machine-readable statement
// anywhere that this domain and the Greenscapes listing are the same entity.
//
// Deliberately NOT a Google Maps iframe. Greenscapes is a service-area business
// with no public address (see the NAP note in Footer.tsx), and a Maps embed has
// to pin somewhere — which would put Juan's home address back on the site, the
// exact thing the three-tier address posture exists to prevent. The embed also
// costs ~500KB against a mobile PageSpeed score that took real work to reach 93.
// The SEO value is in the outbound link and the sameAs entry, not the iframe.

// Visible rating text is allowed; self-serving aggregateRating *schema* is not
// (Google structured-data policy — see the note in app/layout.tsx). These are
// plain numbers on the page. Update them when the profile moves.
const GOOGLE_RATING = 4.5
const GOOGLE_REVIEW_COUNT = 29

// Derived from the g.page review shortlink's redirect target
// (ftid 0x884d0e359ce90577:0x5460af6cc453761f → cid 6080052378635302431).
export const GOOGLE_MAPS_URL = 'https://www.google.com/maps?cid=6080052378635302431'
export const GOOGLE_REVIEW_URL = 'https://g.page/r/CR92U8Rsr2BUEAI/review'

function Stars({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-0.5" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.max(0, Math.min(1, rating - i))
        return (
          <svg key={i} viewBox="0 0 20 20" className="w-4 h-4">
            <defs>
              <linearGradient id={`gs-star-${i}`}>
                <stop offset={`${fill * 100}%`} stopColor="#fbbc04" />
                <stop offset={`${fill * 100}%`} stopColor="#ffffff" stopOpacity="0.18" />
              </linearGradient>
            </defs>
            <path
              fill={`url(#gs-star-${i})`}
              d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.1l-4.94 2.6.94-5.5-4-3.9 5.53-.8z"
            />
          </svg>
        )
      })}
    </span>
  )
}

function GoogleG() {
  return (
    <svg viewBox="0 0 48 48" className="w-7 h-7 shrink-0" aria-hidden="true">
      <path fill="#4285F4" d="M45.1 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h11.8c-.5 2.7-2 5-4.4 6.6v5.5h7.1c4.1-3.8 6.6-9.4 6.6-16.1z" />
      <path fill="#34A853" d="M24 46c6 0 11-2 14.6-5.4l-7.1-5.5c-2 1.3-4.5 2.1-7.5 2.1-5.8 0-10.7-3.9-12.4-9.1H4.3v5.7C7.9 41 15.4 46 24 46z" />
      <path fill="#FBBC05" d="M11.6 28.1c-.4-1.3-.7-2.7-.7-4.1s.3-2.8.7-4.1v-5.7H4.3C2.8 17.1 2 20.4 2 24s.8 6.9 2.3 9.8l7.3-5.7z" />
      <path fill="#EA4335" d="M24 10.8c3.3 0 6.2 1.1 8.5 3.3l6.3-6.3C35 4.1 30 2 24 2 15.4 2 7.9 7 4.3 14.2l7.3 5.7c1.7-5.2 6.6-9.1 12.4-9.1z" />
    </svg>
  )
}

export default function GoogleProfileCard() {
  return (
    <div className="border-t border-white/5 pt-8 pb-8">
      <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">

        {/* The whole logo/stars block is the link, not just the buttons — the
            star row is what people actually tap. */}
        <a
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Greenscapes VA on Google — rated ${GOOGLE_RATING} from ${GOOGLE_REVIEW_COUNT} reviews`}
          className="flex items-center gap-4 -m-2 p-2 rounded-lg hover:bg-white/5 transition-colors duration-300"
        >
          <GoogleG />
          <div>
            <div className="text-white font-poppins font-black text-sm uppercase tracking-widest">
              Greenscapes VA on Google
            </div>
            <div className="flex items-center gap-2 mt-1.5">
              <Stars rating={GOOGLE_RATING} />
              <span className="text-white/55 font-poppins text-sm">
                {GOOGLE_RATING} from {GOOGLE_REVIEW_COUNT} reviews
              </span>
            </div>
          </div>
        </a>

        <div className="flex flex-wrap gap-3 md:ml-auto">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full border border-white/15 text-white/70 font-poppins text-sm hover:border-white/40 hover:text-white transition-colors duration-300"
          >
            Read our Google reviews
          </a>
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-[#39ff14] text-[#050e07] font-poppins font-bold text-sm hover:bg-[#5cff45] transition-colors duration-300"
          >
            Leave a review
          </a>
        </div>

      </div>
    </div>
  )
}
