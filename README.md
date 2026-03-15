# AQ Researchs — React + Vite Website

Multi-page high-end website for AQ Research. React + Vite + React Router.

## Quick Start
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # Production build → dist/
npm run preview    # Preview production build
```

## Pages
| Route | Description |
|---|---|
| `/` | Home — Hero, Stats, About, Services, Steps, Testimonials, Portfolio, Team |
| `/about` | Company story, values, full team with expandable bios |
| `/services` | Qual/Quant methodology, Digital Marketing detail, Sector applications |
| `/contact` | Contact form + 4 India office locations |

## Deployment
- **Netlify** — deploy `dist/`, `_redirects` handles SPA routing
- **Vercel** — deploy `dist/`, `vercel.json` handles rewrites
- **GitHub Pages** — swap `BrowserRouter` → `HashRouter` in App.jsx
