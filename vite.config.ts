import { defineConfig, createServer, type ViteDevServer } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const vitePrerender = require('vite-plugin-prerender')

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
      return {
        route,
        html: template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`),
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
  plugins: [
    react(),
    vitePrerender({
      staticDir: path.join(process.cwd(), 'dist'),
      routes: ['/', '/privacy', '/about'],
      renderer: new ReactSSRRenderer(),
    })
  ],
  base: '/',
})
