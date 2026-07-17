# Micheal Nwgbolu — Portfolio (Next.js)

Freelance developer portfolio, built with Next.js 14 (App Router).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/
  layout.js       — fonts + page metadata
  page.js          — assembles all sections
  globals.css      — all styling (CSS variables, layout, components)
components/
  Nav.js
  Hero.js
  Terminal.js      — animated terminal intro (client component)
  CaseStudies.js   — Hexafox United + Emmy Photography case studies
  Services.js
  Repos.js         — fetches live GitHub repos client-side (client component)
  Contact.js
  Footer.js
public/assets/
  emmy-photography-screenshot.jpg
```

## Editing content

- **Bio, hero copy, services:** edit directly in `components/Hero.js` and `components/Services.js`.
- **Case studies:** edit `components/CaseStudies.js`. To add a third project, copy one `.case` block and drop in a new screenshot under `public/assets/`.
- **GitHub username:** change `GH_USER` at the top of `components/Repos.js`.
- **Contact info:** edit `components/Contact.js`.
- **Colors/fonts:** CSS variables at the top of `app/globals.css` (`--bg`, `--accent`, etc.) — change these and the whole site re-themes.

## Deploy

The fastest path is Vercel (same host both live projects already use):

1. Push this project to a GitHub repo.
2. Go to https://vercel.com/new, import the repo, and click Deploy. No config needed — Next.js is auto-detected.

Alternatively: `npx vercel` from this folder after installing the Vercel CLI.
