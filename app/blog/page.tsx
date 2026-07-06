import Link from 'next/link'
import { getPublishedPosts } from '@/content/posts'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const SITE_URL = 'https://greenscapesva.com'
const OG_IMAGE = `${SITE_URL}/assets/landscaping-after.webp`

export const metadata: Metadata = {
  title: 'Blog – Lawn Care & Landscaping Tips | Greenscapes VA Roanoke',
  description: 'Expert lawn care and landscaping tips for homeowners in Roanoke, Virginia. Seasonal advice, how-to guides, and local insights from Greenscapes VA.',
  keywords: 'lawn care tips roanoke va, landscaping advice roanoke virginia, roanoke lawn care guide, lawn care blog virginia',
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/blog`,
    siteName: 'Greenscapes VA',
    title: 'Blog – Lawn Care & Landscaping Tips | Greenscapes VA Roanoke',
    description: 'Expert lawn care and landscaping tips for homeowners in Roanoke, Virginia. Seasonal advice, how-to guides, and local insights.',
    images: [{ url: OG_IMAGE, width: 800, height: 600, alt: 'Greenscapes VA – Lawn Care Blog' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog – Lawn Care & Landscaping Tips | Greenscapes VA Roanoke',
    description: 'Expert lawn care and landscaping tips for homeowners in Roanoke, Virginia. Seasonal advice, how-to guides, and local insights.',
    images: [OG_IMAGE],
  },
}

export default function BlogPage() {
  const sorted = getPublishedPosts()

  return (
    <>
      <Navbar />
      <main className="bg-[#050e07] min-h-screen pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-[#f97316] font-poppins font-bold uppercase tracking-[0.3em] text-xs sm:text-sm">
              Tips & Guides
            </span>
            <h1 className="text-5xl sm:text-6xl font-poppins font-black text-white mt-3">
              The <span className="text-[#39ff14]">Blog</span>
            </h1>
            <p className="text-white/45 font-poppins mt-4 text-base max-w-xl mx-auto">
              Lawn care and landscaping advice for homeowners in Roanoke, Virginia.
            </p>
          </div>

          {/* Post grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {sorted.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white/4 border border-white/8 hover:border-[#39ff14]/50 rounded-2xl p-7 transition-all duration-300 hover:shadow-[0_0_25px_rgba(57,255,20,0.08)] flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[#39ff14] font-poppins font-bold text-xs uppercase tracking-widest">
                    {post.category}
                  </span>
                  <span className="text-white/25 text-xs font-poppins">·</span>
                  <span className="text-white/35 font-poppins text-xs">{post.readTime}</span>
                </div>
                <h2 className="text-white font-poppins font-black text-xl leading-snug mb-3 group-hover:text-[#39ff14] transition-colors duration-200">
                  {post.title}
                </h2>
                <p className="text-white/50 font-poppins text-sm leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-6">
                  <span className="text-white/25 font-poppins text-xs">
                    {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                  <span className="text-[#39ff14] font-poppins font-bold text-sm group-hover:translate-x-1 transition-transform duration-200">
                    Read more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
