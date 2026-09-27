# IRON PULSE — Premium Gym Website

A premium, dark-themed gym website built with React + Vite + Tailwind CSS.

## Project structure

```
iron-pulse/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── siteConfig.js        ← edit this file to customize content
│   ├── hooks/
│   │   └── useReveal.js     ← scroll-reveal animation hook
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── Counter.jsx
│       ├── About.jsx
│       ├── Programs.jsx
│       ├── Trainers.jsx
│       ├── Facilities.jsx
│       ├── Membership.jsx
│       ├── Testimonials.jsx
│       ├── CTA.jsx
│       ├── Contact.jsx
│       └── Footer.jsx
```

## Run locally

Requires Node.js 18+.

```bash
cd iron-pulse
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Customizing content

Almost everything gym-specific lives in **`src/siteConfig.js`**:
- Address, phone, email, hours, Google Maps query
- Social links
- Stats, programs, trainers, facilities
- Membership plans and pricing
- Testimonials

Change these values and the whole site updates — no need to touch component code.
Trainer and facility photos are Unsplash URLs; swap in your own image paths or URLs.

## Deploying

### Vercel
1. Push this project to a GitHub repo.
2. Go to vercel.com → **New Project** → import the repo.
3. Framework preset: **Vite**. Build command `npm run build`, output directory `dist`.
4. Deploy.

### Netlify
1. Push this project to a GitHub repo.
2. Go to app.netlify.com → **Add new site** → **Import an existing project**.
3. Build command: `npm run build`. Publish directory: `dist`.
4. Deploy.

Both platforms auto-deploy on every push to the connected branch once set up.

## Suggestions for further improvement

- Swap Unsplash stock imagery for real gym photos and trainer headshots.
- Wire the contact form to a real backend (Formspree, Netlify Forms, or your own API) — it currently validates but does not send.
- Add a blog/results section for SEO content marketing.
- Add a class-booking calendar if you offer scheduled group classes.
- Add real Open Graph image at `/public/og-image.jpg` for social sharing previews.
- Consider a lightweight CMS (e.g. Sanity, Contentful) if trainers/pricing change often.
