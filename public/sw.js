// ─── Greenscapes VA — Service Worker ────────────────────────────────────────
// Version is auto-replaced by scripts/update-sw-version.js on every build.
// DO NOT edit CACHE_VERSION manually.
const CACHE_VERSION = 'v1783346605741'
const CACHE_NAME = `greenscapes-${CACHE_VERSION}`

// ── Install: activate immediately, no waiting ────────────────────────────────
self.addEventListener('install', () => {
  self.skipWaiting()
})

// ── Activate: wipe every cache that isn't the current version ────────────────
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  )
})

// ── Fetch: different cache strategy per resource type ────────────────────────
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Only handle GET requests on the same origin
  if (request.method !== 'GET' || url.origin !== location.origin) return

  // ── Next.js hashed static assets (_next/static/…)
  // Filenames contain a content hash → safe to cache forever
  if (url.pathname.startsWith('/_next/static/')) {
    event.respondWith(cacheFirst(request))
    return
  }

  // ── Images & icons → cache-first, refresh in background
  if (
    request.destination === 'image' ||
    /\.(png|jpe?g|gif|svg|webp|ico)$/i.test(url.pathname)
  ) {
    event.respondWith(cacheFirstWithRefresh(request))
    return
  }

  // ── Fonts → cache-first (they never change between deploys)
  if (
    request.destination === 'font' ||
    /\.(woff2?|ttf|otf)$/i.test(url.pathname)
  ) {
    event.respondWith(cacheFirst(request))
    return
  }

  // ── HTML pages → network-first so users always see the latest version
  event.respondWith(networkFirst(request))
})

// ── Helpers ──────────────────────────────────────────────────────────────────

/** Serve from cache; if not cached, fetch, store, and return. */
async function cacheFirst(request) {
  const cached = await caches.match(request)
  if (cached) return cached

  const response = await fetch(request)
  const cache = await caches.open(CACHE_NAME)
  cache.put(request, response.clone())
  return response
}

/** Serve from cache immediately; update the cache in the background. */
async function cacheFirstWithRefresh(request) {
  const cache = await caches.open(CACHE_NAME)
  const cached = await cache.match(request)

  const fetchPromise = fetch(request).then((response) => {
    cache.put(request, response.clone())
    return response
  })

  return cached || fetchPromise
}

/** Try the network first; fall back to cache if offline. */
async function networkFirst(request) {
  const cache = await caches.open(CACHE_NAME)
  try {
    const response = await fetch(request)
    cache.put(request, response.clone())
    return response
  } catch {
    const cached = await cache.match(request)
    return cached || Response.error()
  }
}
