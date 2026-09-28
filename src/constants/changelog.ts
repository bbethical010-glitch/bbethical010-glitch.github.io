export const CHANGELOG = [
  {
    version: 'v3.4 (Build 25)',
    date: 'September 2026',
    tag: 'SETTINGS & PRIVACY',
    tagColor: 'purple',
    changes: [
      'Consolidated Privacy & Website links into a single tactile CTA redirecting to https://memecapsule.wtf/privacy',
      'Streamlined in-app Settings page and sanitized UI developer name credits',
      'Enhanced lightweight local storage and zero-footprint state',
    ],
  },
  {
    version: 'v3.2 – v3.3 (Build 23–24)',
    date: 'September 2026',
    tag: 'SMART LIFECYCLE',
    tagColor: 'pink',
    changes: [
      'Smart Session Lifecycle: retains active meme when app-switching or sharing, resets to Homepage (HIT ME) on cold start / swipe-away',
      'Migrated official support and privacy email to support@memecapsule.wtf across the entire app',
      'Removed external social handle clutter from the APK interface',
    ],
  },
  {
    version: 'v3.1 (Build 22)',
    date: 'September 2026',
    tag: 'FIFO ENGINE',
    tagColor: 'gold',
    changes: [
      '12-Meme Rolling FIFO Stack Prefetch Engine (STACK_BATCH_SIZE = 10, PIPELINE_TARGET_SIZE = 12)',
      '60%–70% consumption trigger (FIFO_REFILL_TRIGGER_SIZE = 4) automatically fetches next batch',
      'Streaming per-meme image decode and enqueueing for zero loading pauses between stacks',
    ],
  },
  {
    version: 'v2.9 – v3.0 (Build 20–21)',
    date: 'September 2026',
    tag: 'NEO-BRUTALIST UI',
    tagColor: 'purple',
    changes: [
      'Unobstructed Meme Card: zero floating button clutter over meme images',
      '4-Column Neo-Brutalist CTA Bar: LIKE (#FF2A85), VAULT (#A855F7), PIN (#FACC15), MORE ⋮ (#00E5FF)',
      '#moreMenu popover with SHARE, DOWNLOAD to phone gallery, and REPORT',
      'Instagram-style flush draggable Share Sheet Ribbon with smooth spring slide-up and touch isolation',
      'Active session & share handoff retention token during external sharing',
    ],
  },
  {
    version: 'v2.8 (Build 19)',
    date: 'September 2026',
    tag: 'DATA CONTROL',
    tagColor: 'gold',
    changes: [
      'Dedicated App Settings & History Erasure Page (gear button replacing leaf badge)',
      'Granular data erasure: Delete All App History & Data, Clear Past Viewing History & Stats, Empty Vault & Mood Boards',
      'Capsule Feed Controls: Hybrid Reddit Relay toggle, Turbo Prefetch buffer, and arcade card recoil animations',
    ],
  },
  {
    version: 'v1.0.0',
    date: 'August 2026',
    tag: 'LAUNCH',
    tagColor: 'pink',
    changes: [
      'Initial release on Google Play Store (com.meme.capsule)',
      'Random meme delivery from curated capsule cloud collection',
      'Local offline Meme Vault for saving favorites',
      'One-tap social sharing and lightweight Android native build',
    ],
  },
]
