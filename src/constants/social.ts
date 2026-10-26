export interface SocialChannel {
  id: string
  platform: string
  handle: string
  url: string
  accent: string
  ariaLabel: string
}

export const SOCIAL_CHANNELS: SocialChannel[] = [
  {
    id: 'instagram',
    platform: 'INSTAGRAM',
    handle: '@meme__capsule',
    url: 'https://www.instagram.com/meme__capsule/',
    accent: 'var(--pink)',
    ariaLabel: 'Meme Capsule on Instagram',
  },
  {
    id: 'x',
    platform: 'X / TWITTER',
    handle: '@memecapsule_',
    url: 'https://x.com/memecapsule_',
    accent: 'var(--purple)',
    ariaLabel: 'Meme Capsule on X',
  },
  {
    id: 'threads',
    platform: 'THREADS',
    handle: '@capsule.meme',
    url: 'https://www.threads.com/@capsule.meme',
    accent: 'var(--gold)',
    ariaLabel: 'Meme Capsule on Threads',
  },
  {
    id: 'reddit',
    platform: 'REDDIT',
    handle: 'u/memecapsule_',
    url: 'https://www.reddit.com/user/memecapsule_/',
    accent: 'var(--purple-light)',
    ariaLabel: 'Meme Capsule on Reddit',
  },
]
