# Mobile App Assignment — Pixel-Perfect Implementation

## Demo (Hosted)

* **Deployed on:** Vercel (or similar)
* **Live URL:** [*replace-with-your-deployment-url*](https://educase-assignment-cyan-nine.vercel.app/)

---

## Summary

This repository contains a pixel-perfect web implementation of the provided mobile app design. The app UI is centered on the webpage and responsive across breakpoints. Navigation between pages is handled with client-side routing for a fast, seamless experience. The project was built with modern best practices: Tailwind CSS, code splitting (dynamic imports), and production-level optimizations.

---

## Tech stack

* **Framework:** React.js
* **Styling:** Tailwind CSS
* **Routing:** React Router (client-side routing)
* **Build & Deploy:** Vercel
* **Bundling / Optimization:** Webpack / Vite with dynamic imports for code-splitting

---

## Key features & implementation notes

* **Pixel-perfect:** All screens follow the Adobe XD reference closely. Spacing, typography, and color palette were matched to the design tokens.
* **Centered mobile interface:** The mobile app mockup is placed inside a centered viewport container on wide screens to mimic a phone frame and keep the presentation consistent.
* **Responsive & accessible:** Breakpoints and a11y considerations (semantic HTML, `alt` text, focus states) were included.
* **Seamless navigation:** Client-side routing enables instant page transitions with preserved state where appropriate.
* **Performance & optimizations:**

  * Code-splitting using dynamic imports for large components/pages.
  * Lazy-loaded images.
  * Minified CSS and JS via build pipeline.
  * Tree-shaking enabled by default (React + ES Modules).
* **Tailwind:** Utility-driven styles with configuration in `tailwind.config.js`. Custom theme tokens (colors, fonts, spacing) are placed there for consistency.

---

## Test User Credentials

For testing the login functionality, you can use the following credentials:

* **Email:** `jane@example.com`
* **Password:** `1234`

---

## Folder structure (example)

```
/ (root)
├─ public/                # static assets (images, favicon)
├─ src/
│  ├─ components/         # reusable UI components
│  ├─ layouts/            # app layout and centered phone container
│  ├─ pages/              # React Router views
│  ├─ styles/             # Tailwind globals and utilities
│  └─ utils/              # helper functions
├─ .env                   # environment variables (not committed)
├─ package.json
└─ README.md
```

---

## How to run locally

1. Clone the repo

```bash
git clone <repo-url>
cd <repo-folder>
```

2. Install dependencies

```bash
npm install
# or
yarn
```

3. Run the dev server

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000)

---

## Build & Deploy (Vercel)

1. Push your code to GitHub.
2. Sign in to Vercel and create a new project.
3. Import the GitHub repository and accept the default React settings.
4. Set any environment variables (if used) in the Vercel dashboard.
5. Click **Deploy**. Vercel will run `npm run build` and publish the site.

**Vercel tips:**

* Use the `REACT_APP_` prefix for any public env vars.
* Configure automatic deployments on the main branch.

---

## Optimization & Code-splitting examples

* **Dynamic import (React):**

```js
import React, { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}
```

---

## Tailwind configuration highlights

* Custom fonts and sizes mapped to the design (e.g., `Rubik` with 16/18/28px tokens).
* Color palette matches design tokens: `#F7F8F9`, `#6C25FF`, `#E70B897B`, `#FFFFFF`, `#1D2226`, etc.
* Responsive utilities used to fine-tune mobile/tablet/desktop layouts.

---

## Accessibility & testing

* Semantic HTML and ARIA where needed.
* Keyboard navigability ensured for interactive components.
* Basic Lighthouse audit checks were performed and key issues fixed (images, contrast, unused CSS).

---

## Known limitations

* Replace the demo URL in this README after deploying to Vercel.
* If you use a different router/bundler, update the scripts accordingly.

---

## Scripts

```json
{
  "dev": "vite",
  "build": "vite build",
  "serve": "vite preview"
}
```

---

## Contribution

If you'd like to improve or modify the project:

1. Fork the repo
2. Create a feature branch
3. Open a PR with a clear description of changes

---
