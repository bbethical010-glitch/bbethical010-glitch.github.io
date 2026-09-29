import { defineConfig, createServer, type ViteDevServer } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const vitePrerender = require('vite-plugin-prerender')

const ROUTE_SEO: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Meme Capsule — Random Meme App for Android',
    description: 'Download Meme Capsule — the randomest meme app on Android. One tap, one meme, zero algorithm. Get it free on Google Play.',
  },
  '/about': {
    title: 'About Meme Capsule — Hand-Curated Random Meme App',
    description: 'Learn about Meme Capsule: the story, the team, zero-algorithm philosophy, and press kit for the random meme delivery app on Android.',
  },
  '/team': {
    title: 'Meet the Team — Meme Capsule',
    description: 'Meet Pratham Pandey and the team behind Meme Capsule, the hand-curated random meme discovery app on Android.',
  },
  '/faq': {
    title: 'FAQ — Meme Capsule Random Meme App',
    description: 'Frequently asked questions about Meme Capsule: features, rolling prefetch engine, offline vault, and data erasure.',
  },
  '/how-it-works': {
    title: 'How It Works — Meme Capsule Random Meme Delivery',
    description: 'Discover how Meme Capsule delivers unfiltered, algorithm-free random memes with zero loading pauses and instant social sharing.',
  },
  '/privacy': {
    title: 'Privacy Policy — Meme Capsule',
    description: 'Privacy Policy for Meme Capsule. Transparent details on data handling, in-app data erasure, and zero cloud tracking.',
  },
}

class ReactSSRRenderer {
  private vite: ViteDevServer | null = null

  async initialize() {
    this.vite = await createServer({
      server: { middlewareMode: true, hmr: false },
      appType: 'custom',
      plugins: [react()],
    })
  }

  async renderRoutes(routes: string[]) {
    if (!this.vite) throw new Error('Vite SSR server not initialized')
    const template = fs.readFileSync(path.join(process.cwd(), 'dist', 'index.html'), 'utf-8')
    const React = await import('react')
    const { renderToString } = await import('react-dom/server')
    const { StaticRouter } = await import('react-router-dom')
    const { default: App } = await this.vite.ssrLoadModule('/src/App.tsx')

    return routes.map((route) => {
      const appHtml = renderToString(
        React.default.createElement(
          StaticRouter,
          { location: route },
          React.default.createElement(App)
        )
      )

      let html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
      const seo = ROUTE_SEO[route]
      if (seo) {
        const canonicalUrl = `https://memecapsule.wtf${route === '/' ? '' : route}`
        html = html
          .replace(/<title>.*?<\/title>/, `<title>${seo.title}</title>`)
          .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${seo.description}" />`)
          .replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${canonicalUrl}" />`)
          .replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${canonicalUrl}" />`)
          .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${seo.title}" />`)
          .replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${seo.description}" />`)
          .replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${seo.title}" />`)
          .replace(/<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${seo.description}" />`)
      }

      return {
        route,
        html,
      }
    })
  }

  destroy() {
    if (this.vite) {
      this.vite.close()
      this.vite = null
    }
  }
}

export default defineConfig({
  build: {
    target: 'es2019',
  },
  plugins: [
    react(),
    vitePrerender({
      staticDir: path.join(process.cwd(), 'dist'),
      routes: ['/', '/privacy', '/about', '/faq', '/how-it-works', '/team'],
      renderer: new ReactSSRRenderer(),
    })
  ],
  base: '/',
})
