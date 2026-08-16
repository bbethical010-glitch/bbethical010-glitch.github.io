# Meme Capsule Website

This is the fully static, production-ready website for the Meme Capsule Android app. It uses Vite, React 18, TypeScript, and Tailwind CSS.

## Post-Generation Setup Instructions

Complete these steps to finalise and deploy the website:

1. **Create GitHub Repository**
   - Create a GitHub repo named `meme-capsule-website`.
   - Push this generated code to it.

2. **Configure GitHub Pages**
   - Go to repo **Settings** → **Pages**.
   - Under Build and deployment, set source to **Deploy from a branch**.
   - Set the branch to `gh-pages` (this branch will be created automatically by the GitHub Actions workflow after your first push to `main`).

3. **Setup Comments (Giscus)**
   - Enable GitHub Discussions in your repo: **Settings** → **Features** → check **Discussions**.
   - Go to [giscus.app](https://giscus.app), connect your repo, and choose the Discussions category you want to use.
   - Copy the generated `repoId` and `categoryId`.
   - Update `src/constants/config.ts` with your GitHub username, `repoId`, and `categoryId`.

4. **Setup Contact Form (Formspree)**
   - Go to [formspree.io](https://formspree.io) and create a free account.
   - Create a new form.
   - Copy the form ID into `formspreeId` in `src/constants/config.ts`.

5. **Setup Google Analytics**
   - Go to [analytics.google.com](https://analytics.google.com) and create a GA4 property for your website URL.
   - Copy the measurement ID (starts with `G-`).
   - Replace `G-XXXXXXXXXX` in `index.html` and `src/constants/config.ts`.

6. **Update Placeholders**
   - Replace all `YOUR_USERNAME`, `YOUR_NAME`, `YOUR_EMAIL` placeholders in `src/constants/config.ts` and `index.html`.
   - Replace the screenshot placeholder URLs in `src/components/Screenshots.tsx` with actual URLs to your app screenshots.

7. **Deploy**
   - Commit your changes and push to `main`.
   - The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically build and deploy the site.

## Development

```bash
npm run dev     # Start local development server
npm run build   # Build for production
```
