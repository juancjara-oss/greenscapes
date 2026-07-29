import type { MetadataRoute } from 'next'
import { getPublishedPosts } from '@/content/posts'
import { getAllServiceSlugs } from '@/content/service-pages'
import { getAllLocationSlugs } from '@/content/location-pages'

const SITE_URL = 'https://greenscapesva.com'

// next.config.mjs sets trailingSlash: true, so every URL here must end in "/"
// to match what the static export actually serves.
const url = (path: string) => `${SITE_URL}${path}`

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  // getPublishedPosts() applies the same date filter as generateStaticParams,
  // so future-dated posts are never listed before their page exists.
  const posts = getPublishedPosts()

  const latestPostDate = posts.length > 0 ? new Date(posts[0].date) : new Date()

  return [
    {
      url: url('/'),
      lastModified: latestPostDate,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: url('/blog/'),
      lastModified: latestPostDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...getAllServiceSlugs().map((slug) => ({
      url: url(`/services/${slug}/`),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...getAllLocationSlugs().map((slug) => ({
      url: url(`/locations/${slug}/`),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...posts.map((post) => ({
      url: url(`/blog/${post.slug}/`),
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]
}
