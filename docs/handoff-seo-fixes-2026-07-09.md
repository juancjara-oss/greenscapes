# Handoff: SEO audit fixes — ready to build & deploy

Prepared by Claude (Cowork), 2026-07-09. Cowork doesn't have Hostinger/SSH/FTP access, so the remaining steps need to run in Claude Code, which has the local machine access to actually deploy.

## Context

An SEO audit of greenscapesva.com found the live site is running a stale build — noticeably behind what's in this repo. The local source already has fixes for most of what the audit flagged (full sitemap, LocalBusiness schema, all 5 location pages, 15 scheduled blog posts) that simply never got deployed. On top of that gap, two small content edits were made directly in this session.

## What was changed in this session (uncommitted, not yet built or pushed)

Run `git status` / `git diff` to see these for yourself:

1. **`components/Hero.tsx`** — Added a keyword-bearing subline under the hero tagline: "Lawn Care & Landscaping in Roanoke, Virginia". The original creative tagline ("We Don't Just Cut Grass...") is untouched; this just adds an SEO-relevant line beneath it.

2. **`content/posts.ts`** — Added two new blog posts (these were genuine content gaps, not already covered by the existing 15 posts):
   - `lawn-care-cost-roanoke-va` — "How Much Does Lawn Care Cost in Roanoke, VA?" (dated 2026-08-24)
   - `how-to-choose-lawn-care-company-roanoke-va` — "How to Choose a Lawn Care Company in Roanoke, VA" (dated 2026-08-31)

3. **`public/sitemap.xml`** — Added `<url>` entries for both new posts above.

4. **`public/sw.js`** — Modified incidentally by `scripts/update-sw-version.js`, which runs automatically as part of `npm run build` and bumps the service worker cache-busting version. Not a manual edit — harmless, just note it wasn't hand-written.

**Not verified by a full production build.** Cowork's sandbox couldn't complete `npm run build` (kept exceeding available time). The two edited TypeScript/TSX files were checked with the TypeScript compiler (transpile-only, no type errors) and `public/sitemap.xml` was validated as well-formed XML — but neither of those catches everything a real Next.js build would. **Run the build yourself before pushing.**

## What Claude Code should do

Tell Claude Code (in the actual project directory, with your Hostinger/git access):

1. `cd` into the project and run `npm run build`. Confirm it completes cleanly and check the output — especially that `out/blog/lawn-care-cost-roanoke-va/` and `out/blog/how-to-choose-lawn-care-company-roanoke-va/` get generated, and that the hero renders correctly.
2. Spot-check `out/` for the other content that's already in this repo but never made it live: all 12 service pages, all 5 location pages, and the ~15 existing blog posts (aeration, fertilization schedule, mulching, hedges, watering, hardscaping, fescue, irrigation, overseeding, crabgrass, lighting, grass types, winter prep, brown patch fungus, spring checklist). These should already be correct in source — the point of the build+deploy is to actually ship them, since the live site currently only shows 2 blog posts and is missing 6 of the 12 service pages from its sitemap.
3. Commit and push:
   ```
   git add .
   git commit -m "Add pricing + how-to-choose blog posts, hero keyword line, sitemap update"
   git push
   ```
   (Follow the branching convention in the main README if you want a feature branch first — `main` is supposed to be production-only per that doc.)
4. Deploy the built `out/` folder to Hostinger using whatever method is currently set up (Hostinger Git deployment in hPanel, manual upload via File Manager, or FTP/SFTP — confirm which one is actually configured now, since the docs in this repo still reference an old Contabo VPS + Vercel setup that's no longer accurate).
5. After deploy, verify live:
   - `https://greenscapesva.com/sitemap.xml` should list all service, location, and blog URLs (19+ entries).
   - `https://greenscapesva.com/blog/` should show more than 2 posts.
   - View source on the homepage and confirm the `application/ld+json` LocalBusiness schema block is present.
6. Once confirmed live, it's worth updating `docs/infrastructure.md`, `docs/deployment.md`, and `docs/tech-stack.md` — they still describe Contabo VPS + Vercel, which doesn't match the current Hostinger + GitHub setup.

## Not fixed (needs manual/off-site action, can't be done from code)

- **Google Business Profile** — confirm it's claimed, verified, and fully filled out. This matters more than the website for local map-pack rankings.
- **Local backlinks** — every competitor checked (Fresh Cuts, Varsity, Richards, Sellers, TS Landscaping, Slate Enterprise) has a near-zero Ahrefs Domain Rating, so a handful of real local links (Roanoke Chamber of Commerce, supplier/partner sites, local sponsorships) would meaningfully separate Greenscapes from the pack.
- **Ahrefs plan** — the connected Ahrefs account returned "insufficient plan" for keyword volume, backlink, and competitor-keyword endpoints. Only the free domain-rating endpoint worked. Upgrade if you want real keyword/volume data instead of directional estimates.
