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

### D. Drafted & Inactive Modules (PRESERVE IN CODEBASE — DO NOT PUBLISH WITHOUT EXPLICIT PERMISSION)
- **Meme Culture & Editorial Hub (`src/pages/Editorial.tsx`)**:
  - **Status:** DRAFT / INACTIVE (Decoupled from live website navigation, routing, and prerendering).
  - **Rule 1 (Preservation Mandate):** DO NOT delete or rename `src/pages/Editorial.tsx`. All 4 original cultural essays, layouts, and styles must remain safely preserved in the codebase as a draft.
  - **Rule 2 (No Unauthorized Exposure):** DO NOT expose or publish `/editorial` to public navigation (Navbar, Footer), router, prerender routes, or sitemaps unless explicitly commanded by the user.
  - **Rule 3 (Reactivation Checklist):** When the user explicitly requests to activate/publish the Editorial Hub, follow the standard 6-step reactivation workflow:
    1. In `src/App.tsx`: Uncomment `<Route path="/editorial" element={<Editorial />} />`.
    2. In `src/components/Navbar.tsx`: Uncomment the `<Link to="/editorial">` in both Desktop & Mobile menus.
    3. In `src/components/Footer.tsx`: Uncomment the `<Link to="/editorial">` link.
    4. In `vite.config.ts`: Add `'/editorial'` to the `routes` array in `vitePrerender`.
    5. In `public/sitemap.xml`: Uncomment the `/editorial` `<url>` entry.
    6. In `src/pages/ContentGuidelines.tsx`: Restore the bottom CTA link target to `/editorial`.

- **Flagship Hero Phone Mockup (`src/components/HeroPhoneMockup.tsx`)**:
  - **Status:** DRAFT / INACTIVE (Preserved in codebase, decoupled from live `src/components/Hero.tsx`).
  - **Rule 1 (Preservation Mandate):** DO NOT delete or rename `src/components/HeroPhoneMockup.tsx`. All obsidian chassis styling, Dynamic Island notch, carousel mechanics, and zero-lag RAF tilt mathematics must remain safely preserved in the codebase as a draft module.
  - **Rule 2 (No Unauthorized Exposure):** DO NOT re-enable `<HeroPhoneMockup />` in `src/components/Hero.tsx` unless explicitly commanded by the user.
  - **Rule 3 (Reactivation Workflow):** When the user explicitly requests to re-activate the phone mockup on the website:
    1. In `src/components/Hero.tsx`: Uncomment `import { HeroPhoneMockup } from './HeroPhoneMockup'`.
    2. In `src/components/Hero.tsx`: Uncomment `<HeroPhoneMockup />` below the primary CTA buttons.

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
| **Visual & UI Audits** | Maintain and update the visual baseline in `ui-ux-design-audit/` and `docs/UI_UX_DESIGN_AUDIT.md` whenever visual elements, styling tokens, or layouts change (re-run `node ui-ux-design-audit/capture.mjs`). | DO NOT allow visual documentation or screenshots to drift after altering webpage appearance, themes, or components. |
| **Editorial Hub (Draft)** | Keep `src/pages/Editorial.tsx` preserved in codebase in draft status. Follow 6-step checklist to reactivate only when requested. | DO NOT delete `src/pages/Editorial.tsx` or re-publish `/editorial` to live navigation/routes without explicit authorization. |
| **Hero Phone Mockup (Draft)** | Keep `src/components/HeroPhoneMockup.tsx` preserved in codebase in draft status. Re-enable in `Hero.tsx` only when requested. | DO NOT delete `HeroPhoneMockup.tsx` or re-enable it in `Hero.tsx` without explicit user authorization. |
| **Testing** | Run `npm run build` and verify that both Vite compilation and static HTML prerendering pass cleanly. | DO NOT mark any task complete without running and verifying the production build. |

---

## 4. Mandatory Cross-Codebase Knowledge Sync Workflow

The canonical single source of truth across all 3 Meme Capsule repositories is `MEME_CAPSULE_KNOWLEDGE.md`, synchronized via `editorav010-dev/meme-capsule-sync`. All sync scripts are maintained inside `.knowledge/`.

### 1. BEFORE STARTING ANY TASK (MANDATORY STEP 0):
Before writing any code or changing any configuration, detect your operating system and fetch the latest master knowledge:
- **Windows**: `powershell -ExecutionPolicy Bypass -File .knowledge/fetch-knowledge.ps1`
- **macOS / Linux**: `bash .knowledge/fetch-knowledge.sh`
Read `MEME_CAPSULE_KNOWLEDGE.md` to understand recent architectural updates, schema migrations, and decisions made by teammates across other codebases.

