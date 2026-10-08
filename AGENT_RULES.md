# AGENT_RULES.md

**STOP. Before modifying any code, read and follow these rules.**

## 1. MANDATORY GIT FORK & BRANCH WORKFLOW
- Always verify remotes (`git remote -v`). Ensure `origin` is Anmol's fork (`https://github.com/editorav010-dev/bbethical010-glitch.github.io.git`) and `upstream` is Pratham's repo (`https://github.com/bbethical010-glitch/bbethical010-glitch.github.io.git`).
- Before starting any task, synchronize local main with upstream:
  ```bash
  git checkout main
  git fetch upstream
  git merge upstream/main
  git push origin main
  ```
- NEVER commit directly to `main`.
- NEVER touch or commit to the `gh-pages` branch (it is an automated GitHub Actions build artifact).
- ALWAYS create a dedicated feature branch for each task:
  ```bash
  git checkout -b <branch-name>
  ```
- Push branches strictly to Anmol's fork:
  ```bash
  git push -u origin <branch-name>
  ```
- Instruct the user to open a Pull Request from `editorav010-dev:<branch-name>` into `bbethical010-glitch:main`.

## 2. PROTECTED AREAS (DO NOT MODIFY OR BREAK WITHOUT AUTHORIZATION)
- **Established UI/UX theme**: Neo-Brutalist styling, Anton + Oswald typography, pitch-dark #131313 background, cyberpunk acid glitch mode.
- **Static HTML Prerendering pipeline**: (`vite-plugin-prerender`, Puppeteer, deterministic SSR renderer).
- **Core routes**: `/`, `/about`, `/privacy`, `/privacy.html`, and anchor sections (`#features`, `#faq`, `#see-it-in-action`).
- **GitHub Actions workflow**: (`.github/workflows/deploy.yml`).
- **Live Preview Drop Simulator**: with 5-drop quota counter and Google Play UTM link generator.

## 3. TESTING REQUIREMENT
- Every change must be validated by running `npm run build`.
- Verification must confirm 0 TypeScript errors and successful bundle creation in `dist/`.

## 4. AT-THE-DOOR DIRECTIVES
- `README.md` and any existing agent guides (`AGENTS.md`, `CLAUDE.md`, `GEMINI.md`) must explicitly declare:
  "STOP. Before modifying any code, read and follow AGENT_RULES.md."
