# Texas Pro Plumbing — Project Context & Rules

## 1. Project Overview & Brand
* **Brand Name**: `Texas Pro Plumbing`
* **Domain**: `https://www.texasproplumbing.com`
* **Phone Number**: `(800) 555-7586` (No vanity `PLUMB`, numerical only)
* **Design System**: Plumbzo-inspired clean modern aesthetic with brand orange (`#fe5922`), dark slate (`#111827`), warm backgrounds (`#f8f9f8`), and white cards (`#ffffff`).
* **Source of Truth**: `src/data/pagesData.js` and `src/data/pagesData.json` (All 25 core production pages).

## 2. Key User Directives & Established Decisions
1. **Hero Section**:
   - Short, punchy 2-line intro paragraph.
   - H1 heading balanced to wrap in 2–3 lines max.
   - Hero photo: Friendly male master plumber repairing sink pipes (`/images/hero_plumber_sink.jpg`).
   - Trust badges: Clean avatar social proof cluster. No floating badge overlays or top pill badges.
2. **Buttons & CTAs**:
   - **No telephone icons or emojis** in any call buttons. All call buttons display strictly clean typography (e.g., `Call (800) 555-7586` or `(800) 555-7586`).
   - Header CTA: Strictly the phone number button `(800) 555-7586`.
3. **Core Services Grid**:
   - Exactly 7 services.
   - Card descriptions standardized to equal concise word counts for uniform card height.
   - Card titles do NOT have numbers (no `1.`, `2.`, etc.).
4. **Sections Removed per User Request**:
   - Full-width orange stats ribbon removed.
   - Emergency banner section removed.
   - 2-column "Book Your Service Now" intake section removed from homepage.
   - Section pill badges (e.g., `FAQ & Answers`, `Texas Climate & Geology`, `Master Capabilities`) removed.
5. **Footer**:
   - Brand name: `Texas Pro Plumbing`.
   - Column 2 heading: `Plumbing Services`.
   - Column 4: Clean `Quick Links` with direct phone button.
   - Bottom copyright line: `© 2026 Texas Pro Plumbing. All Rights Reserved.` (licensing text removed).
6. **SEO & Deployment**:
   - Canonical URL: `https://www.texasproplumbing.com/` (with `www`).
   - `public/robots.txt` and `public/sitemap.xml` configured for search engines.
   - `vercel.json` configured for SPA routing rewrites.
   - GitHub Repo: `https://github.com/mahabubkabir40-ai/texas-pro-plumbing`
