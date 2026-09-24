export interface Env {
  DB: any
  BUCKET?: any
  CDN_BASE_URL?: string
}

export const CDN_DOMAIN = 'https://media.memecapsule.wtf'
export const LEGACY_R2_ORIGIN = 'https://pub-3e7961a132964ff581b779a5dad40771.r2.dev'

export const CORS_HEADERS: Record<string, string> = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

export const MEDIA_CACHE_HEADERS: Record<string, string> = {
  'Cache-Control': 'public, max-age=2592000, immutable',
}

/**
 * Resolves a storage path or legacy *.r2.dev URL into the global Cloudflare CDN domain
 * (`https://media.memecapsule.wtf`) with 30-day immutable edge caching.
 */
export function toPublicUrl(pathOrUrl: string, env?: Env): string {
  const baseUrl = (env?.CDN_BASE_URL || CDN_DOMAIN).replace(/\/+$/, '')

  if (!pathOrUrl) return baseUrl

  // Rewrite any legacy *.r2.dev URLs to the custom CDN domain
  if (/^https?:\/\/[^/]+\.r2\.dev\//i.test(pathOrUrl)) {
    const cleanKey = pathOrUrl.replace(/^https?:\/\/[^/]+\.r2\.dev\/+/i, '')
    return `${baseUrl}/${cleanKey}`
  }

  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl
  }

  const cleanPath = pathOrUrl.replace(/^\/+/, '')
  return `${baseUrl}/${cleanPath}`
}
