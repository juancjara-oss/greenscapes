import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPostBySlug, getAllSlugs } from '@/content/posts'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} | Greenscapes VA Blog`,
    description: post.excerpt,
  }
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <>
      <Navbar />
      <main className="bg-[#050e07] min-h-screen pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/35 hover:text-[#39ff14] font-poppins text-sm transition-colors duration-200 mb-10"
          >
            ← Back to Blog
          </Link>

          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[#39ff14] font-poppins font-bold text-xs uppercase tracking-widest">
                {post.category}
              </span>
              <span className="text-white/25 text-xs">·</span>
              <span className="text-white/35 font-poppins text-xs">{post.readTime}</span>
              <span className="text-white/25 text-xs">·</span>
              <span className="text-white/35 font-poppins text-xs">
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-poppins font-black text-white leading-tight">
              {post.title}
            </h1>
            <div className="mt-6 h-1 w-16 bg-[#39ff14] rounded-full" style={{ boxShadow: '0 0 10px #39ff14' }} />
          </div>

          {/* Content */}
          <div
            className="prose-greenscapes"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA */}
          <div className="mt-14 bg-[#0d3b1e] border border-[#39ff14]/20 rounded-2xl p-8 text-center">
            <p className="text-[#39ff14] font-poppins font-bold uppercase tracking-widest text-xs mb-3">
              Ready to get started?
            </p>
            <h3 className="text-white font-poppins font-black text-2xl mb-4">
              Get a Free Estimate Today
            </h3>
            <p className="text-white/50 font-poppins text-sm mb-6">
              Serving Roanoke, Salem, Vinton, Daleville and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+15407984479"
                className="px-7 py-3 bg-[#39ff14] text-[#050e07] font-poppins font-black text-sm rounded-full hover:shadow-[0_0_25px_rgba(57,255,20,0.5)] transition-all duration-300"
              >
                (540) 798-4479
              </a>
              <a
                href="/#contact"
                className="px-7 py-3 border-2 border-[#f97316] text-[#f97316] font-poppins font-black text-sm rounded-full hover:bg-[#f97316] hover:text-white transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
