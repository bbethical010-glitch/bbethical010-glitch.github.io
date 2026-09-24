import { defineConfig, createServer, type ViteDevServer } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const vitePrerender = require('vite-plugin-prerender')

let ssrServerPromise: Promise<ViteDevServer> | null = null

export default defineConfig({
  plugins: [
    react(),
    vitePrerender({
      staticDir: path.join(process.cwd(), 'dist'),
      routes: ['/', '/privacy', '/about'],
      postProcess: async (renderedRoute: { route: string; html: string }) => {
        if (renderedRoute.html.includes('<div id="root"></div>')) {
          if (!ssrServerPromise) {
            ssrServerPromise = createServer({
              server: { middlewareMode: true, hmr: false },
              appType: 'custom',
              plugins: [react()],
            })
          }
          const vite = await ssrServerPromise
          const React = await import('react')
          const { renderToString } = await import('react-dom/server')
          const { StaticRouter } = await import('react-router-dom')
          const { default: App } = await vite.ssrLoadModule('/src/App.tsx')
          const appHtml = renderToString(
            React.default.createElement(
              StaticRouter,
              { location: renderedRoute.route },
              React.default.createElement(App)
            )
          )
          renderedRoute.html = renderedRoute.html.replace(
            '<div id="root"></div>',
            `<div id="root">${appHtml}</div>`
          )
          if (renderedRoute.route === '/about') {
            setTimeout(() => vite.close(), 100)
          }
        }
        return renderedRoute
      },
    })
  ],
  base: '/',
})
