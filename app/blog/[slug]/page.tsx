import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPostBySlug, getAllSlugs, getRelatedPosts } from '@/content/posts'
import { getServicePageBySlug } from '@/content/service-pages'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const SITE_URL = 'https://greenscapesva.com'
const OG_IMAGE = `${SITE_URL}/assets/landscaping-after.webp`

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  const url = `${SITE_URL}/blog/${params.slug}`
  return {
    title: `${post.title} | Greenscapes VA Blog`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      siteName: 'Greenscapes VA',
      title: `${post.title} | Greenscapes VA Blog`,
      description: post.excerpt,
      publishedTime: post.date,
      images: [{ url: OG_IMAGE, width: 800, height: 600, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Greenscapes VA Blog`,
      description: post.excerpt,
      images: [OG_IMAGE],
    },
  }
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  // Hub-and-spoke internal linking: every post points back at the service
  // page it supports, and at its siblings. Without this the blog is an
  // island — 12k words of aeration content that never reached
  // /services/aeration-overseeding/.
  const service = getServicePageBySlug(post.service)
  const relatedPosts = getRelatedPosts(post, 3)

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    image: OG_IMAGE,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`,
    },
    author: {
      '@type': 'Organization',
      name: 'Greenscapes VA',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Greenscapes VA',
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />
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

          {/* Service the article supports — the link that was missing */}
          {service && (
            <div className="mt-14 bg-white/4 border border-white/8 rounded-2xl p-7">
              <p className="text-[#39ff14] font-poppins font-bold uppercase tracking-widest text-xs mb-3">
                The service behind this article
              </p>
              <h3 className="text-white font-poppins font-black text-xl mb-3">
                {service.name} in Roanoke, VA
              </h3>
              <p className="text-white/50 font-poppins text-sm mb-5 leading-relaxed">
                {service.metaDescription}
              </p>
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-2 text-[#39ff14] font-poppins font-bold text-sm hover:underline"
              >
                See our {service.name.toLowerCase()} service
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          )}

          {/* Related reading — siblings in the same topic cluster */}
          {relatedPosts.length > 0 && (
            <div className="mt-8">
              <h3 className="text-white font-poppins font-black text-sm uppercase tracking-widest mb-5">
                Related Reading
              </h3>
              <ul className="space-y-3">
                {relatedPosts.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/blog/${p.slug}`}
                      className="group flex items-start gap-3 bg-white/[0.03] border border-white/8 rounded-xl p-4 hover:border-[#39ff14]/40 transition-colors duration-200"
                    >
                      <span className="text-[#39ff14] text-xs mt-1" aria-hidden="true">→</span>
                      <span>
                        <span className="block text-white font-poppins font-bold text-sm leading-snug group-hover:text-[#39ff14] transition-colors duration-200">
                          {p.title}
                        </span>
                        <span className="block text-white/35 font-poppins text-xs mt-1">
                          {p.category} · {p.readTime}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA */}
          <div className="mt-8 bg-[#0d3b1e] border border-[#39ff14]/20 rounded-2xl p-8 text-center">
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
