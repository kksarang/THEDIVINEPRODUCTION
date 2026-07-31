# THEDIVINEPRODUCTION

# THE DIVINE PRODUCTION

Premium event management website — **Creating Experiences, Not Just Events**.

## Stack

- React + Vite
- Tailwind CSS v4
- React Router
- Framer Motion + Lenis smooth scroll
- Swiper, React Hook Form
- React Helmet Async
- EmailJS (set `VITE_EMAILJS_*` env vars for live send)

## Getting started

```bash
cd the-divine-production
npm install
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |

## Structure

```
src/
  components/   # UI, layout, home, shared
  pages/        # Route pages
  layouts/      # Main shell
  hooks/        # Lenis, scroll, mouse
  data/         # Dummy content
  services/     # EmailJS helper
  routes/       # Lazy-loaded routes
  styles/       # Global theme via index.css
```

## EmailJS

Create a `.env` file (or host env vars) with:

```bash
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

Until configured, form submissions run in demo mode and log to the console.
