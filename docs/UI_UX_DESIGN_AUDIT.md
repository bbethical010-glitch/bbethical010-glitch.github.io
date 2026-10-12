# UI/UX & Design Token Audit: Meme Capsule Web Platform (`memecapsule.wtf`)

> **Audit Type:** Production Visual & Source-Code Design Token Audit  
> **Status:** READ-ONLY Verification Complete  
> **Scope:** Public Promotional Website Frontend (`memecapsule.wtf`)  
> **Repository:** `bbethical010-glitch.github.io` (React 19 + Vite 8 + Tailwind CSS v3)  
> **Date of Audit & Capture:** October 11, 2026  

---

## 1. Capture Metadata

| Parameter | Configuration / Value |
| :--- | :--- |
| **Live Target URL** | [https://memecapsule.wtf](https://memecapsule.wtf) |
| **Desktop Viewport** | `1440 x 900` px (Device Scale Factor: `1.0`, headless Chromium) |
| **Mobile Viewport** | `390 x 844` px (Device Scale Factor: `2.0`, iPhone 12 / 13 / 14 profile, touch-enabled) |
| **Automation Tool** | Playwright Chromium Engine (`v1.49+` / Chromium `1248`) |
| **Execution Mode** | Headless browser with automated scroll reveal hydration (`[data-rv]`) and preloader unmount wait |
| **Active Theme Variants** | Standard Neo-Brutalist Arcade Dark Mode & Cyberpunk Acid Glitch Mode (`html.theme-glitch`) |
| **Total Captured Artifacts** | 13 production full-page & interaction PNG screenshots |

---

## 2. Actual Design Tokens in Source Code

The following design tokens were extracted directly from the actual source files in this repository:
- `tailwind.config.ts`
- `src/index.css`
- `index.html` (Google Font CDN and critical asset preloads)
- Individual UI components (`CustomCursor.tsx`, `GrainOverlay.tsx`, `Vignette.tsx`, `ScrollRail.tsx`, `MemePreview.tsx`, `Navbar.tsx`)

### 2.1 Color Palette Tokens

| Token Name | Hex / Value | Source Location | Semantic Usage |
| :--- | :--- | :--- | :--- |
| `bg` | `#131313` | `tailwind.config.ts`, `src/index.css` | Canvas background, body base color, preloader canvas |
| `surface` | `#1c1b1b` | `tailwind.config.ts`, `MemePreview.tsx` | Card containers, interactive panels, badge backgrounds |
| `surfaceHigh` | `#2a2a2a` | `tailwind.config.ts`, `ScrollRail.tsx` | Inactive scroll rail indicators, exhausted quota pills |
| `purple` | `#9b30ff` | `tailwind.config.ts`, `src/index.css` | Primary brand purple, heading text, text selection, primary card borders |
| `purpleLight` | `#dcb8ff` | `tailwind.config.ts`, `CustomCursor.tsx` | Cursor ring border, subtle highlight accents |
| `gold` | `#f4c300` | `tailwind.config.ts`, `src/index.css` | Primary arcade button background, card box shadows, version badge |
| `goldLight` | `#ffe399` | `tailwind.config.ts` | Extended palette light gold accent |
| `pink` | `#dd0061` | `tailwind.config.ts`, `src/index.css` | Secondary button border/shadow, glitch active pill, rarity tags |
| `pinkLight` | `#ffb1c0` | `tailwind.config.ts` | Extended palette light pink accent |
| `text` | `#e5e2e1` | `tailwind.config.ts`, `src/index.css` | Primary high-contrast body typography color |
| `muted` | `#988ca1` | `tailwind.config.ts`, `src/index.css` | Subtitles, section numbers, meta text, inactive icons |
| *Glitch Canvas* | `#050505` | `src/index.css` (`html.theme-glitch`) | Deep void black background when Acid Glitch mode is enabled |
| *Button Text* | `#121212` | `src/index.css` (`.neo-button-primary`) | Contrast text on Arcade Gold buttons |

### 2.2 Typography Tokens

| Font Token | Font Family & Fallbacks | Loaded Weights | Semantic Usage & Source |
| :--- | :--- | :--- | :--- |
| `anton` | `'Anton', sans-serif` | `400` (Ultra-bold display) | Headings `H1`–`H6`, big banners, primary hero claims, buttons |
| `oswald` | `'Oswald', sans-serif` | `400`, `500`, `600`, `700` | Body copy, navigation links, section markers, technical labels |

> *Source note:* Fonts are loaded from Google Fonts via `index.html` (`family=Anton&family=Oswald:wght@400;500;600;700&display=swap`). Critical WOFF2 font is preloaded via `<link rel="preload" as="font">`.

### 2.3 Spacing Scale & Breakpoints

- **Spacing Scale:** Standard Tailwind v3 default spacing unit scale (1 unit = `0.25rem` / `4px`). No custom spacing overrides exist in `tailwind.config.ts`.
- **Responsive Breakpoints:**
  - `sm`: `640px`
  - `md`: `768px` (primary desktop navigation breakpoint)
  - `lg`: `1024px`
  - `xl`: `1280px`
  - `2xl`: `1536px`

### 2.4 Borders & Offset Box Shadows

| Component / Utility | Border Definition | Box Shadow Definition | Tactile Hover / Active Behavior |
| :--- | :--- | :--- | :--- |
| `.neo-card` | `2px solid #9b30ff` (purple) | `4px 4px 0px #f4c300` (gold) | Static neo-brutalist container block |
| `.neo-button-primary` | `2px solid #000000` (pitch black) | `4px 4px 0px #9b30ff` (purple) | `translate(4px, 4px)` + shadow collapses to `0px 0px 0px` |
| `.neo-button-secondary` | `2px solid #dd0061` (pink) | `4px 4px 0px #dd0061` (pink) | `translate(4px, 4px)` + shadow collapses to `0px 0px 0px` |
| `.cta-fill` | `2px solid rgba(155, 48, 255, 0.4)` | None | Background fill reveals vertically via cubic bezier |
| `.card-glow` | `1px solid rgba(155, 48, 255, 0.12)` | Hover: `0 12px 40px -12px rgba(155, 48, 255, 0.25)` | Soft purple halo on hover with `-translate-y-1` lift |
| `Navbar` (stuck) | `border-b-2 border-purple/60` | `0 4px 20px rgba(0,0,0,0.8)` | Deep shadow applied dynamically on scroll down |
| `MemePreview` Card | `2px solid #9b30ff` (purple) | `6px 6px 0px #f4c300` (gold) | 6px hard offset geometric neo-brutalist shadow |

### 2.5 Keyframe Animations & Atmospheric Tokens

| Token / Keyframe | Definition & Timing | Purpose |
| :--- | :--- | :--- |
| `ease-kage` | `cubic-bezier(0.22, 0.61, 0.36, 1)` | Standard smooth atmospheric transition timing |
| `ease-out-kage` | `cubic-bezier(0.16, 1, 0.3, 1)` | Spring-out deceleration curve for scroll reveals |
| `@keyframes grain-drift` | `8s steps(4) infinite` | Procedural SVG/Canvas noise drift |
| `@keyframes scroll-cue` | `2.8s cubic-bezier(0.65, 0, 0.35, 1) infinite` | Animated horizontal scroll cue sweep |
| `@keyframes scanlines` | `10s linear infinite` | CRT television horizontal scanline raster in Glitch mode |
| `@keyframes glitch-anim` | `5s infinite` | Skew (`1deg`), slight invert (`0.1`), and chromatic aberration |
| `GrainOverlay` | `opacity: 0.04`, `mix-blend-mode: overlay`, `z-index: 60` | Cinema noise overlay rendered procedurally via Canvas |
| `Vignette` | `radial-gradient(125% 95% at 50% 42%, transparent 40%, rgba(19,19,19,0.6) 100%)` | Darkening corner lens vignette (`z-index: 55`) |
| `CustomCursor` | `26px -> 52px`, `mix-blend-mode: difference`, `border: 1px solid #dcb8ff` | Trailing fluid geometric ring cursor on pointer devices |

---

## 3. Section-by-Section Breakdown of the Homepage

Below is the visual audit of each section rendered on the live production landing page (`https://memecapsule.wtf`), referencing the real captured screenshots.

### 3.1 Primary Header & Navigation
- **Screenshot:** `assets/ui-audit/desktop-home.png` (Top view) & `assets/ui-audit/mobile-home.png`
- **Rendered Appearance:** Fixed top bar featuring the high-voltage purple "Meme Capsule" logo accompanied by the arcade gold `v1.0` badge. Desktop displays navigation links (`Home`, `Features`, `How It Works`, `FAQ`, `Contact`, `About`), the interactive `Acid OFF` glitch switch, and a high-contrast Neo-Brutalist `Get App` CTA button. On mobile (`390px`), the menu collapses into a clean amber hamburger icon alongside the compact lightning bolt toggle.

### 3.2 Hero Showcase (`#hero`)
- **Screenshot:** `assets/ui-audit/desktop-home.png`
- **Rendered Appearance:** Dominated by a massive, uppercase Anton display heading reading *"PURE MEME CHAOS"*, shadowed in arcade gold with an authentic CRT vibe. Below sits the core brand promise (*"One tap. One meme. Zero algorithm."*) and two high-contrast Neo-Brutalist action triggers: the primary `"GET ON GOOGLE PLAY"` arcade pill and `"SEE IT IN ACTION"` link button.

### 3.3 Section 01 — Live Meme Drop Preview (`#see-it-in-action`)
- **Screenshot (Idle & Active):** `assets/ui-audit/desktop-home.png` and `assets/ui-audit/desktop-drop-simulator.png`
- **Rendered Appearance:** An interactive simulator containing the section marker `01 — LIVE MEME DROP`, a live quota badge indicating remaining drops (`Web Preview Drops Remaining: 5`), a 400x500px framed capsule card displaying a synced meme with a pink rarity tag (`Synced` / `Fresh Drop`), and the primary `"HIT ME"` action button. During active drop interaction (`desktop-drop-simulator.png`), the card pulses with a neon gradient and displays `"Dropping Capsule..."` while requesting the Edge API.

### 3.4 Section 02 — The Arsenal Features Grid (`#features`)
- **Screenshot:** `assets/ui-audit/desktop-home.png`
- **Rendered Appearance:** A responsive three-column grid of Neo-Brutalist cards outlined in deep purple with gold box shadows. Highlights the three foundational pillars of the mobile application: `"ONE-TAP CAPSULES"`, `"OFFLINE VAULT"`, and `"ZERO ALGORITHM"`, each adorned with custom vector iconography and crisp, high-legibility Oswald copy.

### 3.5 Section 03 — 3D Interactive Device Mockups (`#screenshots`)
- **Screenshot:** `assets/ui-audit/desktop-home.png`
- **Rendered Appearance:** An authentic 3D perspective phone mockup presenting actual production Android app screenshots in modern WebP format. Users can cycle through 5 distinct screenshots with realistic device borders and trigger a fullscreen lightbox inspection overlay.

### 3.6 Section 04 — How It Works (`#how-it-works`)
- **Screenshot:** `assets/ui-audit/desktop-home.png`
- **Rendered Appearance:** A streamlined 3-step sequential journey (*"1. Open Capsule"*, *"2. Laugh or Skip"*, *"3. Stash in Vault"*). Features numbered badges, high-contrast borders, and clear micro-copy explaining the anti-algorithmic philosophy.

### 3.7 Section 05 — Changelog & Releases (`#changelog`)
- **Screenshot:** `assets/ui-audit/desktop-home.png`
- **Rendered Appearance:** Displays current production release badges (`v2.7` / `versionCode 18`) with date stamps and a bulleted list of user-facing improvements, directly linking to the Google Play Store package (`com.meme.capsule`).

### 3.8 Section 06 — Dispatch Transmission Contact Form (`#contact`)
- **Screenshot:** `assets/ui-audit/desktop-home.png`
- **Rendered Appearance:** A dark-themed Formspree contact module with fields for Sender Name, Email Address, Category selector, message box, and a GDPR/privacy consent checkbox required before transmission.

### 3.9 Global Footer & Attribution
- **Screenshot:** `assets/ui-audit/desktop-home.png` (Bottom)
- **Rendered Appearance:** Features official platform links, direct social links (Instagram `@capsule.meme`, X `@memecapsule_`, Threads `@capsule.meme`), official support contacts (`support@memecapsule.wtf`, `memecapsule.app@gmail.com`), and engineering leadership attributions.

---

## 4. Visual Comparison Gallery

### 4.1 Desktop Full Renders (1440x900)

| View / State | Screenshot File | Description |
| :--- | :--- | :--- |
| **Homepage** | `assets/ui-audit/desktop-home.png` | Complete homepage desktop layout from hero to footer |
| **Glitch Theme** | `assets/ui-audit/desktop-home-glitch.png` | Homepage with Cyberpunk Acid Glitch mode switched ON |
| **About Page** | `assets/ui-audit/desktop-about.png` | Dedicated Press Kit, team attributions, and copy assets |
| **Privacy Policy** | `assets/ui-audit/desktop-privacy.png` | Comprehensive Privacy Policy, telemetry disclosure & rights |
| **How It Works** | `assets/ui-audit/desktop-how-it-works.png` | Deep-dive philosophy, edge ranking, and technical transparency |
| **FAQ Page** | `assets/ui-audit/desktop-faq.png` | Interactive accordion with all user & technical FAQs |
| **Simulator Active** | `assets/ui-audit/desktop-drop-simulator.png` | Mid-interaction live drop simulator showing active loading pulse |

### 4.2 Mobile Full Renders (390x844 — iPhone 12/13/14)

| View / State | Screenshot File | Description |
| :--- | :--- | :--- |
| **Mobile Home** | `assets/ui-audit/mobile-home.png` | Mobile responsive single-column layout |
| **Mobile Glitch** | `assets/ui-audit/mobile-home-glitch.png` | Mobile viewport with Acid Glitch CRT scanlines active |
| **Mobile About** | `assets/ui-audit/mobile-about.png` | Mobile press kit layout with stacked badges |
| **Mobile Privacy** | `assets/ui-audit/mobile-privacy.png` | Mobile responsive privacy policy document |
| **Mobile How It Works** | `assets/ui-audit/mobile-how-it-works.png` | Mobile 3-step guide and technical transparency |
| **Mobile FAQ** | `assets/ui-audit/mobile-faq.png` | Touch-optimized accordion FAQ list |

---

## 5. Discrepancies vs. `MEME_CAPSULE_KNOWLEDGE.md`

Comparing the claimed tokens in `docs/MEME_CAPSULE_KNOWLEDGE.md` (Section 6, Unified Design Tokens table) against the actual source code reveals the following discrepancies:

| Claimed in Knowledge Doc (Section 6) | Actual Defined in Source Code | Nature of Discrepancy |
| :--- | :--- | :--- |
| **Background:** `Pitch Black #121212 / #131313` | Only `#131313` is defined as `bg` in `tailwind.config.ts`. | `#121212` is not a configured Tailwind token; it only appears as hardcoded text color in `.neo-button-primary`. |
| **Card Surfaces:** `Dark Panel #1a1a1a / #1c1b1b` | Only `#1c1b1b` is defined as `surface` in `tailwind.config.ts`. | `#1a1a1a` is not defined anywhere in Tailwind configuration. |
| **Terminal Green:** `Terminal Green #34c759` | **Not defined** in `tailwind.config.ts` or `src/index.css`. | `#34c759` belongs exclusively to backend admin tools (`/admin`, `/curate`), not the web promo repo. |
| **Danger Red:** `High-Voltage Red #ff3b30 / #ff2a2a` | **Not defined** in `tailwind.config.ts`. | Red tokens are not configured in Tailwind for this web project. |
| **Accent Tangerine:** `More Options Tangerine #ff8c00` | **Not defined** in `tailwind.config.ts`. | `#ff8c00` belongs to the mobile app's 4th CTA button, not web tokens. |
| **Body Font:** `Oswald / Chivo` | Only `Oswald` is loaded and defined. | `Chivo` is neither loaded in `index.html` nor declared in `tailwind.config.ts`. |
| **Agent Rules Typography:** `Anton, JetBrains Mono, Public Sans` | Only `Anton` and `Oswald` are present. | Neither `JetBrains Mono` nor `Public Sans` exists in the web codebase. |
| **Box Shadows:** *"Hard Offset 4px to 6px Geometric Block (No Blur)"* | Codebase uses both hard offset shadows AND blurred glows. | `.card-glow:hover` uses `0 12px 40px -12px rgba(155, 48, 255, 0.25)` (40px blur); sticky navbar uses `0 4px 20px rgba(0,0,0,0.8)` (20px blur); scroll rail uses `0 0 8px #9b30ff`. |
| **Missing Tokens in Doc:** Not mentioned in doc table | `purpleLight` (`#dcb8ff`), `goldLight` (`#ffe399`), `pinkLight` (`#ffb1c0`), `text` (`#e5e2e1`), `muted` (`#988ca1`) | The source code defines these 5 essential tokens in `tailwind.config.ts` but the knowledge doc omits them. |
| **Atmospheric Tokens:** Not mentioned in doc table | `GrainOverlay`, `Vignette`, `ScrollRail`, `CustomCursor` | Real implementation features procedural canvas grain, vignette gradient, and magnetic cursor not captured in the doc's token table. |

---

## 6. Accessibility Observations Visible at a Glance

*(Observations only — per instruction, zero code modifications were made)*

1. **Subtle Contrast on Muted Typography:**
   - The secondary text color `#988ca1` (`muted`) against the dark `#131313` background exhibits a contrast ratio of approximately `4.1:1`. While acceptable for large text under WCAG AA, it is borderline for normal `14px`/`16px` body text and below the `7:1` threshold for WCAG AAA.
   - Section markers (`.sec-marker`) render at `11px` in uppercase with this muted shade, which may present legibility challenges on low-brightness displays.

2. **Visible Keyboard Focus Rings:**
   - Multiple interactive elements (e.g. mobile navbar hamburger toggle, custom buttons) feature `focus:outline-none` or rely solely on default focus rings that can be obscured against dark backgrounds. Adding high-contrast `:focus-visible` offset outlines would enhance keyboard accessibility.

3. **Desktop Custom Cursor & Keyboard Navigation:**
   - `CustomCursor.tsx` renders a geometric ring following mouse movements with `mix-blend-mode: difference`. However, it does not respond to keyboard tab focus, leaving keyboard-only navigators dependent solely on DOM element focus styles.

4. **Acid Glitch Theme Motion & Visual Comfort:**
   - When Acid Glitch Mode (`html.theme-glitch`) is activated, continuous scanlines and intermittent skew/hue-rotation animations (`glitch-anim`) are applied. While `prefers-reduced-motion` is properly guarded in CSS, users without OS-level reduced motion toggles may experience visual fatigue from the CRT scanlines and saturation shifts.

5. **Mobile Touch Target Dimensions:**
   - On viewports below `400px` (e.g. iPhone 12 at `390px`), certain compact buttons in the mobile navigation bar have click bounding boxes near `32px x 32px`, slightly beneath the WCAG recommended minimum touch target size 
   of `44px x 44px`.

---

## 7. Verification Checklist

- [x] All 13 PNG screenshots exist in `docs/assets/ui-audit/` and `ui-ux-design-audit/screenshots/`.
- [x] All screenshot files are non-zero bytes (verified range: `631 KB` to `6.45 MB`).
- [x] `docs/UI_UX_DESIGN_AUDIT.md` renders as valid Markdown with correct relative paths.
- [x] Zero changes made to application code, styles, or functional assets in `src/`.
- [x] Dedicated project archive directory `ui-ux-design-audit/` established with permanent capture scripts and maintenance instructions.
