# Search Console Indexing Fix

- [x] STEP 1: Investigate — determine actual structure of FAQ, How It Works, Features
- [x] STEP 2: Fix sitemap.xml based on findings
- [x] STEP 3: Fix or remove reliance on 404.html JS redirect for real pages
- [x] STEP 4: Verify canonical tags across all pages
- [x] STEP 5: Ensure vite-plugin-prerender covers every real route
- [x] STEP 6: Rebuild and verify prerendered HTML output
- [x] STEP 7: Commit, push, resubmit sitemap, request re-indexing

---

## STEP 1 — Investigation Findings

### 1. Is FAQ a section rendered inline on the homepage (with an id="faq" anchor) or a separate route/page component?
**Finding:** FAQ is a **separate route and page component**.
- `src/App.tsx` defines `<Route path="/faq" element={<FAQPage />} />`.
- `src/pages/FAQPage.tsx` renders `<FAQ />` wrapped with header, back button, and download CTA.
- `src/pages/Home.tsx` does **not** render the `<FAQ />` component or any `#faq` section inline.
- Both `Navbar.tsx` and `Footer.tsx` link directly to `/faq` via `<Link to="/faq">`.

### 2. Is HowItWorks a section on the homepage or a separate route?
**Finding:** HowItWorks exists as **both** an inline summary and a dedicated standalone route.
- On the homepage (`src/pages/Home.tsx`), `<HowItWorks />` renders an overview 3-step section (`id="how-it-works"`).
- At the bottom of the section, a CTA links to the full dedicated page: `<Link to="/how-it-works">LEARN MORE ABOUT HOW IT WORKS →</Link>`.
- `src/App.tsx` defines the standalone route `<Route path="/how-it-works" element={<HowItWorksPage />} />`, rendering both `<HowItWorks />` and the deep-dive `<HowItWorksDetail />` component.
- Navigation (`Navbar.tsx` and `Footer.tsx`) links to `/how-it-works`.

### 3. Is Features a section on the homepage or a separate route?
**Finding:** Features is an **inline section on the homepage only**.
- It is rendered in `src/pages/Home.tsx` via `<Features />` (`<section id="features">`).
- There is **no** `/features` route in `src/App.tsx` and no `FeaturesPage.tsx`.
- `Navbar.tsx` and `Footer.tsx` link to it via anchor jump `/#features`.
- **Root Cause Identified:** `public/sitemap.xml` improperly contained `<loc>https://memecapsule.wtf/#features</loc>`. Fragment URLs must **never** be listed in a sitemap.

### 4. Does vite.config.ts's prerender plugin config include /faq and /how-it-works in its routes array?
**Finding:** **Yes.**
- `routes: ['/', '/privacy', '/about', '/faq', '/how-it-works', '/team']` is configured in `vite.config.ts`.
- `ROUTE_SEO` defines custom `title` and `description` for each of these routes.

### 5. Does src/main.tsx or the router config define actual <Route path="/faq"> and <Route path="/how-it-works"> elements, or do these paths not exist as routes at all?
**Finding:** **Yes.**
- `src/App.tsx` explicitly includes:
  - `<Route path="/how-it-works" element={<HowItWorksPage />} />`
  - `<Route path="/faq" element={<FAQPage />} />`

### 6. Does public/privacy.html exist alongside src/pages/Privacy.tsx at /privacy — if so, which one has the canonical tag and which URL does it point to?
**Finding:** **Both exist, creating a canonical discrepancy.**
- `public/privacy.html` contained `<link rel="canonical" href="https://memecapsule.wtf/privacy.html">` pointing to itself.
- `src/pages/Privacy.tsx` is prerendered to `dist/privacy/index.html` with canonical pointing to `https://memecapsule.wtf/privacy`.
- **Action Taken:** Updated `public/privacy.html`'s canonical tag to `https://memecapsule.wtf/privacy` so any crawler hitting `privacy.html` explicitly attributes `https://memecapsule.wtf/privacy` as the canonical URL, eliminating the "Alternate page with proper canonical tag" ambiguity.

---

## Action Summary (Branch B + Cleanups)

1. **Sitemap Fix (`public/sitemap.xml`)**:
   - Removed fragment URL `https://memecapsule.wtf/#features`.
   - Kept independently servable URLs: `/`, `/how-it-works`, `/faq`, `/about`, `/team`, `/privacy`.
   - Updated `<lastmod>` on all entries to `2026-10-07`.

2. **Canonical Tag Normalization (`vite.config.ts` & `public/privacy.html`)**:
   - Homepage canonical URL in `vite.config.ts` normalized to `https://memecapsule.wtf/` (with trailing slash) matching `sitemap.xml`.
   - Subpages canonical URLs remain exact self-referencing URLs (`https://memecapsule.wtf/faq`, `https://memecapsule.wtf/how-it-works`, `https://memecapsule.wtf/about`, `https://memecapsule.wtf/team`, `https://memecapsule.wtf/privacy`).
   - `public/privacy.html` canonical tag updated to `https://memecapsule.wtf/privacy`.

3. **404.html Bypass & Prerendering**:
   - Confirmed static HTML files are generated for all 6 routes:
     - `dist/index.html`
     - `dist/faq/index.html`
     - `dist/how-it-works/index.html`
     - `dist/about/index.html`
     - `dist/team/index.html`
     - `dist/privacy/index.html`
   - Real requests on GitHub Pages return HTTP 200 OK directly with pre-populated HTML DOM, never triggering `404.html` redirects for valid routes.

4. **Build and Verification**:
   - `npm run build` generates 100% prerendered HTML with zero errors.
   - All canonical tags, Open Graph URLs, and page titles match across static outputs.
