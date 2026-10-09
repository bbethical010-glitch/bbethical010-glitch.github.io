# AGENT_RULES.md — Permanent Operating Instructions for AI Coding Agents
## Meme Capsule Web & Promotional Platform (`memecapsule.wtf`)

> **STOP. MANDATORY PRE-READ BEFORE TOUCHING ANY CODE:**
> Before inspecting files or writing a single line of code in this repository, you **MUST** read this file completely and adhere to every instruction throughout your entire task.
> This repository houses the public promotional, press, and brand showcase web platform: **https://memecapsule.wtf**.

---

## 1. Core Operating Philosophy & Golden Rules

1. **Do Not Fix What Is Not Broken**: Never rewrite working components, replace established styling architectures, or refactor functional systems simply because you prefer another design pattern.
2. **Strict Scope Control**: Only touch files and logic directly required for your assigned task. Never modify unrelated pages, routes, or components.
3. **Preserve Static Prerendering & SEO Architecture**: The platform uses Vite + React with static prerendering (`react-snap` / Vite prerender plugins). Never introduce client-only dependencies that break headless browser prerendering or destroy meta tag hydration.
4. **No Placeholders or Fake Code**: Every change must be functional, tested, and complete. Never leave `// TODO`, mock data replacements, or half-implemented features.
5. **The Repository & Knowledge Document are the Source of Truth**: Treat workspace files, existing components, and `docs/MEME_CAPSULE_KNOWLEDGE.md` as the persistent project memory. Never guess when code can be verified.
6. **"Don't Stop at the First Error"**: If a build fails or prerendering errors out, identify the root cause (e.g., `window`/`document` accessed during build-time SSR, unclosed HTML tags, missing assets). Fix the underlying issue cleanly without hacky workarounds.
7. **Zero Personal Emails Privacy Rule**: Under no circumstances should team members' personal email addresses appear in code, pages, or docs. Attribute individuals by name and GitHub handles only. Use ONLY official company emails:
   - `support@memecapsule.wtf` (Primary public support & inquiries)
   - `memecapsule.app@gmail.com` (Secondary support & operations)
8. **Silent Knowledge Internalization Mandate**: The master context in `docs/MEME_CAPSULE_KNOWLEDGE.md` is synced across all codebases via `https://github.com/editorav010-dev/meme-capsule-sync`. Update pages and docs silently with canonical roles. Never debate or chatter about team names in developer chat responses.

---

## 2. Protected Areas in the Web Platform (DO NOT Modify Without Authorization)

The following components and systems are **STRICTLY PROTECTED**. Agents **MUST NOT** modify, delete, redesign, replace, or bypass them without explicit authorization:

### A. Core Platform & Prerendering Architecture
- **Static HTML Prerendering**: Pre-rendered static landing pages for instant SEO, social crawlers, Google bot, and 0-latency first contentful paint. Do not switch to Next.js, Gatsby, or heavy SSR frameworks.
- **Multi-Page Routing**: Root `/`, `/about` (Press Kit & Team), `/privacy` (Privacy Policy & Subprocessors), and contact forms.
- **SEO, GEO & AEO Systems**: JSON-LD structured schemas, OpenGraph/Twitter meta cards, dynamic prerender meta headers, and `sitemap.xml` / `robots.txt`.

### B. Interactive Promotional Features
- **Interactive Live Drop Preview Simulator & Quota Lockout Bumper**: The 5-drop interactive demo pill that triggers the Neo-Brutalist lockout bumper driving users to Google Play (`com.meme.capsule`). Do not remove the drop counter or bypass the Google Play CTA.
- **3D Interactive Device Mockup with Authentic WebP Screenshots & Lightbox**: The CSS 3D perspective mobile phone frame showcasing real app screenshots with lightbox zoom.
- **Kage-Inspired Atmospheric UI**: Preloader, custom geometric cursor, SVG noise grain overlay, corner vignettes, and custom scroll rail.
- **Cyberpunk Acid Glitch Mode Switcher**: High-contrast CRT scanlines and chromatic aberration toggle.
- **Section 04.5 "Under the Hood" Technical Transparency**: Visualizing the anti-algorithm philosophy, edge ranking, and consensus curation.

