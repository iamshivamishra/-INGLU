# INGLU Landing Page — React + Tailwind

A React recreation of the INGLU landing page (India's youth community ecosystem platform), built with Vite, React 18, and Tailwind CSS.

## Stack

- **React 18** (functional components + hooks)
- **Vite** — build tool / dev server
- **Tailwind CSS** — utility-first styling
- **lucide-react** — icon set

## Project structure

```
inglu/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx              # Hero banner + phone mockup
│   │   ├── StatsBar.jsx          # 1000+ Events / 500+ Campuses etc.
│   │   ├── WhatIsInglu.jsx       # "Operating system for global youth"
│   │   ├── Framework.jsx         # I-N-G-L-U letter grid
│   │   ├── E3Model.jsx           # Education / Enhancement / Entertainment + sub-brand pills
│   │   ├── EcosystemTabs.jsx     # "An ecosystem for everyone" tabbed section
│   │   ├── BrandsStrip.jsx       # Trusted by leading brands
│   │   ├── SuccessStories.jsx    # Student/Creator/College/Brand story cards
│   │   ├── UpcomingEvents.jsx    # Event cards (GYLC, FOMO Xperience, etc.)
│   │   ├── WhoAreYou.jsx         # Persona cards (Student/Creator/Artist/Brand/College)
│   │   ├── LiveFeed.jsx          # "Live from the community" reel strip
│   │   └── Footer.jsx
│   ├── data.js                   # All mock content (stats, events, stories, etc.)
│   ├── App.jsx                   # Assembles all sections
│   ├── main.jsx                  # React entry point
│   └── index.css                 # Tailwind directives
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Notes

- All content is **mock/static data** living in `src/data.js` — swap in real copy, images, and brand logos there.
- Images currently use Unsplash placeholder URLs — replace with your own assets in production.
- Colors and gradients are defined to match the source design (blue/purple/teal brand palette); tweak in `tailwind.config.js` under `theme.extend.colors.inglu`.
- Fully responsive: stacks to a single column on mobile, scales up to the multi-column grid shown in the design on desktop.
- No backend/API calls — this is a pure frontend build. Wire up form submission (newsletter), CMS data, or auth as needed.
