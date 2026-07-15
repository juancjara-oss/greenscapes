# CLAUDE.md

This file gives Claude Code context about the project at the start of every session.
Update it whenever conventions or important decisions change.

## Project

Marketing website for **Greenscapes VA**, a lawn care & landscaping company in Virginia.

- Live site: https://greenscapesva.com
- Stack: Next.js 14 (App Router, **static export**), TypeScript, Tailwind CSS, Framer Motion
- Hosting: Contabo VPS (Ubuntu + Nginx), deployed via GitHub Actions → rsync
- Full details: `README.md` and `docs/` (tech-stack, deployment, infrastructure, vps-setup, component-map)

## Commands

```bash
npm run dev     # local dev server at http://localhost:3000
npm run build   # static export to /out (also versions the service worker)
npm run lint    # eslint
```

There is no test suite. Verify changes by building (`npm run build`) and checking pages in dev mode.

## Architecture notes

- **Static export**: `next.config.mjs` sets `output: 'export'`. Everything must be statically renderable — no server components with dynamic data, no API routes, no `next/image` optimization (images use plain `<img>`).
- **Content lives in TypeScript files**, not a CMS:
  - `content/posts.ts` — blog posts (HTML strings in `content`)
  - `content/service-pages.ts` — service landing pages
  - `content/location-pages.ts` — location/SEO landing pages
  - Dynamic routes (`app/blog/[slug]`, `app/services/[slug]`, `app/locations/[slug]`) generate pages from these files via `generateStaticParams`.
- **Components** are in `components/` — one file per homepage section (Hero, Services, Testimonials, etc.). See `docs/component-map.md`.
- **Service worker** (`public/sw.js`) is auto-versioned by `scripts/update-sw-version.js` during build. Don't edit the version stamp manually.
- Asset filenames must be lowercase — `scripts/lowercase-assets.js` enforces this at build time.

## Conventions

- `main` is production only — never commit directly to it. Work on branches named `YYYYMMDDHHmm_short-description` (see README for the full workflow). Claude Code sessions may also use their auto-generated `claude/...` branches.
- Site content is customer-facing English; internal docs/README are mostly Spanish. Either language is fine in docs.
- Blog posts target local SEO (Roanoke / Northern Virginia lawn care keywords) — keep that focus when writing content.
- Never commit secrets (SSH keys, server credentials). Infra details live in `docs/` for reference only.

## Session notes

Use this section for in-progress work or decisions worth remembering between sessions.

- 2026-07-10: Created this CLAUDE.md so remote sessions (mobile/web) start with project context.