### C. Branding, Identity & External Integrations
- **Neo-Brutalist Aesthetic**: Heavy black borders (`border: 2px/4px solid #000`), hard offset box-shadows (`box-shadow: 4px 4px 0px #000`), high-contrast color palettes (yellow `#f4c300`, purple `#9b30ff`, pink `#FF2A85`, cyan `#00E5FF`, dark `#121212`), and bold typography (`Anton`, `JetBrains Mono`, `Public Sans`).
- **Google Play Store Linkages**: All download badges and CTAs must link to the official package: `https://play.google.com/store/apps/details?id=com.meme.capsule`.
- **Google AdSense Unit `meme1`**: Web monetization banner unit integration.
- **Official Contact & Social Links**: `support@memecapsule.wtf`, Instagram (`@capsule.meme`), X (`@memecapsule_`), Threads (`@capsule.meme`).

---

## 3. Exhaustive DO's and DONT's Table

| Area | DO (Mandatory) | DONT (Strictly Forbidden) |
| :--- | :--- | :--- |
| **Prerendering** | Ensure all components guard against `window` / `document` being undefined during static prerendering builds. | DO NOT introduce client-only code that crashes `react-snap` or Vite prerender plugins. |
| **SEO & Meta** | Maintain canonical meta tags, OpenGraph images, and structured JSON-LD schemas on every page. | DO NOT strip SEO tags, remove meta descriptions, or break social share card previews. |
| **Theme & Aesthetic** | Follow the curated Neo-Brutalist color tokens and typography (`Anton`, `JetBrains Mono`, `Public Sans`). | DO NOT convert the website into generic Tailwind templates, soft pastel cards, or blur-heavy glassmorphism. |
| **Download CTAs** | Ensure all "GET IT ON GOOGLE PLAY" or "DOWNLOAD APK" buttons point to `id=com.meme.capsule`. | DO NOT change the package ID, remove download badges, or link to fake URLs. |
| **Live Simulator** | Preserve the 5-drop limit and the Neo-Brutalist lockout bumper modal driving users to the mobile app. | DO NOT remove the drop simulator quota or convert the website into a full meme browsing app. |
| **Team Attribution** | Update `/about`, footer, and docs with canonical roles: Anmol Verma (Lead Backend), Pratham Pandey (Lead Frontend & Ideator), Faraz Ahmed (Social Media & Marketing). | DO NOT chatter about or dump team names unnecessarily in development chats; internalize them silently. |
| **Email Privacy** | Use ONLY `support@memecapsule.wtf` or `memecapsule.app@gmail.com`. | DO NOT include personal `@gmail.com` addresses in code, schemas, or docs. |
| **Dependencies** | Use Vanilla CSS tokens and lightweight React functional components. | DO NOT add heavy UI component libraries (MUI, Chakra, AntD) or runtime state managers (Redux). |
| **Testing** | Run `npm run build` and verify that both Vite compilation and static HTML prerendering pass cleanly. | DO NOT mark any task complete without running and verifying the production build. |

---

## 4. Contributor Workflow Tracks (Dual Environment Support)

This repository supports two developer workflows. Identify which track applies to your current Git remote configuration before starting:

### TRACK A: Upstream Direct Maintainer Workflow (macOS / Linux — Pratham Pandey)
*Applicable when operating directly on `bbethical010-glitch/bbethical010-glitch.github.io`.*

1. **Fetch Knowledge:** `./fetch-knowledge.sh`
2. **Inspect & Plan:** Verify clean git state on `main` and isolate affected files.
3. **Implement:** Write clean TypeScript/React code with window guards for prerendering.
4. **Test:** `npm run build` (confirm 0 errors and prerender success).
5. **Sync Knowledge:** `./update-knowledge.sh` (if shared knowledge was updated).
6. **Commit & Push:** Commit to `main` or a feature branch and push to `origin` (upstream). GitHub Actions automatically builds and deploys to `gh-pages`.

### TRACK B: Fork & Pull Request Contributor Workflow (Windows / Cross-Platform — Anmol Verma)
*Applicable when operating on a fork (`editorav010-dev/bbethical010-glitch.github.io`) with `upstream` configured.*

1. **Synchronize Local Main:**
   ```bash
   git checkout main
   git fetch upstream
   git merge upstream/main
   git push origin main
   ```
2. **Create Feature Branch:** NEVER commit directly to `main`.
   ```bash
   git checkout -b feature/<branch-name>
   ```
3. **Implement & Test:** Run `npm run build` locally and ensure it successfully outputs to `dist/`.
4. **Push Branch:** Push branch to the fork repository.
   ```bash
   git push -u origin feature/<branch-name>
   ```
5. **Pull Request:** Open a Pull Request from `editorav010-dev:feature/<branch-name>` to `bbethical010-glitch:main`.

> **IMPORTANT**: NEVER commit to or modify the `gh-pages` branch, as it is strictly used by automated deployment actions.