### 2. AFTER COMPLETING ANY TASK (MANDATORY FINAL STEP):
After making ANY changes (features, bug fixes, UI/UX changes, Android APK updates, billing, or config):
1. Update `MEME_CAPSULE_KNOWLEDGE.md` with your new changes, version updates, or notes.
2. Push the updated knowledge file back to the shared repository:
   - **Windows**: `powershell -ExecutionPolicy Bypass -File .knowledge/update-knowledge.ps1`
   - **macOS / Linux**: `bash .knowledge/update-knowledge.sh`
3. **If a CONFLICT (HTTP 409) occurs:** Run the fetch script fresh, manually merge your changes into the latest file, and run the update script again. Never force-push or bypass the fetch.

---

## 5. Contributor Workflow Tracks (Dual Environment Support)

This repository supports two developer workflows. Identify which track applies to your current Git remote configuration before starting:

### TRACK A: Upstream Direct Maintainer Workflow (macOS / Linux — Pratham Pandey)
*Applicable when operating directly on `bbethical010-glitch/bbethical010-glitch.github.io`.*

1. **Fetch Knowledge:** `bash .knowledge/fetch-knowledge.sh`
2. **Inspect & Plan:** Verify clean git state on `main` and isolate affected files.
3. **Implement:** Write clean TypeScript/React code with window guards for prerendering.
4. **Test:** `npm run build` (confirm 0 errors and prerender success).
5. **Sync Knowledge:** `bash .knowledge/update-knowledge.sh` (if shared knowledge was updated).
6. **Commit & Push:** Commit to `main` or a feature branch and push to `origin` (upstream). GitHub Actions automatically builds and deploys to `gh-pages`.

### TRACK B: Fork & Pull Request Contributor Workflow (Windows / Cross-Platform — Anmol Verma)
*Applicable when operating on a fork (`editorav010-dev/bbethical010-glitch.github.io`) with `upstream` configured.*

1. **Fetch Knowledge:** `powershell -ExecutionPolicy Bypass -File .knowledge/fetch-knowledge.ps1`
2. **Synchronize Local Main:**
   ```bash
   git checkout main
   git fetch upstream
   git merge upstream/main
   git push origin main
   ```
3. **Create Feature Branch:** NEVER commit directly to `main`.
   ```bash
   git checkout -b feature/<branch-name>
   ```
4. **Implement & Test:** Run `npm run build` locally and ensure it successfully outputs to `dist/`.
5. **Sync Knowledge:** `powershell -ExecutionPolicy Bypass -File .knowledge/update-knowledge.ps1` (if shared knowledge was updated).
6. **Push Branch:** Push branch to the fork repository.
   ```bash
   git push -u origin feature/<branch-name>
   ```
7. **Pull Request:** Open a Pull Request from `editorav010-dev:feature/<branch-name>` to `bbethical010-glitch:main`.

> **IMPORTANT**: NEVER commit to or modify the `gh-pages` branch, as it is strictly used by automated deployment actions.

---

## 6. Visual Baseline, UI/UX Audit & Design Token Maintenance Protocol

The repository maintains an official, authoritative visual and design-token baseline located in:
- **`ui-ux-design-audit/`** (Archive containing `UI_UX_DESIGN_AUDIT.md`, `screenshots/`, and `capture.mjs`)
- **`docs/UI_UX_DESIGN_AUDIT.md`** and **`docs/assets/ui-audit/`**

### Mandatory Rules for Any Visual, UI, or Theme Modifications:
Whenever an AI agent modifies, creates, refactors, or fixes any visual aspect of the webpage (including HTML layout, Tailwind CSS styling tokens, color definitions, typography, micro-animations, component structures, or Acid Glitch themes):

1. **Keep Visual Documentation Synchronized:** You **MUST** update the design token tables in [`docs/UI_UX_DESIGN_AUDIT.md`](docs/UI_UX_DESIGN_AUDIT.md) and [`ui-ux-design-audit/UI_UX_DESIGN_AUDIT.md`](ui-ux-design-audit/UI_UX_DESIGN_AUDIT.md) to reflect the exact current state of the source code.
2. **Re-generate Rendered Screenshots:** Run the automated Playwright capture script from the workspace root:
   ```bash
   node ui-ux-design-audit/capture.mjs
   ```
   This captures all 13 production desktop (`1440x900`) and mobile (`390x844`) renders and updates both `ui-ux-design-audit/screenshots/` and `docs/assets/ui-audit/`.
3. **Verify Screenshot Integrity:** Confirm all screenshots are non-zero bytes and no markdown image links are broken.
4. **Zero Silent Visual Drift:** Never finish a visual task without ensuring the visual audit baseline matches the live, deployed reality.
