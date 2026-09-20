# Meme Capsule — Comprehensive SEO Audit & Issue Tracker

> **Site URL:** [https://memecapsule.wtf/](https://memecapsule.wtf/)  
> **Repository:** `meme-capsule-website` (Vite + React + TailwindCSS + GitHub Pages)  
> **Last Inspected:** September 2026 via Google Search Console URL Inspection / Live Verification  

---

## Executive Summary

Googlebot's Web Rendering Service (WRS) successfully executes the JavaScript bundle (`index-B9kPwhAy.js`) and parses the client-side React DOM. Text, titles, badges, and FAQ contents are fully visible to Google.

However, the site suffers from **critical technical SEO omissions and configuration conflicts** that degrade its search ranking, prevent Google App and FAQ rich snippets from displaying, break social link previews, and risk Google Search Console indexing errors on subpages.

---

## SEO Scorecard & Issues Overview

| # | Issue Title | Severity | Category | Impact |
|---|-------------|----------|----------|--------|
| **01** | Missing `og-image.png` (Returns 404) | 🔴 High | Social SEO | Broken social cards on WhatsApp, X, Facebook, Google Discover |
| **02** | Zero Schema.org JSON-LD Structured Data | 🔴 High | Rich Snippets | No Google Play app badge, zero FAQ search accordions |
| **03** | GitHub Pages SPA 404 on Sitemap `/privacy` | 🔴 High | Indexing & Crawl | GSC reports "Submitted URL not found (404)" |
| **04** | Navigation Uses `<button>` Instead of `<a href>` | 🟡 Medium | Crawlability | Google cannot parse jump-links or generate Sitelinks |
| **05** | App Screenshots Use `via.placeholder.com` | 🟡 Medium | Content Quality | Search quality penalty for placeholder/mock images |
| **06** | Missing Robots Crawl Directives & OpenGraph Tags | 🟡 Medium | Discovery | Google Discover excludes non-`max-image-preview:large` pages |
| **07** | Infinite 300% Grain Animation Repaint | 🟡 Medium | Core Web Vitals | High GPU compositing overhead impacting mobile INP |
| **08** | Obsolete `<meta name="keywords">` | 🟢 Low | Hygiene | Deprecated meta tag ignored by search engines |

---

## Detailed Issue Breakdown & Remediation

### Issue 1: Missing Open Graph Image Asset (`og-image.png` 404)
* **Severity:** 🔴 Critical
* **File Affected:** `meme-capsule-website/index.html` (lines 19, 27), `meme-capsule-website/public/`
* **Symptoms:**
  `<meta property="og:image" content="https://memecapsule.wtf/og-image.png" />` and `<meta name="twitter:image" ...>` reference `og-image.png`. The file does not exist in `public/`.
* **Impact:** 
  Any attempt by Google Discover, WhatsApp, LinkedIn, or Twitter/X to generate a preview card fails with an HTTP 404, displaying broken or blank cards.
* **Fix:**
  1. Generate or save a high-contrast `1200 x 630 px` PNG banner with the Meme Capsule logo, punchy tagline, and brand colors (`#9b30ff` purple, `#f4c300` gold).
  2. Place it at `meme-capsule-website/public/og-image.png`.

---

### Issue 2: Zero Schema.org Structured Data (JSON-LD)
* **Severity:** 🔴 Critical
* **File Affected:** `meme-capsule-website/index.html`
* **Symptoms:**
  The rendered DOM contains zero `<script type="application/ld+json">` tags.
* **Impact:**
  - Google cannot identify Meme Capsule as a certified Android Application on Google Play.
  - The 8 FAQs on the homepage do not produce expandable search result accordions.
  - Knowledge graph brand presence is missing.
* **Fix:**
  Embed `MobileApplication`, `FAQPage`, and `WebSite` JSON-LD schemas into `index.html` inside `<head>`.

---

### Issue 3: GitHub Pages SPA 404 on Sitemap `/privacy`
* **Severity:** 🔴 Critical
* **Files Affected:** `meme-capsule-website/public/sitemap.xml`, `meme-capsule-website/public/404.html`, `meme-capsule-website/src/main.tsx`
* **Symptoms:**
  `sitemap.xml` lists `https://memecapsule.wtf/privacy`. The project is hosted on GitHub Pages and uses `HashRouter` (`/#/privacy`). When Googlebot requests `https://memecapsule.wtf/privacy`, GitHub Pages serves `404.html` with an **HTTP 404 status code** before client-side JS redirects.
* **Impact:**
  Googlebot immediately discards the URL from indexation due to the 404 status code, throwing GSC index coverage errors.
* **Fix Options:**
  - **Option A (Recommended):** Pre-generate a static `public/privacy.html` (or `dist/privacy/index.html`) so requesting `/privacy` returns an HTTP 200 OK.
  - **Option B:** Update `sitemap.xml` to remove `/privacy` if privacy policy indexation on Google is not required, or switch from HashRouter to a multi-page Vite build.

---

### Issue 4: Navigation Uses `<button>` Instead of Semantic `<a href>`
* **Severity:** 🟡 Medium
* **Files Affected:** `meme-capsule-website/src/components/Navbar.tsx`, `meme-capsule-website/src/components/Footer.tsx`
* **Symptoms:**
  Links to `Home`, `Features`, `FAQ`, and `Contact` are `<button onClick={() => handleScroll('features')}>`.
* **Impact:**
  Googlebot crawls the web by parsing `<a href="...">` anchor tags. Buttons without `href` attributes are ignored, preventing search engines from mapping site architecture and generating SERP Sitelinks.
* **Fix:**
  Convert `<button>` elements to `<a href="#section-id" onClick={...}>` with `preventDefault()` on click to preserve smooth scrolling.

---

### Issue 5: App Screenshots Use External Placeholders (`via.placeholder.com`)
* **Severity:** 🟡 Medium
* **File Affected:** `meme-capsule-website/src/components/Screenshots.tsx`
* **Symptoms:**
  All carousel images load from `https://via.placeholder.com/720x1560/...`.
* **Impact:**
  Google Page Quality algorithms flag external placeholder URLs as incomplete/thin content. Placeholder images also cannot rank in Google Image Search.
* **Fix:**
  Replace placeholder URLs with actual app mockups/screenshots stored in `src/assets/` or `public/screenshots/`.

---

### Issue 6: Missing SEO Directives & OpenGraph Metadata
* **Severity:** 🟡 Medium
* **File Affected:** `meme-capsule-website/index.html`
* **Symptoms:**
  Missing `max-image-preview:large`, `og:site_name`, and `og:locale`.
* **Impact:**
  Ineligible for large image preview cards in Google Discover feed.
* **Fix:**
  Add `<meta name="robots" content="index, follow, max-image-preview:large" />` and OpenGraph localization tags.

---

### Issue 7: 300% Continuous Grain Overlay Animation
* **Severity:** 🟡 Medium
* **File Affected:** `meme-capsule-website/src/components/GrainOverlay.tsx`
* **Symptoms:**
  A fixed `width: 300%; height: 300%` element with `mix-blend-mode: overlay` and an infinite 8s step animation.
* **Impact:**
  Forces continuous compositing and GPU redraws. On budget Android devices, this increases frame drop and can harm Interaction to Next Paint (INP) scores.
* **Fix:**
  Disable or pause the animation when the user is scrolling or on low-power/reduced-motion devices (`prefers-reduced-motion: reduce`).

---

### Issue 8: Obsolete `<meta name="keywords">` Tag
* **Severity:** 🟢 Low
* **File Affected:** `meme-capsule-website/index.html`
* **Symptoms:**
  `<meta name="keywords" content="..." />` is present.
* **Impact:**
  Google has disregarded the `keywords` meta tag since 2009. Harmless, but unnecessary clutter.
